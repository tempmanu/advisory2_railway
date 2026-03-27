package com.smartcrop.advisory.controller;

import com.smartcrop.advisory.model.SoilRequest;
import com.smartcrop.advisory.model.SoilResponse;
import com.smartcrop.advisory.service.SoilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController  // Tells Spring: "This class handles API requests"
@RequestMapping("/api/soil")  // All URLs in this controller start with /api/soil
@CrossOrigin(origins = "*")  // Allows your HTML pages to call this API
public class SoilController {

    @Autowired  // Spring Boot automatically gives us the SoilService object
    private SoilService soilService;

    // This method runs when someone sends POST request to /api/soil/analyze
    @PostMapping("/analyze")
    public SoilResponse analyzeSoil(@RequestBody SoilRequest request) {
        // @RequestBody means: "read the JSON data the HTML sent me"
        return soilService.analyzeSoil(request);
    }

    // Test endpoint — visit http://localhost:8080/api/soil/test in browser to check
    @GetMapping("/test")
    public String test() {
        return "Soil API is working!";
    }
}