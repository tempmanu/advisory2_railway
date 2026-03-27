package com.smartcrop.advisory.controller;

import com.smartcrop.advisory.model.PestReport;
import com.smartcrop.advisory.service.PestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/pest")
@CrossOrigin(origins = "*")
public class PestController {

    @Autowired
    private PestService pestService;

    @PostMapping("/detect")
    public PestReport detectPest(@RequestBody Map<String, String> body) {
        String crop     = body.get("crop");
        String symptoms = body.get("symptoms");
        return pestService.detectPest(crop, symptoms);
    }
}
