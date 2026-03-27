package com.smartcrop.advisory.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)   // No two users can have same username
    private String username;

    @Column(unique = true)   // No two users can have same email
    private String email;

    private String password;  // We'll store plain text for now (add encryption later)
    private String phone;
    private String location;  // e.g. "Telangana"

    private LocalDateTime createdAt = LocalDateTime.now();
}