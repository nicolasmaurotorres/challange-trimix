package com.trimix.challenge.personas.repository;

import java.util.List;

import org.springframework.data.repository.ListCrudRepository;

import com.trimix.challenge.personas.entity.PersonaEntity;
import com.trimix.challenge.personas.enums.TipoDocumentoEnum;

public interface PersonaRepository extends ListCrudRepository<PersonaEntity, Long> {

    List<PersonaEntity> findByPerNombre(String perNombre);

    List<PersonaEntity> findByPerTipoDocumento(TipoDocumentoEnum tipo);

    List<PersonaEntity> findByPerTipoDocumentoAndPerNombre(TipoDocumentoEnum tipo, String nombre);

}
