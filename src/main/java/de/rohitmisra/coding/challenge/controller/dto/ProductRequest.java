package de.rohitmisra.coding.challenge.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class ProductRequest {
    private String name;
    private String key;
    private String description;
    private String categoryKey;
    private BigDecimal price;
    private String currency;
}
