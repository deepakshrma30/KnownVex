package com.Knowvex.Utils;

import com.Knowvex.Models.ResetTokenModel;
import com.Knowvex.Repositories.ResetTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.security.SecureRandom;
import java.sql.Timestamp;
import java.time.Duration;
import java.time.Instant;
import java.util.Base64;
import java.util.Optional;

@Component
public class ResetTokenUtil {

    private static final SecureRandom SECURE_RANDOM = new SecureRandom();
    private static final Base64.Encoder BASE64_ENCODER = Base64.getUrlEncoder();
    private static final int TOKEN_EXPIRE_DURATION_MINUTES = 30;

    @Autowired
    private ResetTokenRepository resetTokenRepository;

    public String generateToken(String email) {
        Optional<ResetTokenModel> existingTokenOpt = Optional.ofNullable(resetTokenRepository.findByEmailIgnoreCase(email));
        Timestamp now = new Timestamp(System.currentTimeMillis());

        if (existingTokenOpt.isPresent()) {
            ResetTokenModel existingToken = existingTokenOpt.get();
            if (existingToken.getExpiresAt().after(now)) {
                return existingToken.getToken();
            }
            resetTokenRepository.delete(existingToken);
        }

        String token = createSecureToken();
        ResetTokenModel resetToken = new ResetTokenModel();
        resetToken.setEmail(email);
        resetToken.setToken(token);
        resetToken.setCreatedAt(now);
        resetToken.setExpiresAt(Timestamp.from(Instant.now().plus(Duration.ofMinutes(TOKEN_EXPIRE_DURATION_MINUTES))));

        resetTokenRepository.save(resetToken);
        return token;
    }

    public String getUserEmail(String token) {
        ResetTokenModel resetTokenModel = resetTokenRepository.findByToken(token);
        if (resetTokenModel == null || resetTokenModel.getExpiresAt().before(new Timestamp(System.currentTimeMillis()))) {
            throw new IllegalArgumentException("Token expired or invalid.");
        }
        return resetTokenModel.getEmail();
    }

    private String createSecureToken() {
        byte[] randomBytes = new byte[24];
        SECURE_RANDOM.nextBytes(randomBytes);
        return BASE64_ENCODER.encodeToString(randomBytes);
    }
}
