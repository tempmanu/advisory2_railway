package com.smartcrop.advisory.service;

import com.smartcrop.advisory.model.*;
import com.smartcrop.advisory.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public LoginResponse register(User newUser) {
        newUser.setPassword(encoder.encode(newUser.getPassword()));
        User saved = userRepository.save(newUser);
        return new LoginResponse("success", "Registered!", saved.getId(), saved.getUsername());
    }

    public LoginResponse login(LoginRequest request) {
        Optional<User> userOpt = userRepository.findByUsername(request.getUsername());
        if (userOpt.isEmpty()) return new LoginResponse("error", "Not found", null, null);

        User user = userOpt.get();

        if (!encoder.matches(request.getPassword(), user.getPassword())) {
            return new LoginResponse("error", "Wrong password", null, null);
        }

        return new LoginResponse("success", "Login successful!", user.getId(), user.getUsername());
    }
}
