package de.rohitmisra.coding.challenge.controller;

import de.rohitmisra.coding.challenge.controller.dto.SystemMessageDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.TransactionSystemException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.validation.ConstraintViolationException;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@ControllerAdvice
public class ErrorHandling {

    private static final Logger log = LoggerFactory.getLogger(ErrorHandling.class);

    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<SystemMessageDto> notFoundError(Exception e) {
        log.error("Error: ", e);

        return new ResponseEntity<>(new SystemMessageDto(
                HttpStatus.NOT_FOUND,
                "not_found",
                e.getLocalizedMessage()
        ), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<SystemMessageDto> illegalArgument(Exception e) {
        log.error("Error: ", e);

        return new ResponseEntity<>(new SystemMessageDto(
                HttpStatus.BAD_REQUEST,
                "invalid_input",
                e.getLocalizedMessage()
        ), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler({ TransactionSystemException.class })
    public ResponseEntity<SystemMessageDto> handleConstraintViolation(Exception e) {
        log.error("Error: ", e);
        return new ResponseEntity<>(new SystemMessageDto(
            HttpStatus.BAD_REQUEST,
            "invalid_input",
            ((ConstraintViolationException) ((TransactionSystemException) e).getRootCause()).getConstraintViolations().stream()
                .map(constraintViolation -> constraintViolation
                    .getPropertyPath() +
                    " " + constraintViolation.getMessage()).collect(Collectors.joining())
        ), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<SystemMessageDto> generalError(Exception e) {
        log.error("General error: ", e);

        return new ResponseEntity<>(new SystemMessageDto(
                HttpStatus.INTERNAL_SERVER_ERROR,
                "internal_error",
                e.getLocalizedMessage()
        ), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
