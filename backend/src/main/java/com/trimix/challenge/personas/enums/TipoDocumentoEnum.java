package com.trimix.challenge.personas.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.trimix.challenge.personas.exceptions.TipoDocumentoNotValidException;

import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import lombok.Getter;

@Getter
public enum TipoDocumentoEnum {

    Dni("Dni"), Pasaporte("Pasaporte"), Cédula("Cédula");

    private String tipo;

    private TipoDocumentoEnum(String tipo) {
        this.tipo = tipo;
    }

    public static String[] names() {
        TipoDocumentoEnum[] states = values();
        String[] names = new String[states.length];

        for (int i = 0; i < states.length; i++) {
            names[i] = states[i].getTipo();
        }

        return names;
    }

    private static Map<String, TipoDocumentoEnum> FORMAT_MAP = Stream
            .of(TipoDocumentoEnum.values())
            .collect(Collectors.toMap(s -> s.getTipo(), Function.identity()));

    @JsonCreator
    public static TipoDocumentoEnum fromString(String string) {
        return Optional
                .ofNullable(FORMAT_MAP.get(string))
                .orElseThrow(() -> new TipoDocumentoNotValidException(string));
    }

}
