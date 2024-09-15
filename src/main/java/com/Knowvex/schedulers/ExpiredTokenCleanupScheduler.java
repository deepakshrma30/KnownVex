package com.Knowvex.schedulers;

import com.Knowvex.Repositories.OtpRepository;
import com.Knowvex.Repositories.ResetTokenRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class ExpiredTokenCleanupScheduler {

    private OtpRepository otpRepository;
    private ResetTokenRepository resetTokenRepository;

    @Scheduled(cron = "0 0 * * * ?")
    private void otpCleanupScheduler(){
        System.out.println(otpRepository.findAll());
        otpRepository.deleteExpiredOtps();
        System.out.println(otpRepository.findAll());
    }

    @Scheduled(cron = "0 0 * * * ?")
    private void tokenCleanupScheduler(){
        System.out.println(resetTokenRepository.findAll());
        resetTokenRepository.deleteExpiredToken();
        System.out.println(resetTokenRepository.findAll());
    }

}
