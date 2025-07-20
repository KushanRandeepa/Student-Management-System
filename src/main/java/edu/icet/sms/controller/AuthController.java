package edu.icet.sms.controller;

import edu.icet.sms.dto.LoginRequest;
import edu.icet.sms.dto.JwtResponse;
import edu.icet.sms.dto.RefreshTokenRequest;
import edu.icet.sms.dto.SignupRequest;
import edu.icet.sms.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {

    final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@RequestBody LoginRequest request){
        JwtResponse login = authService.login(request);
        return ResponseEntity.ok(login);
    }
    @PostMapping("/signup")
    public ResponseEntity<Boolean> signup(@RequestBody SignupRequest request){
        boolean b = authService.signupUser(request);
        return ResponseEntity.ok(b);
    }
    @PostMapping("/refresh")
    public ResponseEntity<JwtResponse> refreshToken(@RequestBody RefreshTokenRequest request) {
        return ResponseEntity.ok(authService.refreshToken(request));
    }
    @GetMapping("/check-username/{username}")
    public ResponseEntity<Boolean> checkUsername(@PathVariable  String username){
        return  ResponseEntity.ok(authService.isExistedUsername(username));
    }
    @GetMapping("/check-email/{email}")
    public ResponseEntity<Boolean> checkEmail(@PathVariable  String email){
        return  ResponseEntity.ok(authService.isExistedEmail(email));
    }
}
