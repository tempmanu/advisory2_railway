package com.smartcrop.advisory.controller;

import com.smartcrop.advisory.model.MarketPrice;
import com.smartcrop.advisory.repository.MarketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/market")
@CrossOrigin(origins = "*")
public class MarketController {

    @Autowired
    private MarketRepository marketRepository;

    @GetMapping("/prices")
    public List<MarketPrice> getAllPrices() {
        return marketRepository.findAll();
    }

    @GetMapping("/prices/{cropName}")
    public List<MarketPrice> getPricesByCrop(@PathVariable String cropName) {
        return marketRepository.findByCropName(cropName);
    }

    @PostMapping("/add")
    public MarketPrice addPrice(@RequestBody MarketPrice price) {
        return marketRepository.save(price);
    }
}
