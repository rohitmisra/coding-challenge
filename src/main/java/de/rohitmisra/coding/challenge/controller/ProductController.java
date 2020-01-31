package de.rohitmisra.coding.challenge.controller;

import de.rohitmisra.coding.challenge.controller.dto.ProductRequest;
import de.rohitmisra.coding.challenge.controller.dto.ProductResponse;
import de.rohitmisra.coding.challenge.service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/v1/product")
public class ProductController {
    private static final Logger log = LoggerFactory.getLogger(ProductController.class);

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService ProductService) {
        this.productService = ProductService;
    }

    @GetMapping
    public List<ProductResponse> getAllProducts() throws IOException {
        log.debug("Fetching all Products");
        return productService.findAll();
    }

    @GetMapping(value = "/{id}")
    public ProductResponse findProductById(@PathVariable("id") Long id) throws IOException {
        return productService.findById(id);
    }

    @PostMapping
    public ProductResponse createProduct(@RequestBody ProductRequest productRequest) throws IOException {
        return productService.createProduct(productRequest);
    }

    @PutMapping("/{id}")
    public ProductResponse updateProduct(@PathVariable Long id, @RequestBody ProductRequest productRequest) throws IOException {
        return productService.updateProduct(id, productRequest);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable("id") Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.ok().build();
    }
}
