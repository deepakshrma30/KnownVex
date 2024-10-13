package com.Knowvex.Configurations;

import com.razorpay.RazorpayClient;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RazorpayConfig {

    private final String KEY_ID;
    private final String KEY_SECRET;

    public RazorpayConfig(
            @Value("${rzp_key_id}") String keyId,
            @Value("${rzp_key_secret}") String keySecret
    ) {
        this.KEY_ID = keyId;
        this.KEY_SECRET = keySecret;
    }
    @Bean
    public RazorpayClient razorpayClient() throws Exception {
        System.out.printf("KEY %S",KEY_SECRET);
        return new RazorpayClient(KEY_ID, KEY_SECRET);
    }
}
