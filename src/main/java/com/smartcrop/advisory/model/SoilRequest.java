package com.smartcrop.advisory.model;

import lombok.Data;  // Lombok automatically creates getters/setters for us

@Data  // This one annotation replaces 20+ lines of getter/setter code!
public class SoilRequest {

    private String soilType;   // e.g. "Black", "Red", "Sandy", "Clay"
    private double phValue;    // e.g. 6.5
    private String crop;        // e.g. "Rice", "Wheat", "Cotton"
    private String waterAvail;  // e.g. "Irrigated" or "Rainfed"

}