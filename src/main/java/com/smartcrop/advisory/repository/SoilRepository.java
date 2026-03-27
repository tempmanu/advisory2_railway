package com.smartcrop.advisory.repository;

import com.smartcrop.advisory.model.SoilAnalysis;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface SoilRepository extends JpaRepository<SoilAnalysis, Long> {
    // Just by extending JpaRepository, you get these methods for FREE:
    // save(entity)       → INSERT into database
    // findById(id)       → SELECT by ID
    // findAll()          → SELECT * FROM table
    // deleteById(id)     → DELETE by ID

    // Custom query — Spring Boot figures out the SQL from the method name!
    List<SoilAnalysis> findByCrop(String crop);
}