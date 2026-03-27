package com.smartcrop.advisory.model;
import lombok.Data;

@Data
public class LoginRequest {
    private String username;  // What the user types in the login form
    private String password;
}