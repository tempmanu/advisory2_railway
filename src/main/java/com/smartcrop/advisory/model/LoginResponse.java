package com.smartcrop.advisory.model;
import lombok.*;

@Data
@AllArgsConstructor
public class LoginResponse {
    private String status;    // "success" or "error"
    private String message;   // "Login successful!" or "Wrong password"
    private Long userId;      // User's ID (save this in browser to track who is logged in)
    private String username;  // Username to show in the UI
}