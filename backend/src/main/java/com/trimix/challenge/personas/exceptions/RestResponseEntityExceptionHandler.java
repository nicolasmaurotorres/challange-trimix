package com.trimix.challenge.personas.exceptions;

import java.sql.SQLSyntaxErrorException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import com.trimix.challenge.personas.enums.TipoDocumentoEnum;

@RestControllerAdvice
public class RestResponseEntityExceptionHandler {

    @ExceptionHandler(value = { SQLSyntaxErrorException.class })
    public ResponseEntity<Map<String, String>> handleConflictosDB(
            RuntimeException ex, WebRequest request) {
        ex.printStackTrace();
        String bodyOfResponse = "Hubo un error con la base de datos.";
        Map<String, String> resp = new HashMap<String, String>();
        resp.put("error", bodyOfResponse);
        return new ResponseEntity<Map<String, String>>(resp, new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(value = { PersonaNotFoundException.class })
    public ResponseEntity<Map<String, String>> handleError404(
            RuntimeException ex, WebRequest request) {
        String bodyOfResponse = ex.getMessage();
        Map<String, String> resp = new HashMap<String, String>();
        resp.put("error", bodyOfResponse);
        return new ResponseEntity<Map<String, String>>(resp, new HttpHeaders(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, List<String>>> handleValidationErrors(MethodArgumentNotValidException ex) {
        List<String> errors = ex.getBindingResult().getFieldErrors()
                .stream().map(FieldError::getDefaultMessage).collect(Collectors.toList());
        return new ResponseEntity<>(getErrorsMap(errors), new HttpHeaders(), HttpStatus.BAD_REQUEST);
    }

    private Map<String, List<String>> getErrorsMap(List<String> errors) {
        Map<String, List<String>> errorResponse = new HashMap<>();
        errorResponse.put("errors", errors);
        return errorResponse;
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<Map<String, String>> handleJsonErrors(TipoDocumentoNotValidException exception) {
        Map<String, String> resp = new HashMap<String, String>();
        String valorUsuario = exception.getMessage();
        resp.put("error", "El valor de tipoDocumento tiene que ser alguno de los siguientes "
                + Arrays.toString(TipoDocumentoEnum.names()) + " se ingreso el valor: " + valorUsuario);
        return new ResponseEntity<Map<String, String>>(resp, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(UnsupportedOperationException.class)
    public ResponseEntity<Map<String, String>> estamosTrabajando(UnsupportedOperationException exception) {
        Map<String, String> resp = new HashMap<String, String>();
        resp.put("error", "Funcionalidad no disponible");
        return new ResponseEntity<Map<String, String>>(resp, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
