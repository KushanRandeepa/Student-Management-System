package edu.icet.sms.service;

import edu.icet.sms.dto.LoginRequest;
import edu.icet.sms.dto.JwtResponse;
import edu.icet.sms.dto.RefreshTokenRequest;
import edu.icet.sms.dto.SignupRequest;

public interface AuthService {
    boolean signupUser(SignupRequest request);
    JwtResponse login(LoginRequest request);
    JwtResponse refreshToken(RefreshTokenRequest token);
}
