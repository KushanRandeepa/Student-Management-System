package edu.icet.sms.service;

import edu.icet.sms.dto.SignupRequest;

public interface AuthService {
    boolean signupUser(SignupRequest request);

}
