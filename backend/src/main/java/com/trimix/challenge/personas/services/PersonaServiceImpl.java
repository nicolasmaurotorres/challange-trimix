package com.trimix.challenge.personas.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trimix.challenge.personas.dto.PersonaDto;
import com.trimix.challenge.personas.entity.PersonaEntity;
import com.trimix.challenge.personas.enums.TipoDocumentoEnum;
import com.trimix.challenge.personas.mapper.PersonaMapper;
import com.trimix.challenge.personas.repository.PersonaRepository;
import com.trimix.challenge.personas.business.FiltroPersonaStrategy;

@Service
public class PersonaServiceImpl implements PersonaService {

    @Autowired
    PersonaMapper personaMapper;

    @Autowired
    PersonaRepository personasRepository;

    FiltroPersonaStrategy filtroPersonaStrategy;

    @Override
    public boolean isPersonaPresent(long id) {
        return personasRepository.findById(id).isPresent();
    }

    @Override
    public void deletePersona(long id) {
        if (isPersonaPresent(id)) {
            personasRepository.deleteById(id);
        }
    }

    @Override
    public void editPersona(PersonaDto persona) {
        personasRepository.save(personaMapper.toEntity(persona));
    }

    @Override
    public List<PersonaDto> findByTipoDocumento(TipoDocumentoEnum tipo) {
        return personasRepository.findByPerTipoDocumento(tipo).stream()
                .map(personaMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<PersonaDto> findByNombre(String nombre) {
        return personasRepository.findByPerNombre(nombre).stream()
                .map(personaMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<PersonaDto> findByNombreAndTipoDocumento(String nombre, TipoDocumentoEnum tipo) {
        return personasRepository.findByPerTipoDocumentoAndPerNombre(tipo, nombre)
                .stream()
                .map(personaMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<PersonaDto> findAll() {
        return personasRepository.findAll()
                .stream()
                .map(personaMapper::toDto)
                .collect(Collectors.toList());

    }

    @Override
    public List<PersonaDto> findByFilters(Optional<TipoDocumentoEnum> tipoDocumento, Optional<String> nombre) {
        filtroPersonaStrategy = new FiltroPersonaStrategy(this, nombre, tipoDocumento);
        return filtroPersonaStrategy.get();
    }

    @Override
    public void createPersona(PersonaDto personaDto) {
        PersonaEntity nuevaPersona = personaMapper.toEntity(personaDto);
        personasRepository.save(nuevaPersona);
    }

}
