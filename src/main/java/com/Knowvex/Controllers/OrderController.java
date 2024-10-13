package com.Knowvex.Controllers;

import com.Knowvex.Enums.OrderStatusEnum;
import com.Knowvex.Models.BillingAddressModel;
import com.Knowvex.Models.OrderModel;
import com.Knowvex.Services.OrderService;
import com.razorpay.RazorpayException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/checkout")
    private OrderModel checkout(@RequestBody BillingAddressModel address) throws RazorpayException {
        return orderService.checkout(address);
    }

    @PutMapping("/{orderId}/status")
    public boolean updateOrderStatus(
            @PathVariable String orderId,
            @RequestParam OrderStatusEnum status) {
        return orderService.updateOrderStatus(orderId, status);
    }

    @GetMapping("/all")
    public List<OrderModel> allOrders(){
        return orderService.allOrders();
    }
}
