package de.rohitmisra.coding.challenge.controller.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductResponse {
    private Long id;
    private String key;
    private String name;
    private String description;
    private String price;
    @JsonInclude(JsonInclude.Include.NON_DEFAULT)
    private String originalCurrency;
    private Long categoryId;
}
