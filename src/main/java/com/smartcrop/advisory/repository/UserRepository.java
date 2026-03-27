package com.smartcrop.advisory.repository;

import com.smartcrop.advisory.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    // Spring Boot creates this SQL automatically:
    // SELECT * FROM users WHERE username = ?
    Optional<User> findByUsername(String username);

    // SELECT * FROM users WHERE email = ?
    Optional<User> findByEmail(String email);

    // Check if email already exists
    boolean existsByEmail(String email);
    boolean existsByUsername(String username);
}