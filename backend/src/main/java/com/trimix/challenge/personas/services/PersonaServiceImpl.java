package com.trimix.challenge.personas.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trimix.challenge.personas.dto.PersonaDto;
import com.trimix.challenge.personas.enums.TipoDocumentoEnum;
import com.trimix.challenge.personas.mapper.PersonaMapper;
import com.trimix.challenge.personas.repository.PersonaRepository;

@Service
public class PersonaServiceImpl implements PersonaService {

    @Autowired
    PersonaMapper personaMapper;

    @Autowired
    PersonaRepository personasRepository;

    @Override
    public void deletePersona(long id) {
        personasRepository.deleteById(id);
    }

    @Override
    public void editPersona(PersonaDto persona) {
        personasRepository.save(personaMapper.toEntity(persona));
    }

    @Override
    public List<PersonaDto> findByTipoDocumento(TipoDocumentoEnum tipo) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findByTipoDocumento'");
    }

    @Override
    public List<PersonaDto> findByNombre(String nombre) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findByNombre'");
    }

    @Override
    public List<PersonaDto> findByFilters(Optional<TipoDocumentoEnum> tipoDocumento, Optional<String> nombre) {
        return personasRepository.findAll()
                .stream()
                .map(personaMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public void createPersona(PersonaDto personaDto) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'createPersona'");
    }

}
