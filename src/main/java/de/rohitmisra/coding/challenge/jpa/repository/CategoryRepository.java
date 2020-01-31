package de.rohitmisra.coding.challenge.jpa.repository;

import de.rohitmisra.coding.challenge.jpa.domain.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;

import javax.persistence.LockModeType;
import java.util.Optional;

/**
 * For Spring Data JPA query methods see:
 * http://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods
 */
public interface CategoryRepository extends JpaRepository<Category, Long> {

    Optional<Category> findByKey(String key);
}
