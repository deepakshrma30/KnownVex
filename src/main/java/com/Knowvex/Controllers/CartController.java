package com.Knowvex.Controllers;

import com.Knowvex.Models.CartModel;
import com.Knowvex.Services.CartService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/cart")
@AllArgsConstructor
public class CartController {

    private final CartService cartService;

    @PostMapping("/add")
    private boolean addToCart(@RequestBody CartModel cart){
        return cartService.addToCart(cart);
    }

    @DeleteMapping("/remove/{cartId}")
    public boolean removeFromCart(@PathVariable UUID cartId) {
        return cartService.removeFromCart(cartId);
    }

    @GetMapping("/all")
    public List<CartModel> getAllCartItems() {
        return cartService.userAllCart();
    }

}
