package de.rohitmisra.coding.challenge.controller.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class CategoryResponse {
    private Long id;
    private String key;
    private String name;
    private String description;
}
