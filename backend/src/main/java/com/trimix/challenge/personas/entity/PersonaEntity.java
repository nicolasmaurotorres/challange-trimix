package com.trimix.challenge.personas.entity;

import java.sql.Date;

import com.trimix.challenge.personas.enums.TipoDocumentoEnum;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "Personas")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PersonaEntity {
    @Id()
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long perId;

    @NotNull
    @NotBlank
    @Size(max = 20)
    private String perNombre;

    @NotNull
    @NotBlank
    @Size(max = 20)
    private String perApellido;

    @NotNull
    @Temporal(TemporalType.DATE)
    private Date perFechaNacimiento;

    @NotNull
    @NotBlank
    @Size(max = 11)
    private String perNumeroDocumento;

    @Enumerated(EnumType.STRING)
    private TipoDocumentoEnum perTipoDocumento;

}
