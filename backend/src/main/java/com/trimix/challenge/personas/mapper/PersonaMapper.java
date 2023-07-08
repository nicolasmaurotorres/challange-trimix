package com.trimix.challenge.personas.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.trimix.challenge.personas.dto.PersonaDto;
import com.trimix.challenge.personas.entity.PersonaEntity;

@Mapper(componentModel = "spring")
public interface PersonaMapper {

    @Mapping(source = "perId", target = "id")
    @Mapping(source = "perNombre", target = "nombre")
    @Mapping(source = "perApellido", target = "apellido")
    @Mapping(source = "perFechaNacimiento", target = "fechaNacimiento")
    @Mapping(source = "perNumeroDocumento", target = "numeroDocumento")
    @Mapping(source = "perTipoDocumento", target = "tipoDocumento")
    PersonaDto toDto(PersonaEntity source);

    @Mapping(target = "perId", ignore = true)
    @Mapping(source = "nombre", target = "perNombre")
    @Mapping(source = "apellido", target = "perApellido")
    @Mapping(source = "fechaNacimiento", target = "perFechaNacimiento")
    @Mapping(source = "numeroDocumento", target = "perNumeroDocumento")
    @Mapping(source = "tipoDocumento", target = "perTipoDocumento")
    PersonaEntity toEntity(PersonaDto destination);

}
