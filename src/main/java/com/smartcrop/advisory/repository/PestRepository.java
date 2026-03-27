package com.smartcrop.advisory.repository;

import com.smartcrop.advisory.model.PestReport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PestRepository extends JpaRepository<PestReport, Long> {
}
