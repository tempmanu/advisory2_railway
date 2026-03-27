package com.smartcrop.advisory.model;

import jakarta.persistence.*;  // JPA annotations to map Java ↔ MySQL
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity  // Tells JPA: "This class is a database table"
@Table(name = "soil_analysis")  // Maps to the "soil_analysis" table
public class SoilAnalysis {

    @Id  // This field is the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Auto-increment
    private Long id;

    @Column(name = "soil_type")
    private String soilType;

    @Column(name = "ph_value")
    private Double phValue;

    private String crop;

    @Column(name = "water_avail")
    private String waterAvail;

    @Column(name = "ph_status")
    private String phStatus;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();
}