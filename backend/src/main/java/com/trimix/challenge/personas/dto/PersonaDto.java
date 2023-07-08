package com.trimix.challenge.personas.dto;

import java.time.LocalDate;

import com.trimix.challenge.personas.enums.TipoDocumentoEnum;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PastOrPresent;
import lombok.Data;

@Data
public class PersonaDto {
    private long id;
    @NotNull(message = "El nombre no puede ser nulo")
    @NotBlank(message = "El nombre no puede ser vacio")
    private String nombre;
    @NotNull(message = "El apellido no puede ser nulo")
    @NotBlank(message = "El apellido no puede ser vacio")
    private String apellido;
    @NotNull(message = "La fechaNacimiento no puede ser nula")
    @PastOrPresent(message = "La fechaNacimiento no puede ser superior al dia actual")
    private LocalDate fechaNacimiento;
    @NotNull(message = "El numeroDocumento no puede ser nulo")
    @NotBlank(message = "El numeroDocumento no puede ser vacia")
    private String numeroDocumento;
    @NotNull(message = "El tipoDocumento no puede ser nulo")
    private TipoDocumentoEnum tipoDocumento;
}
