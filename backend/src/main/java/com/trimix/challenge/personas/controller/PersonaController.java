package com.trimix.challenge.personas.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.trimix.challenge.personas.dto.PersonaDto;
import com.trimix.challenge.personas.enums.TipoDocumentoEnum;
import com.trimix.challenge.personas.services.PersonaServiceImpl;

import jakarta.transaction.Transactional;

@RestController
@RequestMapping("/api/v1")
public class PersonaController {

    @Autowired
    PersonaServiceImpl personaServiceImpl;

    @GetMapping("/personas")
    public ResponseEntity<List<PersonaDto>> getPersonasByFiltros(
            @RequestParam("tipoDocumento") Optional<TipoDocumentoEnum> tipoDocumento,
            @RequestParam("nombre") Optional<String> nombre) {
        List<PersonaDto> personasResponse = personaServiceImpl.findByFilters(tipoDocumento, nombre);
        return new ResponseEntity<>(personasResponse, HttpStatus.OK);
    }

    @PostMapping("/personas")
    @Transactional
    public ResponseEntity<Void> postPersona(PersonaDto personaDto) {
        personaServiceImpl.createPersona(personaDto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/personas")
    @Transactional
    public ResponseEntity<Void> editPersona(PersonaDto personaDto) {
        personaServiceImpl.editPersona(personaDto);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/personas/{perId}")
    @Transactional
    public ResponseEntity<Void> deletePersona(@RequestParam("perId") Long perId) {
        personaServiceImpl.deletePersona(perId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
