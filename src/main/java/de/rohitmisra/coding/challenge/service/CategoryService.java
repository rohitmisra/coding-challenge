package de.rohitmisra.coding.challenge.service;

import de.rohitmisra.coding.challenge.controller.dto.CategoryProductTreeResponse;
import de.rohitmisra.coding.challenge.controller.dto.CategoryRequest;
import de.rohitmisra.coding.challenge.controller.dto.CategoryResponse;
import de.rohitmisra.coding.challenge.controller.dto.ProductResponse;
import de.rohitmisra.coding.challenge.finance.CurrencyConverter;
import de.rohitmisra.coding.challenge.jpa.domain.Category;
import de.rohitmisra.coding.challenge.jpa.domain.Product;
import de.rohitmisra.coding.challenge.jpa.repository.CategoryRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.io.IOException;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

import static de.rohitmisra.coding.challenge.service.ProductService.BASE_CURRENCY;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private final ModelMapper modelMapper;
    private final CurrencyConverter currencyConverter;

    @Autowired
    public CategoryService(final CategoryRepository categoryRepository, ModelMapper modelMapper,
                           CurrencyConverter currencyConverter) {
        this.categoryRepository = categoryRepository;
        this.modelMapper = modelMapper;
        this.currencyConverter = currencyConverter;
    }

    public List<CategoryResponse> findAll() {
        return categoryRepository.findAll().stream()
            .map(this::convertToResponse)
            .collect(Collectors.toList());
    }

    public List<CategoryProductTreeResponse> fetchTree() throws IOException {
        List<CategoryProductTreeResponse> categoryProductTreeResponseList = new ArrayList<>();
        for (Category product : categoryRepository.findAll()) {
            categoryProductTreeResponseList.add(convertToTreeResponse(product));
        }
        return categoryProductTreeResponseList;
    }

    public CategoryResponse findById(Long id) {
        Assert.notNull(id, "Id must not be null");
        return this.convertToResponse(categoryRepository.findById(id).orElseThrow(
            () -> new NoSuchElementException("No category found with id " + id)));
    }

    public CategoryResponse createCategory(CategoryRequest categoryRequest) {
        return this.convertToResponse(categoryRepository.save(
            this.convertToEntity(categoryRequest)));
    }

    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }

    public CategoryResponse updateCategory(Long id, CategoryRequest newCategory) {
        return this.convertToResponse(categoryRepository.findById(id).map(
            categoryOld -> {
                categoryOld.setKey(newCategory.getKey());
                categoryOld.setName(newCategory.getName());
                categoryOld.setDescription(newCategory.getDescription());
                return categoryRepository.save(this.convertToEntity(newCategory));
            }
        ).orElseGet(() -> {
            return categoryRepository.save(this.convertToEntity(newCategory));
        }));
    }

    private CategoryResponse convertToResponse(Category category) {
        return modelMapper.map(category, CategoryResponse.class);
    }

    private CategoryProductTreeResponse convertToTreeResponse(Category category) throws IOException {
        CategoryProductTreeResponse categoryProductTreeResponse = modelMapper.map(category,
            CategoryProductTreeResponse.class);

        List<ProductResponse> productResponseList = new ArrayList<>();

        for (Product product : category.getProducts()) {
            ProductResponse productResponse = modelMapper.map(product, ProductResponse.class);
            productResponse.setCategoryId(product.getCategory().getId());
            float price = (currencyConverter.getConversionRate(product.getCurrency(), BASE_CURRENCY)
                * product.getPrice().floatValue());

            productResponse.setPrice(BASE_CURRENCY + " " + new DecimalFormat("0.00").format(price));
            if (!product.getCurrency().equals(BASE_CURRENCY)) {
                productResponse.setOriginalCurrency(product.getCurrency().getCurrencyCode());
            }
            productResponseList.add(productResponse);
        }

        categoryProductTreeResponse.setProducts(productResponseList);
        return categoryProductTreeResponse;
    }

    private Category convertToEntity(CategoryRequest CategoryRequest) {
        return modelMapper.map(CategoryRequest, Category.class);
    }
}
