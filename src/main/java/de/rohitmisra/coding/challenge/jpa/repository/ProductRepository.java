package de.rohitmisra.coding.challenge.jpa.repository;

import de.rohitmisra.coding.challenge.jpa.domain.Product;
import de.rohitmisra.coding.challenge.jpa.domain.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

/**
 * For Spring Data JPA query methods see:
 * http://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods
 */
public interface ProductRepository extends JpaRepository<Product, Long> {

    Optional<Product> findById(String id);

    List<Product> findAll();

    List<Product> findProductsByCategory(Category category);
}