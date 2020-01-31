package de.rohitmisra.coding.challenge.finance;

import java.io.IOException;
import java.util.Currency;

public interface CurrencyConverter {
    float getConversionRate(Currency fromCurrency, Currency toCurrency) throws IOException;
}
