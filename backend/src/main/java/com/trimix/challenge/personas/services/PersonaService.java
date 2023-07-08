package com.trimix.challenge.personas.services;

import java.util.List;
import java.util.Optional;

import com.trimix.challenge.personas.dto.PersonaDto;
import com.trimix.challenge.personas.enums.TipoDocumentoEnum;

public interface PersonaService {
    void deletePersona(long id);

    void editPersona(PersonaDto persona);

    List<PersonaDto> findByTipoDocumento(TipoDocumentoEnum tipo);

    List<PersonaDto> findByNombre(String nombre);

    List<PersonaDto> findAll();

    List<PersonaDto> findByFilters(Optional<TipoDocumentoEnum> tipoDocumento, Optional<String> nombre);

    void createPersona(PersonaDto personaDto);

    boolean isPersonaPresent(long id);

    List<PersonaDto> findByNombreAndTipoDocumento(String nombre, TipoDocumentoEnum tipo);

}
