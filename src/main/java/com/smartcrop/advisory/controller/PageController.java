package com.smartcrop.advisory.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Serves all Thymeleaf HTML pages.
 * Each method maps a URL path → templates/ HTML file.
 */
@Controller
public class PageController {

    /** Home page */
    @GetMapping("/")
    public String home() {
        return "index";                 // → templates/index.html
    }

    /** Soil Guidance / Analysis form */
    @GetMapping("/soil")
    public String soil() {
        return "soil_guidance";         // → templates/soil_guidance.html
    }

    /** Analysis results page */
    @GetMapping("/results")
    public String results() {
        return "results";               // → templates/results.html
    }

    /** Weather advisory */
    @GetMapping("/weather")
    public String weather() {
        return "weather";               // → templates/weather.html
    }

    /** About page */
    @GetMapping("/about")
    public String about() {
        return "about";                 // → templates/about.html
    }

    /** Crop guide */
    @GetMapping("/crop-guide")
    public String cropGuide() {
        return "crop_guide";            // → templates/crop_guide.html
    }

    /** Fertilizers guide */
    @GetMapping("/fertilizers")
    public String fertilizers() {
        return "fertilizers";           // → templates/fertilizers.html
    }

    /** Rainfall data */
    @GetMapping("/rainfall")
    public String rainfall() {
        return "rainfall";              // → templates/rainfall.html
    }

    /** Contact page */
    @GetMapping("/contact")
    public String contact() {
        return "contact";               // → templates/contact.html
    }
    @GetMapping("/login")
    public String login() {
        return "login";  // → templates/login.html
    }

    @GetMapping("/register")
    public String register() {
        return "register";  // → templates/register.html
}
}
