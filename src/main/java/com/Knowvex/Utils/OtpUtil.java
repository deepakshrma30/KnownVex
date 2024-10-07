package com.Knowvex.Utils;

import com.Knowvex.Models.OtpModel;
import com.Knowvex.Repositories.OtpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.time.Duration;
import java.time.Instant;
import java.util.Optional;
import java.util.Random;

@Component
public class OtpUtil {

    private static final int OTP_EXPIRE_DURATION_MINUTES = 10;
    private static final Random RANDOM = new Random();

    @Autowired
    private OtpRepository otpRepository;

    public long generateOtp(String email) {
        Optional<OtpModel> existingOtp = Optional.ofNullable(otpRepository.findByEmailIgnoreCase(email));

        if (existingOtp.isPresent()) {
            OtpModel otpModel = existingOtp.get();
            Timestamp now = new Timestamp(System.currentTimeMillis());
            if (otpModel.getExpiresAt().after(now)) {
                return otpModel.getOtp();
            } else {
                otpRepository.delete(otpModel);
            }
        }

        OtpModel newOtpModel = createOtp(email);
        otpRepository.save(newOtpModel);
        return newOtpModel.getOtp();
    }

    public boolean isValidOtp(String email, long otp) {
        OtpModel otpModel = otpRepository.findByEmailIgnoreCase(email);
        if (otpModel == null || otpModel.getExpiresAt().before(new Timestamp(System.currentTimeMillis()))) {
            throw new IllegalArgumentException("Otp expired");
        }
        boolean isValid = otpModel.getOtp() == otp;
        if (isValid) {
            otpRepository.delete(otpModel);
        }
        return isValid;
    }

    private OtpModel createOtp(String email) {
        long otp = RANDOM.nextInt(999999);
        OtpModel otpModel = new OtpModel();
        otpModel.setEmail(email);
        otpModel.setOtp(otp);
        Timestamp now = new Timestamp(System.currentTimeMillis());
        otpModel.setCreatedAt(now);
        otpModel.setExpiresAt(Timestamp.from(Instant.now().plus(Duration.ofMinutes(OTP_EXPIRE_DURATION_MINUTES))));
        System.out.println(otpModel.toString());
        return otpModel;
    }
}
