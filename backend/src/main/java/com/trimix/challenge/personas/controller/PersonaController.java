package com.trimix.challenge.personas.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.trimix.challenge.personas.dto.PersonaDto;
import com.trimix.challenge.personas.enums.TipoDocumentoEnum;
import com.trimix.challenge.personas.exceptions.PersonaNotFoundException;
import com.trimix.challenge.personas.services.PersonaServiceImpl;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1")
public class PersonaController {

    @Autowired
    PersonaServiceImpl personaServiceImpl;

    @GetMapping("/personas")
    @CrossOrigin(origins = "http://localhost:8100")
    public ResponseEntity<List<PersonaDto>> getPersonasByFiltros(
            @RequestParam("tipoDocumento") Optional<TipoDocumentoEnum> tipoDocumento,
            @RequestParam("nombre") Optional<String> nombre) {
        List<PersonaDto> personasResponse = personaServiceImpl.findByFilters(tipoDocumento, nombre);
        return new ResponseEntity<List<PersonaDto>>(personasResponse, HttpStatus.OK);
    }

    @PostMapping("/personas")
    @CrossOrigin(origins = "http://localhost:8100")
    @Transactional
    public ResponseEntity<Void> postPersona(@Valid @RequestBody PersonaDto personaDto) {
        personaServiceImpl.createPersona(personaDto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/personas")
    @CrossOrigin(origins = "http://localhost:8100")
    @Transactional
    public ResponseEntity<Void> editPersona(@Valid @RequestBody PersonaDto personaDto) {
        if (!personaServiceImpl.isPersonaPresent(personaDto.getId())) {
            throw new PersonaNotFoundException("No se encontro la persona con el id " + personaDto.getId());
        }
        personaServiceImpl.editPersona(personaDto);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/personas/{perId}")
    @CrossOrigin(origins = "http://localhost:8100")
    @Transactional
    public ResponseEntity<Void> deletePersona(@PathVariable("perId") Long perId) {
        if (!personaServiceImpl.isPersonaPresent(perId)) {
            throw new PersonaNotFoundException("No se encontro la persona con el id " + perId);
        }
        personaServiceImpl.deletePersona(perId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
