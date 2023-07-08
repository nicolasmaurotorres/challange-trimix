package com.trimix.challenge.personas.repository;

import org.springframework.data.repository.ListCrudRepository;

import com.trimix.challenge.personas.entity.PersonaEntity;

public interface PersonaRepository extends ListCrudRepository<PersonaEntity, Long> {

}
