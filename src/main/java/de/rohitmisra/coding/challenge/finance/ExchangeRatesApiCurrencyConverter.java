package de.rohitmisra.coding.challenge.finance;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.Currency;

@Component
public class ExchangeRatesApiCurrencyConverter implements CurrencyConverter {

    @Override
    public float getConversionRate(Currency fromCurrency, Currency toCurrency) throws IOException {
        if(fromCurrency.equals(toCurrency)){
            return 1f;
        }
        RestTemplate restTemplate = new RestTemplate();
        String converterUrl = "https://api.exchangeratesapi.io/latest?base="
            + fromCurrency.getCurrencyCode()
            + "&symbols=" + toCurrency.getCurrencyCode();
        ResponseEntity<String> response
            = restTemplate.getForEntity(converterUrl, String.class);

        ObjectMapper mapper = new ObjectMapper();
        JsonNode root = mapper.readTree(response.getBody());
        return (float) root.path("rates").get(toCurrency.getCurrencyCode()).asDouble();
    }
}
