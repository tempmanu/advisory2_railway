package com.smartcrop.advisory.controller;

import com.smartcrop.advisory.model.*;
import com.smartcrop.advisory.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")  // All URLs start with /api/users
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    // POST /api/users/register → Register new user
    @PostMapping("/register")
    public LoginResponse register(@RequestBody User newUser) {
        return userService.register(newUser);
    }

    // POST /api/users/login → Login
    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        return userService.login(request);
    }
}