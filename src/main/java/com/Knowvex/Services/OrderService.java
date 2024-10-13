package com.Knowvex.Services;

import com.Knowvex.Enums.OrderStatusEnum;
import com.Knowvex.Models.BillingAddressModel;
import com.Knowvex.Models.OrderModel;
import com.razorpay.RazorpayException;

import java.util.List;

public interface OrderService {
    OrderModel checkout(BillingAddressModel address) throws RazorpayException;
    boolean updateOrderStatus(String orderId, OrderStatusEnum status);

    List<OrderModel> allOrders();
}
