package de.rohitmisra.coding.challenge.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.rohitmisra.coding.challenge.Application;
import de.rohitmisra.coding.challenge.controller.dto.CategoryRequest;
import de.rohitmisra.coding.challenge.controller.dto.CategoryResponse;
import de.rohitmisra.coding.challenge.controller.dto.ProductRequest;
import de.rohitmisra.coding.challenge.controller.dto.ProductResponse;
import de.rohitmisra.coding.challenge.finance.CurrencyConverter;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.math.BigDecimal;
import java.util.Currency;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK, classes = Application.class)
@AutoConfigureMockMvc
@TestPropertySource(locations = "classpath:application.yml")
public class ProductControllerIntegrationTest {

    private static final ObjectMapper MAPPER = new ObjectMapper();
    @Mock
    CurrencyConverter currencyConverter;
    @Autowired
    private MockMvc mvc;

    @Test
    public void createProduct_happy_path() throws Exception {
        Mockito.when(currencyConverter.getConversionRate(Currency.getInstance("HUF"),
            Currency.getInstance("EUR"))).thenReturn(0.003f);

        //Create a catagory
        CategoryResponse categoryResponse = MAPPER.readValue(this.mvc
                .perform(MockMvcRequestBuilders.post("/api/v1/category")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(MAPPER.writeValueAsString(CategoryRequest.builder()
                        .name("Home")
                        .key("home")
                        .description("Stuff for home")
                        .build()))).andExpect(status().is(200)).andReturn().getResponse().getContentAsByteArray(),
            CategoryResponse.class);

        //Create a product
        ProductResponse productResponse = MAPPER.readValue(this.mvc
            .perform(MockMvcRequestBuilders.post("/api/v1/product")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content(MAPPER.writeValueAsString(ProductRequest.builder()
                    .name("Red Curtain")
                    .description("Fancy Curtain")
                    .key("red-curtain")
                    .categoryKey(categoryResponse.getKey())
                    .price(BigDecimal.valueOf(100d))
                    .currency("HUF")
                    .build())))
            .andExpect(status().is(200)).andReturn().getResponse().getContentAsByteArray(), ProductResponse.class);


        Assert.assertTrue("correct category Id in response",
            productResponse.getCategoryId().equals(categoryResponse.getId()));
        Assert.assertEquals("correct currency in response", "HUF", productResponse.getOriginalCurrency());
        Assert.assertEquals("price is converted properly", "EUR 0.30", productResponse.getPrice());
    }
}