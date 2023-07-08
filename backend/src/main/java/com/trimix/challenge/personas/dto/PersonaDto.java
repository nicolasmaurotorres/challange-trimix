package com.trimix.challenge.personas.dto;

import java.sql.Date;

import com.trimix.challenge.personas.enums.TipoDocumentoEnum;

import lombok.Data;

@Data
public class PersonaDto {
    private long id;
    private String nombre;
    private String apellido;
    private Date fechaNacimiento;
    private String numeroDocumento;
    private TipoDocumentoEnum tipoDocumento;
}
