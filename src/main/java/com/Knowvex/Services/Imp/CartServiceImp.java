package com.Knowvex.Services.Imp;

import com.Knowvex.Exceptions.CustomExceptions.CartItemAlreadyExistsException;
import com.Knowvex.Models.CartModel;
import com.Knowvex.Models.UserModel;
import com.Knowvex.Repositories.CartRepository;
import com.Knowvex.Services.CartService;
import com.Knowvex.Utils.JwtUtil;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CartServiceImp implements CartService {

    private final JwtUtil jwtUtil;
    private final CartRepository cartRepository;

    @Override
    @Transactional
    public boolean addToCart(CartModel cart) {
        UserModel user = jwtUtil.getAuthenticatedUser();

        boolean exists = cartRepository.existsByProductAndPlanAndUser(cart.getProduct(), cart.getPlan(), user);
        if (exists) {
            throw new CartItemAlreadyExistsException("This item is already in your cart.");
        }

        cart.setUser(user);
        cartRepository.save(cart);
        return true;
    }


    @Override
    @Transactional
    public boolean removeFromCart(UUID cartId) {
        UserModel user = jwtUtil.getAuthenticatedUser();

        CartModel cart = cartRepository.findById(cartId)
                .orElseThrow(() -> new EntityNotFoundException("Cart item not found."));

        if (!cart.getUser().getId().equals(user.getId())) {
            throw new AccessDeniedException("You are not authorized to remove this cart item.");
        }

        cartRepository.delete(cart);
        return true;
    }


    @Override
    public List<CartModel> userAllCart() {
        UserModel user = jwtUtil.getAuthenticatedUser();
        return cartRepository.findAllByUser(user);
    }
}
