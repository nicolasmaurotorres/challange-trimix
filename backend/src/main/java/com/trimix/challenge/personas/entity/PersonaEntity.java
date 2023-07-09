package com.trimix.challenge.personas.entity;

import java.time.LocalDate;

import com.trimix.challenge.personas.enums.TipoDocumentoEnum;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "Personas")
@Table(name = "Personas")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PersonaEntity {
    @Id()
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    private LocalDate perFechaNacimiento;

    @NotNull
    @NotBlank
    @Size(max = 11)
    private String perNumeroDocumento;

    @Enumerated(EnumType.STRING)
    private TipoDocumentoEnum perTipoDocumento;

    public void update(PersonaEntity entity) {
        this.perApellido = entity.getPerApellido();
        this.perFechaNacimiento = entity.getPerFechaNacimiento();
        this.perNombre = entity.getPerNombre();
        this.perNumeroDocumento = entity.getPerNumeroDocumento();
        this.perTipoDocumento = entity.getPerTipoDocumento();
    }

}
