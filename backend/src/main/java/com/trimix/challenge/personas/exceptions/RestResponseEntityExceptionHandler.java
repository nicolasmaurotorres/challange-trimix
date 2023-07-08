package com.trimix.challenge.personas.exceptions;

import java.sql.SQLSyntaxErrorException;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class RestResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value = { SQLSyntaxErrorException.class })
    protected ResponseEntity<Object> handleConflictosDB(
            RuntimeException ex, WebRequest request) {
        ex.printStackTrace();
        String bodyOfResponse = "Hubo un error con la base de datos.";
        return handleExceptionInternal(ex, bodyOfResponse,
                new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR, request);
    }

}
