import React, { Dispatch, SetStateAction, useState } from "react";
import { IonAlert, IonCol, IonIcon, IonLabel, IonRow } from "@ionic/react";
import { pencil, trash } from "ionicons/icons";
import { useHistory } from "react-router";
import AxiosInstance from "../requests/AxiosInstance";
import { TipoDocumentoEnumDto } from "../types/TipoDocumentoTypes";

interface RowPersonaProps {
  id: number;
  nombre: string;
  apellido: string;
  numeroDocumento: string;
  tipoDocumento: TipoDocumentoEnumDto;
  fechaNacimiento: string;
  setPersonaToDelete: Dispatch<SetStateAction<any>>;
}

const RowPersona: React.FC<RowPersonaProps> = ({
  id,
  nombre,
  apellido,
  numeroDocumento,
  tipoDocumento,
  fechaNacimiento,
  setPersonaToDelete,
}) => {
  const history = useHistory();

  return (
    <>
      <IonRow>
        <IonCol>
          <IonLabel>{id}</IonLabel>
        </IonCol>
        <IonCol size="2">
          <IonLabel>{nombre}</IonLabel>
        </IonCol>
        <IonCol>
          <IonLabel>{apellido}</IonLabel>
        </IonCol>
        <IonCol size="2">
          <IonLabel>{numeroDocumento}</IonLabel>
        </IonCol>
        <IonCol size="2">
          <IonLabel>{tipoDocumento}</IonLabel>
        </IonCol>
        <IonCol size="2">
          <IonLabel>{fechaNacimiento}</IonLabel>
        </IonCol>
        <IonCol>
          <IonIcon
            icon={pencil}
            color="primary"
            onClick={() => {
              history.push("/personas/" + id, {
                id,
                nombre,
                apellido,
                numeroDocumento,
                tipoDocumento,
                fechaNacimiento,
              });
            }}
          />
        </IonCol>
        <IonCol
          onClick={() => {
            setPersonaToDelete({
              id,
              nombre,
              apellido,
              numeroDocumento,
              tipoDocumento,
              fechaNacimiento,
            });
          }}
        >
          <IonIcon icon={trash} color="danger" />
        </IonCol>
      </IonRow>
    </>
  );
};

export default RowPersona;
