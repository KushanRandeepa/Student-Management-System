package edu.icet.sms.dto;

import edu.icet.sms.utill.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class SignupRequest {
    private String username;
    private String email;
    private String phoneNumber;
    private String password;
    private Role role;
}

