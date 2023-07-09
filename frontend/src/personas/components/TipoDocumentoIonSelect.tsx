import { IonSelect, IonSelectOption } from "@ionic/react";
import React, { Dispatch, SetStateAction } from "react";
import {
  TipoDocumentoEnum,
  TipoDocumentoEnumDto,
} from "../types/TipoDocumentoTypes";

interface TipoDocumentoOpciones {
  label: string;
  value: string;
}

const opcionesDto: TipoDocumentoOpciones[] = [
  { label: "Dni", value: "Dni" },
  { label: "Cédula", value: "Cédula" },
  { label: "Pasaporte", value: "Pasaporte" },
];

const opcionesFiltro: TipoDocumentoOpciones[] = [
  { label: "Todos", value: "Todos" },
  { label: "Dni", value: "Dni" },
  { label: "Cédula", value: "Cédula" },
  { label: "Pasaporte", value: "Pasaporte" },
];

interface TipoDocumentoIonSelectProps {
  value: TipoDocumentoEnumDto | TipoDocumentoEnum;
  setValue: Dispatch<SetStateAction<any>>;
  isFiltro: boolean;
  name: string;
}

const TipoDocumentoIonSelect: React.FC<TipoDocumentoIonSelectProps> = ({
  value,
  setValue,
  isFiltro,
  name,
}) => {
  return (
    <IonSelect
      name={name}
      fill="outline"
      interface="popover"
      label-placement="floating"
      label="Tipo Documento"
      value={value}
      onIonChange={(e) => {
        setValue(e.detail.value!);
      }}
    >
      {isFiltro &&
        opcionesFiltro.map((item) => (
          <IonSelectOption key={item.value} value={item.value}>
            {item.label}
          </IonSelectOption>
        ))}
      {!isFiltro &&
        opcionesDto.map((item) => (
          <IonSelectOption key={item.value} value={item.value}>
            {item.label}
          </IonSelectOption>
        ))}
    </IonSelect>
  );
};

export default TipoDocumentoIonSelect;
