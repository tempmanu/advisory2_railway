package com.smartcrop.advisory.service;

import com.smartcrop.advisory.model.SoilAnalysis;
import com.smartcrop.advisory.model.SoilRequest;
import com.smartcrop.advisory.model.SoilResponse;
import com.smartcrop.advisory.repository.SoilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SoilService {

    @Autowired
    private SoilRepository soilRepository;

    public SoilResponse analyzeSoil(SoilRequest request) {
        List<String> recommendations = new ArrayList<>();
        String phStatus;

        double ph = request.getPhValue();
        String crop = request.getCrop().toLowerCase();
        String soilType = request.getSoilType();
        String waterAvail = request.getWaterAvail();

        // pH Status
        if (ph < 6.0) {
            phStatus = "Acidic";
            recommendations.add("Apply lime to increase soil pH.");
        } else if (ph > 7.5) {
            phStatus = "Alkaline";
            recommendations.add("Apply gypsum or sulfur to reduce pH.");
        } else {
            phStatus = "Neutral (Optimal)";
            recommendations.add("pH is in the ideal range. No pH correction needed.");
        }

        // Crop-specific recommendations
        if (crop.equals("cotton")) {
            recommendations.add("Apply DAP: 50 kg/acre as basal dose.");
            recommendations.add("Apply Urea: 75 kg/acre in 3 equal splits.");
            recommendations.add("Spray Zinc Sulphate: 5 kg/acre to prevent deficiency.");
        } else if (crop.equals("rice")) {
            recommendations.add("Apply DAP: 40 kg/acre before transplanting.");
            recommendations.add("Apply Urea: 60 kg/acre in 2 splits.");
            recommendations.add("Maintain 5cm standing water during tillering.");
        } else if (crop.equals("wheat")) {
            recommendations.add("Apply DAP: 50 kg/acre at sowing.");
            recommendations.add("Apply Urea: 55 kg/acre in 2 splits.");
            recommendations.add("Irrigate at crown root initiation stage.");
        } else {
            recommendations.add("Apply balanced NPK fertilizer as per soil test.");
        }

        // Water availability recommendations
        if (waterAvail != null && waterAvail.equalsIgnoreCase("Rainfed")) {
            recommendations.add("Use drought-resistant varieties due to rainfed conditions.");
        }

        // Save to database
        SoilAnalysis analysis = new SoilAnalysis();
        analysis.setSoilType(soilType);
        analysis.setPhValue(ph);
        analysis.setCrop(request.getCrop());
        analysis.setWaterAvail(waterAvail);
        analysis.setPhStatus(phStatus);
        soilRepository.save(analysis);

        return new SoilResponse("success", request.getCrop(), phStatus, recommendations);
    }
}