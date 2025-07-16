package edu.icet.sms.controller;

import edu.icet.sms.dto.SignupRequest;
import edu.icet.sms.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class AuthController {

    final AuthService authService;

    @PostMapping("/signup")
    public void signup(@RequestBody SignupRequest request){
        boolean b = authService.signupUser(request);
        System.out.println(b);
    }

}
