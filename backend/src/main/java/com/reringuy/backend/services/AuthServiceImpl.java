package com.reringuy.backend.services;

import com.reringuy.backend.models.dto.LoginRequest;
import com.reringuy.backend.models.dto.RegisterRequest;
import com.reringuy.backend.models.entities.User;
import com.reringuy.backend.repositories.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

@Service
public class AuthServiceImpl {
    @Autowired
    private UserRepository userRepository;

    public User login(LoginRequest loginRequest, AuthenticationManager authenticationManager) throws AuthenticationException {
        try {
            var usernamePassword = new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword());
            Authentication auth = authenticationManager.authenticate(usernamePassword);

            if (auth == null || !auth.isAuthenticated()) {
                throw new AuthenticationException("Authenticacao falhou") {
                    @Override
                    public String getMessage() {
                        return super.getMessage();
                    }
                };
            }

            return (User) auth.getPrincipal();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @PostMapping("/register")
    public void register(RegisterRequest registerRequest) {
        if (userRepository.findByEmail(registerRequest.getEmail()).isPresent()) return;

        String hashedPassword = new BCryptPasswordEncoder().encode(registerRequest.getPassword());

        registerRequest.setPassword(hashedPassword);

        ModelMapper modelMapper = new ModelMapper();

        User newUser = modelMapper.map(registerRequest, User.class);

        userRepository.save(newUser);
    }
}
