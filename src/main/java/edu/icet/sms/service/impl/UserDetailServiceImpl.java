package edu.icet.sms.service.impl;

import edu.icet.sms.entity.UserEntity;
import edu.icet.sms.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserDetailServiceImpl implements UserDetailsService {

    final UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<UserEntity> userRepo = repository.findByUsername(username);
        if (userRepo.isEmpty()){ throw new UsernameNotFoundException("Could not findUser");
        }
        UserEntity user=userRepo.get();
        return User.builder().username(user.getUsername()).password(user.getPassword()).roles(user.getRole().name()).build();


    }
}
