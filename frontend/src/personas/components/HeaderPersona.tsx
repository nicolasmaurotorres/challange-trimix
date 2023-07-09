import React from "react";
import { IonCol, IonLabel, IonRow } from "@ionic/react";

const RowPersona: React.FC = () => {
  return (
    <IonRow>
      <IonCol>
        <IonLabel>Id</IonLabel>
      </IonCol>
      <IonCol size="2">
        <IonLabel>Nombre</IonLabel>
      </IonCol>
      <IonCol>
        <IonLabel>Apellido</IonLabel>
      </IonCol>
      <IonCol size="2">
        <IonLabel>Numero Documento</IonLabel>
      </IonCol>
      <IonCol size="2">
        <IonLabel>Tipo Documento</IonLabel>
      </IonCol>
      <IonCol size="2">
        <IonLabel>Fecha Nacimiento</IonLabel>
      </IonCol>
      <IonCol>
        <IonLabel>Editar</IonLabel>
      </IonCol>
      <IonCol>
        <IonLabel>Borrar</IonLabel>
      </IonCol>
    </IonRow>
  );
};

export default RowPersona;
