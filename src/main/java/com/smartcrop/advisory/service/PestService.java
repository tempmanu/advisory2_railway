package com.smartcrop.advisory.service;

import com.smartcrop.advisory.model.PestReport;
import com.smartcrop.advisory.repository.PestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PestService {

    @Autowired
    private PestRepository pestRepository;

    public PestReport detectPest(String crop, String symptoms) {
        String symptomLower = symptoms.toLowerCase();
        String pestName;
        String treatment;

        if (symptomLower.contains("yellow") && symptomLower.contains("leaf")) {
            pestName  = "Leaf Folder / Yellowing";
            treatment = "Spray Chlorpyrifos 2ml/L water. Remove affected leaves.";
        } else if (symptomLower.contains("hole") || symptomLower.contains("boring")) {
            pestName  = "Stem Borer";
            treatment = "Apply Carbofuran 3G: 8 kg/acre. Use pheromone traps.";
        } else if (symptomLower.contains("white") || symptomLower.contains("powder")) {
            pestName  = "Powdery Mildew (Fungus)";
            treatment = "Spray Mancozeb 2.5g/L. Improve air circulation.";
        } else if (symptomLower.contains("wilt") || symptomLower.contains("dying")) {
            pestName  = "Root Rot / Wilt Disease";
            treatment = "Drench with Copper Oxychloride 3g/L. Improve drainage.";
        } else {
            pestName  = "Unknown Pest/Disease";
            treatment = "Consult local agricultural officer. Take leaf sample to lab.";
        }

        PestReport report = new PestReport();
        report.setCrop(crop);
        report.setSymptoms(symptoms);
        report.setPestName(pestName);
        report.setTreatment(treatment);
        return pestRepository.save(report);
    }
}
