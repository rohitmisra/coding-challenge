package de.rohitmisra.coding.challenge;

import de.rohitmisra.coding.challenge.controller.dto.CategoryRequest;
import de.rohitmisra.coding.challenge.controller.dto.CategoryResponse;
import de.rohitmisra.coding.challenge.controller.dto.ProductRequest;
import de.rohitmisra.coding.challenge.service.CategoryService;
import de.rohitmisra.coding.challenge.service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;

@Component
@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
public class TestData {

    private static final Logger log = LoggerFactory.getLogger(TestData.class);

    private final CategoryService categoryService;
    private final ProductService productService;

    @Autowired
    public TestData(final CategoryService categoryService, ProductService productService) {
        this.categoryService = categoryService;
        this.productService = productService;
    }

    @PostConstruct
    public void insertTestData() throws IOException {
        insertTestCategories();
        insertTestProducts();
        fetchCategories();
    }

    private void fetchCategories() {
        List<CategoryResponse> categoryList = categoryService.findAll();
        System.out.println(categoryList);
    }


    private void insertTestCategories() {
        log.debug("Inserting test Categories");
        categoryService.createCategory(CategoryRequest.builder()
            .name("Electronics")
            .key("electronics")
            .description("All electronic items and gadgets")
            .build());
        categoryService.createCategory(CategoryRequest.builder()
            .name("Clothing")
            .key("clothing")
            .description("All clothing and apparels")
            .build());
    }

    private void insertTestProducts() throws IOException {
        log.debug("Inserting test Products");
        productService.createProduct(ProductRequest.builder()
            .key("iphone")
            .categoryKey("electronics")
            .name("Apple iPhone 13")
            .description("Latest iPhone 13")
            .price(new BigDecimal(1200))
            .currency("EUR")
            .build());

        productService.createProduct(ProductRequest.builder()
            .key("samsung-tv")
            .categoryKey("electronics")
            .name("Samsung TV 504KL")
            .description("Samsung LED 4K TV 50 inch")
            .price(new BigDecimal(699))
            .currency("EUR")
            .build());

        productService.createProduct(ProductRequest.builder()
            .key("dell-laptop")
            .categoryKey("electronics")
            .name("Dell Inspiron 480")
            .description("Dell Laptop 14inch 16GB RAM 500GB Intel i5")
            .price(new BigDecimal(800))
            .currency("EUR")
            .build());

        productService.createProduct(ProductRequest.builder()
            .key("levis-jeans")
            .categoryKey("clothing")
            .name("Levis Blue Jeans Men")
            .description("Funky Levi's Jeans")
            .price(new BigDecimal(60000))
            .currency("HUF")
            .build());

        productService.createProduct(ProductRequest.builder()
            .key("zara-top")
            .categoryKey("clothing")
            .name("Zara Top")
            .description("Zara Fancy Blue Top")
            .price(new BigDecimal(60))
            .currency("EUR")
            .build());

        productService.createProduct(ProductRequest.builder()
            .key("nike-shoes")
            .categoryKey("clothing")
            .name("Nike Run Sport")
            .description("Latest Nike Running Shoes")
            .price(new BigDecimal(120))
            .currency("EUR")
            .build());
    }

}

