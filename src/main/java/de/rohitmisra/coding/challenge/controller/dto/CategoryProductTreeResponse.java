package de.rohitmisra.coding.challenge.controller.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CategoryProductTreeResponse {
    private Long id;
    private String name;
    private String description;
    private List<ProductResponse> products;
}
