package com.Knowvex.Controllers;

import com.Knowvex.Exceptions.CustomExceptions.InvalidTokenException;
import com.Knowvex.Models.UserModel;
import com.Knowvex.Services.UserService;
import com.Knowvex.Utils.ViewUtil;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.mail.MessagingException;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("")
    private String test(){
        return "Live!!";
    }

    @GetMapping("/admin")
    private String admin(){
        return "admin";
    }

    @PutMapping("/create")
    @JsonView(ViewUtil.signup.class)
    private UserModel createUser(@RequestBody UserModel user) throws Exception {
        return userService.createUser(user);
    }

    @GetMapping("/otp/verify")
    private UserModel otpVerify(@RequestParam String email,@RequestParam long otp,@RequestParam boolean isLogin,HttpServletResponse response) throws MessagingException, InvalidTokenException {
        return userService.verifyOtp(email,otp,isLogin,response);
    }

    @GetMapping("/otp/resend")
    private boolean resendOtp(@RequestParam String email) throws MessagingException, IOException {
        return userService.resendOtp(email);
    }

    @GetMapping("/password/forgot")
    private boolean forgotPassword(@RequestParam String email) throws MessagingException {
        return userService.forgotPassword(email);
    }

    @GetMapping("/password/update")
    private boolean updatePassword(@RequestParam String password,@RequestParam String token){
        return userService.updatePassword(token,password);
    }

    @GetMapping("/token/verify")
    private boolean isTokenValid(@RequestParam String token){
        return userService.isTokenValid(token);
    }

    @PostMapping("/login")
    @JsonView(ViewUtil.signup.class)
    private UserModel login(@JsonView(ViewUtil.login.class) @RequestBody UserModel user, HttpServletResponse response) throws MessagingException {
        return userService.login(user,response);
    }
}
