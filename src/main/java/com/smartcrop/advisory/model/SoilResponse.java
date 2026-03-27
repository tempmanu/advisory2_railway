package com.smartcrop.advisory.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.List;

@Data
@AllArgsConstructor  // Creates a constructor that takes all fields
public class SoilResponse {

    private String status;             // "success" or "error"
    private String crop;               // Which crop was analyzed
    private String phStatus;           // "acidic", "neutral", "alkaline"
    private List<String> recommendations; // List of fertilizer tips

}