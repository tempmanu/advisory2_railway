package com.smartcrop.advisory.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "pest_reports")
public class PestReport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String crop;
    private String symptoms;
    private String pestName;
    private String treatment;
    private LocalDateTime reportedAt = LocalDateTime.now();
}
