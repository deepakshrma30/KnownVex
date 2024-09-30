package com.Knowvex.Services.Imp;

import com.Knowvex.Enums.RoleEnum;
import com.Knowvex.Models.UserModel;
import com.Knowvex.Repositories.UserRepository;
import com.Knowvex.Services.UserService;
import com.Knowvex.Utils.EmailUtil;
import com.Knowvex.Utils.JwtUtil;
import com.Knowvex.Utils.OtpUtil;
import com.Knowvex.Utils.ResetTokenUtil;
import jakarta.mail.MessagingException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import jakarta.validation.Validator;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Objects;
import java.util.Set;
import java.util.regex.Pattern;

@Service
@RequiredArgsConstructor
public class UserServiceImp implements UserService {

    private final UserRepository userRepository;
    private final Validator validator;
    private final OtpUtil otpUtil;
    private final ResetTokenUtil resetTokenUtil;
    private final EmailUtil emailUtil;
    private final BCryptPasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    @Value("${jwt.token.header.key}")
    private String AUTH_KEY;

    private static final Pattern EMAIL_PATTERN = Pattern.compile("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}");

    @Override
    public UserModel createUser(UserModel user) throws Exception {
        validateUser(user);
        validateEmail(user.getEmail());
        checkEmailDoesNotExist(user.getEmail());
        String hashPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(hashPassword);
        user.setActive(false);
        user.setRole(RoleEnum.USER);
        long otp = otpUtil.generateOtp(user.getEmail());
        emailUtil.sendOtpMail(user.getEmail(), otp, user.getFirstName());
        userRepository.save(user);
        return user;
    }

    @Override
    public boolean verifyOtp(String email, long otp) throws MessagingException {
        if (otpUtil.isValidOtp(email, otp)) {
            UserModel user = userRepository.findByEmailIgnoreCase(email);
            user.setActive(true);
            emailUtil.sendWelcomeEmail(user.getEmail(),user.getFirstName());
            userRepository.save(user);
            return true;
        }
        return false;
    }

    @Override
    public boolean resendOtp(String email) throws MessagingException, IOException {
        UserModel user = userRepository.findByEmailIgnoreCase(email);
        long otp = otpUtil.resendOtp(email);
        emailUtil.sendOtpMail(user.getEmail(), otp, user.getFirstName());
        return true;
    }

    @Override
    public boolean forgotPassword(String email) throws MessagingException {
        UserModel user = userRepository.findByEmailIgnoreCase(email);
        if (user == null) {
            throw new IllegalArgumentException("No user found with this email");
        }
        String token = resetTokenUtil.generateToken(user.getEmail());
        emailUtil.sendResetPasswordMail(user.getEmail(), token, user.getFirstName());
        return true;
    }

    @Override
    public boolean updatePassword(String token, String password) {
        String userEmail = resetTokenUtil.getUserEmail(token);
        if(Objects.isNull(userEmail)) {
            throw new IllegalArgumentException("Token expired");
        }
        UserModel user = userRepository.findByEmailIgnoreCase(userEmail);
        user.setPassword(password);
        userRepository.save(user);
        return true;
    }

    @Override
    public boolean isTokenValid(String token) {
        return !Objects.isNull(resetTokenUtil.getUserEmail(token));
    }

    @Override
    public UserModel login(UserModel user, HttpServletResponse response) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(),user.getPassword()));
        if (!authentication.isAuthenticated()) {
            throw new UsernameNotFoundException("Invalid user request!");
        }

        UserModel userModel = (UserModel) authentication.getPrincipal();

        String token = jwtUtil.generateToken(userModel.getEmail(),userModel.getId());

        Cookie cookie=new Cookie(AUTH_KEY,token);
        cookie.setPath("/knowvex");
        response.addCookie(cookie);

        return userModel;
    }

    private void validateUser(UserModel user) {
        Set<ConstraintViolation<UserModel>> violations = validator.validate(user);
        if (!violations.isEmpty()) {
            throw new ConstraintViolationException(violations);
        }
    }

    private void validateEmail(String email) {
        if (!EMAIL_PATTERN.matcher(email).matches()) {
            throw new IllegalArgumentException("Enter a valid email.");
        }
    }

    private void checkEmailDoesNotExist(String email) {
        if (userRepository.existsByEmailIgnoreCase(email)) {
            throw new IllegalArgumentException("User already present with this email.");
        }
    }
}
