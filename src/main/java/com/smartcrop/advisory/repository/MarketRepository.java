package com.smartcrop.advisory.repository;

import com.smartcrop.advisory.model.MarketPrice;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MarketRepository extends JpaRepository<MarketPrice, Long> {
    List<MarketPrice> findByCropName(String cropName);
}
