package com.Knowvex.Services;

import com.Knowvex.Models.UserModel;
import com.Knowvex.Utils.ViewUtil;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.mail.MessagingException;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

public interface UserService {

    @JsonView(ViewUtil.signup.class)
    UserModel createUser(UserModel user) throws Exception;

    boolean verifyOtp(String email,long otp) throws MessagingException;

    boolean resendOtp(String email) throws MessagingException, IOException;

    boolean forgotPassword(String email) throws MessagingException;

    boolean updatePassword(String token,String password);

    boolean isTokenValid(String token);

    UserModel login(UserModel user, HttpServletResponse response);
}
