package com.Knowvex.Utils;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ResourceLoader;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@Component
@RequiredArgsConstructor
public class EmailUtil {

    private final JavaMailSender mailSender;
    private final TemplateEngine templateEngine;

    @Value("${spring.mail.username}")
    private String fromMail;

    private static final String UI_FORGOT_PASSWORD_URL = "http://localhost:9000/knowvex/swagger-ui/index.html#";
    private final ResourceLoader resourceLoader;

    @Async
    protected void sendMail(String toEmail, String subject, Context cxt, String templateName) throws MessagingException {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
        mimeMessageHelper.setFrom(fromMail);
        mimeMessageHelper.setTo(toEmail);
        mimeMessageHelper.setSubject(subject);
        mimeMessageHelper.setText(templateEngine.process(templateName, cxt), true);
        mailSender.send(mimeMessage);
    }

    @Async
    public void sendWelcomeEmail(String toEmail,String name) throws MessagingException {
        Context cxt = new Context();
        cxt.setVariable("name", name);
        setCommonVariables(cxt);
        sendMail(toEmail, "Reset Knowex Password", cxt, "resetPasswordTemplate");
    }

    @Async
    public void sendResetPasswordMail(String toEmail, String token, String name) throws MessagingException {
        Context cxt = new Context();
        cxt.setVariable("name", name);
        cxt.setVariable("resetLink", UI_FORGOT_PASSWORD_URL + "?token=" + token);
        setCommonVariables(cxt);
        sendMail(toEmail, "Reset Knowex Password", cxt, "resetPasswordTemplate");
    }

    @Async
    public void sendOtpMail(String toEmail, long otp, String name) throws MessagingException {
        Context cxt = new Context();
        cxt.setVariable("name", name);
        cxt.setVariable("otp", String.valueOf(otp).split(""));
        setCommonVariables(cxt);
        sendMail(toEmail, "User verification OTP", cxt, "otpTemplate");
    }

    private void setCommonVariables(Context cxt) {
        cxt.setVariable("logo", "https://ik.imagekit.io/abpn9lid4/Knowvex%20Templates/Logo.png?updatedAt=1725993825004");
        cxt.setVariable("facebook", "https://ik.imagekit.io/abpn9lid4/Knowvex%20Templates/facebook.png?updatedAt=1725994200219");
        cxt.setVariable("instagram", "https://ik.imagekit.io/abpn9lid4/Knowvex%20Templates/instagram.png?updatedAt=1725994200100");
    }
}
