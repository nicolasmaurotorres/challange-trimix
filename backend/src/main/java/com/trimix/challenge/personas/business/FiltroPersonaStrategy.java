package com.trimix.challenge.personas.business;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.trimix.challenge.personas.dto.PersonaDto;
import com.trimix.challenge.personas.enums.TipoDocumentoEnum;
import com.trimix.challenge.personas.services.PersonaService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class FiltroPersonaStrategy {

    private PersonaService personaService;
    private Optional<String> nombre;
    private Optional<TipoDocumentoEnum> tipo;

    public List<PersonaDto> get() {

        if (!nombre.isPresent() && !tipo.isPresent()) {
            return personaService.findAll();
        }

        if (nombre.isPresent() && !tipo.isPresent()) {
            return personaService.findByNombre(nombre.get());
        }

        if (!nombre.isPresent() && tipo.isPresent()) {
            return personaService.findByTipoDocumento(tipo.get());
        }

        if (nombre.isPresent() && tipo.isPresent()) {
            return personaService.findByNombreAndTipoDocumento(nombre.get(), tipo.get());
        }

        return new ArrayList<>();
    }

}
