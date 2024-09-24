package com.Knowvex.Services;

import com.Knowvex.Models.CartModel;

import java.util.List;
import java.util.UUID;

public interface CartService {
    boolean addToCart(CartModel cart);

    boolean removeFromCart(UUID cartId);

    List<CartModel> userAllCart();
}
