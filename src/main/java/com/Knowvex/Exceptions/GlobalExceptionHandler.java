package com.Knowvex.Exceptions;

import com.Knowvex.Exceptions.CustomExceptions.CartItemAlreadyExistsException;
import com.Knowvex.Exceptions.CustomExceptions.InvalidTokenException;
import com.Knowvex.Exceptions.CustomExceptions.UserNotAuthenticatedException;
import jakarta.validation.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(InvalidTokenException.class)
    private ResponseEntity<String> invalidTokenHandler(InvalidTokenException e){
        return ResponseEntity.badRequest().body(e.getMessage());
    }

    @ExceptionHandler(IllegalArgumentException.class)
    private ResponseEntity<String> exceptionHandler(IllegalArgumentException e){
        return ResponseEntity.badRequest().body(e.getMessage());
    }

    @ExceptionHandler(ConstraintViolationException.class)
    private ResponseEntity<String> exceptionHandler(ConstraintViolationException e){
        return ResponseEntity.badRequest().body(e.getMessage());
    }


    @ExceptionHandler(UserNotAuthenticatedException.class)
    public ResponseEntity<String> handleUserNotAuthenticated(UserNotAuthenticatedException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(CartItemAlreadyExistsException.class)
    public ResponseEntity<String> handleCartItemExists(CartItemAlreadyExistsException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.CONFLICT);
    }

    @ExceptionHandler(Exception.class)
    private ResponseEntity<String> exceptionHandler(Exception e){
        return ResponseEntity.badRequest().body(e.getMessage());
    }
}
