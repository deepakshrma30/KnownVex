package com.Knowvex;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.thymeleaf.ThymeleafAutoConfiguration;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication(exclude = { ThymeleafAutoConfiguration.class })
@EnableAsync
@EnableScheduling
public class KnowvexApplication {

	public static void main(String[] args) {
		SpringApplication.run(KnowvexApplication.class, args);
	}

}
