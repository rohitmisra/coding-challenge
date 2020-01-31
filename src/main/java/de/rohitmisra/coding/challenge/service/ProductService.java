package de.rohitmisra.coding.challenge.service;

import de.rohitmisra.coding.challenge.controller.dto.ProductRequest;
import de.rohitmisra.coding.challenge.controller.dto.ProductResponse;
import de.rohitmisra.coding.challenge.finance.CurrencyConverter;
import de.rohitmisra.coding.challenge.jpa.domain.Category;
import de.rohitmisra.coding.challenge.jpa.domain.Product;
import de.rohitmisra.coding.challenge.jpa.repository.CategoryRepository;
import de.rohitmisra.coding.challenge.jpa.repository.ProductRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Currency;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class ProductService {
    public static final Currency BASE_CURRENCY = Currency.getInstance("EUR");
    private final CategoryRepository categoryRepository;
    private final ProductRepository productRepository;
    private final ModelMapper modelMapper;
    private final CurrencyConverter currencyConverter;

    @Autowired
    public ProductService(CategoryRepository categoryRepository,
                          ProductRepository productRepository, ModelMapper modelMapper,
                          CurrencyConverter currencyConverter) {
        this.categoryRepository = categoryRepository;
        this.productRepository = productRepository;
        this.modelMapper = modelMapper;
        this.currencyConverter = currencyConverter;
    }

    public List<ProductResponse> findAll() throws IOException {
        List<ProductResponse> productResponseList = new ArrayList<>();

        for (Product product : productRepository.findAll()) {
            productResponseList.add(convertToResponse(product));
        }

        return productResponseList;
    }

    public ProductResponse findById(Long id) throws IOException {
        return convertToResponse(productRepository.findById(id).orElseThrow(() ->
            new NoSuchElementException("No product found for id: " + id)
        ));
    }

    public ProductResponse createProduct(ProductRequest productRequest) throws IOException {
        Category category = categoryRepository.findByKey(productRequest.getCategoryKey()).orElseThrow(() ->
            new NoSuchElementException("No category found for key: " + productRequest.getCategoryKey())
        );

        return convertToResponse(productRepository.save(Product.builder()
            .category(category)
            .key(productRequest.getKey())
            .price(productRequest.getPrice())
            .currency(Currency.getInstance(productRequest.getCurrency()))
            .name(productRequest.getName())
            .description(productRequest.getDescription()).build()));
    }

    private ProductResponse convertToResponse(Product product) throws IOException {
        ProductResponse productResponse = modelMapper.map(product, ProductResponse.class);
        productResponse.setCategoryId(product.getCategory().getId());
        float price = (currencyConverter.getConversionRate(product.getCurrency(), BASE_CURRENCY)
            * product.getPrice().floatValue());

        productResponse.setPrice(BASE_CURRENCY + " " + new DecimalFormat("0.00").format(price));
        if(!product.getCurrency().equals(BASE_CURRENCY)){
            productResponse.setOriginalCurrency(product.getCurrency().getCurrencyCode());
        }
        return productResponse;
    }

    private Product convertToEntity(ProductRequest ProductRequest) {
        return modelMapper.map(ProductRequest, Product.class);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    public ProductResponse updateProduct(Long id, ProductRequest newProduct) throws IOException {
        return this.convertToResponse(productRepository.findById(id)
            .map(productExisting -> {
                    productExisting.setKey(newProduct.getKey());
                    productExisting.setName(newProduct.getName());
                    productExisting.setDescription(newProduct.getDescription());
                    productExisting.setCategory(categoryRepository.findByKey(newProduct.getCategoryKey()).orElseThrow(() ->
                        new NoSuchElementException("No category found for key: " + newProduct.getCategoryKey())
                    ));
                    productExisting.setPrice(newProduct.getPrice());
                    productExisting.setCurrency(Currency.getInstance(newProduct.getCurrency()));
                    return productRepository.save(this.convertToEntity(newProduct));
                }
            ).orElseGet(() -> {
                return productRepository.save(this.convertToEntity(newProduct));
            }));
    }
}
