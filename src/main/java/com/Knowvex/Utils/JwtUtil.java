package com.Knowvex.Utils;

import com.Knowvex.Exceptions.CustomExceptions.UserNotAuthenticatedException;
import com.Knowvex.Models.UserModel;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.io.Decoders;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Objects;
import java.util.UUID;
import java.util.function.Function;

@Component
public class JwtUtil {

    private final String SECRET_KEY = "U0R6ZGdOTmdqa1NhcHJrTFYxVWczRXlMTGdCQUhYazZTQzBwbFJGVGltczJ1QT09";

    @Value("${jwt.token.header.key}")
    private String AUTH_KEY;

    private final long JWT_TOKEN_VALIDITY = 60 * 60 * 10;

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSignKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    public String generateToken(String username, UUID userId) {
        HashMap<String, Object> claims = new HashMap<>();
        claims.put("userId",userId.toString());

        long issuedAtMillis = System.currentTimeMillis();
        long expirationMillis = issuedAtMillis + (1000 * JWT_TOKEN_VALIDITY); // 10 hours

        System.out.println("Issued At: " + new Date(issuedAtMillis));
        System.out.println("Expiration: " + new Date(expirationMillis));


        return Jwts.builder().setClaims(claims).setSubject(username)
                .setIssuedAt(new Date(issuedAtMillis))
                .setExpiration(new Date(expirationMillis)) // 10 hours
                .signWith(getSignKey(), SignatureAlgorithm.HS256).compact();
    }

    public Boolean validateToken(String token, String username) {
        final String tokenUsername = extractUsername(token);
        return (username.equals(tokenUsername) && !isTokenExpired(token));
    }

    private Key getSignKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public String extractToken(HttpServletRequest request){
        String authHeader = request.getHeader(AUTH_KEY);
        String token = null;
        if (authHeader != null) {
            token = authHeader;
        }
        if (token == null) {
            Cookie[] cookies = request.getCookies();
            if (cookies != null) {
                for (Cookie cookie : cookies) {
                    if (cookie.getName().equals(AUTH_KEY)) {
                        token = cookie.getValue();
                        break;
                    }
                }
            }
        }
        return token;
    }

    public UserModel getAuthenticatedUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || !authentication.isAuthenticated()
                || authentication.getPrincipal().equals("anonymousUser")) {
            return null;
        }

        UserModel user = (UserModel) authentication.getPrincipal();

        if (Objects.isNull(user)) {
            throw new UserNotAuthenticatedException("User must be authenticated to remove items from the cart.");
        }
        return user;
    }
}
