package com.Knowvex.Services.Imp;

import com.Knowvex.Enums.OrderStatusEnum;
import com.Knowvex.Models.BillingAddressModel;
import com.Knowvex.Models.CartModel;
import com.Knowvex.Models.OrderModel;
import com.Knowvex.Models.UserModel;
import com.Knowvex.Repositories.CartRepository;
import com.Knowvex.Repositories.OrderRepository;
import com.Knowvex.Services.OrderService;
import com.Knowvex.Utils.JwtUtil;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import lombok.AllArgsConstructor;
import org.json.JSONObject;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class OrderServiceImp implements OrderService {

    private final CartRepository cartRepository;
    private final OrderRepository orderRepository;
    private final JwtUtil jwtUtil;
    private final RazorpayClient razorpayClient;

    @Override
    @Transactional(rollbackFor = {Exception.class, RazorpayException.class})
    public OrderModel checkout(BillingAddressModel address) throws RazorpayException {
        UserModel user = jwtUtil.getAuthenticatedUser();

        List<CartModel> items = cartRepository.findAllByUser(user);
        if (items.isEmpty()) {
            throw new IllegalStateException("Cart is empty. Cannot proceed to checkout.");
        }

        String plans = items.stream()
                .map(item -> item.getPlan() + "_" + item.getProduct())
                .collect(Collectors.joining(", "));
        int amount = items.stream()
                .mapToInt(item -> Math.toIntExact(item.getAmount()))
                .sum();

        JSONObject orderRequest = new JSONObject();
        orderRequest.put("amount", amount * 100); // Amount in paise (1 INR = 100 paise)
        orderRequest.put("currency", "INR");

        String emailPrefix = user.getEmail().split("@")[0];
        String receipt = "receipt_" + emailPrefix + "_" + System.currentTimeMillis();
        orderRequest.put("receipt", receipt);

        Order razorpayOrder = razorpayClient.orders.create(orderRequest);

        OrderModel order = new OrderModel();
        order.setUser(user);
        order.setItems(plans);
        order.setTotalAmount(amount);
        order.setBillingAddress(address);
        order.setOrderId(razorpayOrder.get("id"));
        order.setStatus(OrderStatusEnum.PENDING);

        return orderRepository.save(order);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean updateOrderStatus(String orderId, OrderStatusEnum status) {
        OrderModel order = orderRepository.findByOrderId(orderId)
                .orElseThrow(() -> new IllegalArgumentException("Order not found"));

        if (order.getStatus() == OrderStatusEnum.PENDING) {
            order.setStatus(status);
            clearCart(order.getUser()); // Clear cart on status update
        } else {
            throw new IllegalStateException("Order status cannot be updated from " + order.getStatus());
        }
        orderRepository.save(order);
        return true;
    }

    @Override
    public List<OrderModel> allOrders(){
        return orderRepository.findAll();
    }

    private void clearCart(UserModel user) {
        if (user == null) {
            throw new IllegalStateException("User cannot be null when clearing the cart.");
        }
        cartRepository.deleteAllByUser(user);
    }
}
