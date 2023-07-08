package com.trimix.challenge.personas.enums;

import lombok.Getter;

@Getter
public enum TipoDocumentoEnum {

    DNI("Dni"), PASAPORTE("Pasaporte"), CEDULA("C\u00E9dula");

    private String tipo;

    private TipoDocumentoEnum(String tipo) {
        this.tipo = tipo;
    }

}
