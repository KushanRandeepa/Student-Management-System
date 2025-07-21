package edu.icet.sms.security;

import edu.icet.sms.entity.UserEntity;
import edu.icet.sms.repository.UserRepository;
import io.jsonwebtoken.Jwts;

import io.jsonwebtoken.security.Keys;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;

import java.security.NoSuchAlgorithmException;
import java.util.Date;
import java.util.Objects;

@Component

public class JWTUtil {

    final SecretKey secretKey;



    @Autowired
    private  UserRepository userRepository;

    public JWTUtil() {
        try {
            SecretKey key= KeyGenerator.getInstance("HmacSHA256").generateKey();
            secretKey=Keys.hmacShaKeyFor(key.getEncoded());
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }

    }

    public String generateAccessToken(UserDetails userDetails) {
        return buildToken(userDetails, 15000);
    }

    public String generateRefreshToken(UserDetails userDetails) {
        return buildToken(userDetails, 604800000);
    }

    public String buildToken(UserDetails userDetails, long expiration) {
        UserEntity user = userRepository.findByUsername(userDetails.getUsername()).orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return Jwts.builder()
                .subject(user.getUsername())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + expiration))
                .claim("Role", user.getRole())
                .claim("customId", user.getCustomId())
                .signWith(secretKey)
                .compact();
    }

    public String getUserNameFromToken(String token) {
        try {
            return Jwts.parser()
                    .verifyWith(secretKey)
                    .build()
                    .parseSignedClaims(token)
                    .getPayload()
                    .getSubject();
        } catch (Exception e) {
            return null;
        }
    }

    private Date getExpirationDate(String token) {
        try {
            return Jwts.parser()
                    .verifyWith(secretKey)
                    .build()
                    .parseSignedClaims(token)
                    .getPayload()
                    .getExpiration();
        } catch (Exception e) {
            return null;
        }
    }

    private boolean isTokenExpired(String token) {
        return Objects.requireNonNull(getExpirationDate(token)).before(new Date());
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = getUserNameFromToken(token);
        assert username != null;
        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }


}