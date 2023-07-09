import React from "react";
import { IonCol, IonIcon, IonLabel, IonRow } from "@ionic/react";
import { pencil, trash } from "ionicons/icons";
import PersonaDto from "../types/PersonaDto";
import { useHistory } from "react-router";

const RowPersona: React.FC<PersonaDto> = ({
  id,
  nombre,
  apellido,
  numeroDocumento,
  tipoDocumento,
  fechaNacimiento,
}) => {
  const history = useHistory();
  return (
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
      <IonCol>
        <IonIcon icon={trash} color="danger" />
      </IonCol>
    </IonRow>
  );
};

export default RowPersona;
