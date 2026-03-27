package com.smartcrop.advisory.config;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestControllerAdvice  // Catches exceptions from ALL controllers
public class GlobalExceptionHandler {

    // Catches any unhandled exception
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public Map<String, String> handleException(Exception ex) {
        // Returns a clean JSON error instead of ugly HTML error page
        return Map.of(
            "status", "error",
            "message", ex.getMessage()
        );
    }

    // Catches when request data is missing or wrong format
    @ExceptionHandler(IllegalArgumentException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Map<String, String> handleBadRequest(IllegalArgumentException ex) {
        return Map.of(
            "status",  "error",
            "message", ex.getMessage()
        );
    }
}