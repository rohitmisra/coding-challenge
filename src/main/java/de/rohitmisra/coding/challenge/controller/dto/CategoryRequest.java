package de.rohitmisra.coding.challenge.controller.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Builder
public class CategoryRequest {
    private String name;
    private String key;
    private String description;
}
