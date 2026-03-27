package com.smartcrop.advisory.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "market_prices")
public class MarketPrice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String cropName;
    private String market;
    private Double pricePerQuintal;
    private String unit;
    private String trend;
    private LocalDate priceDate = LocalDate.now();
}
