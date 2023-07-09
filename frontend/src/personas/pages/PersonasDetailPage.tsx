import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonPage,
  IonRow,
  IonTitle,
} from "@ionic/react";
import React, { useState } from "react";
import PersonaDto from "../types/PersonaDto";
import { TipoDocumentoEnumDto } from "../types/TipoDocumentoTypes";
import TipoDocumentoIonSelect from "../components/TipoDocumentoIonSelect";

const initData: PersonaDto = {
  nombre: "",
  apellido: "",
  fechaNacimiento: "",
  numeroDocumento: "",
  tipoDocumento: TipoDocumentoEnumDto.Dni,
};

const PersonaDetailPage: React.FC = () => {
  const [persona, setPersona] = useState<PersonaDto>(initData);
  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonTitle>Personas</IonTitle>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonInput
                fill="outline"
                labelPlacement="floating"
                label="Nombre"
                type="text"
                value={initData.nombre}
                onIonInput={(e) => {
                  setPersona({ ...persona, nombre: e.detail.value! });
                }}
              ></IonInput>
            </IonCol>
            <IonCol size="6">
              <IonInput
                fill="outline"
                labelPlacement="floating"
                label="Apellido"
                type="text"
                value={initData.apellido}
                onIonInput={(e) => {
                  setPersona({ ...persona, apellido: e.detail.value! });
                }}
              ></IonInput>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="6">
              <TipoDocumentoIonSelect
                isFiltro={false}
                value={persona.tipoDocumento}
                setValue={(e) => setPersona({ ...persona, tipoDocumento: e })}
              ></TipoDocumentoIonSelect>
            </IonCol>
            <IonCol size="6">
              <IonInput
                fill="outline"
                labelPlacement="floating"
                label="Numero Documento"
                type="text"
                value={initData.numeroDocumento}
                onIonInput={(e) => {
                  setPersona({ ...persona, numeroDocumento: e.detail.value! });
                }}
              ></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonInput
                fill="outline"
                labelPlacement="floating"
                label="Fecha Nacimiento"
                type="date"
                value={initData.numeroDocumento}
                onIonInput={(e) => {
                  setPersona({ ...persona, numeroDocumento: e.detail.value! });
                }}
              ></IonInput>
            </IonCol>
            <IonCol offset="5" className="ion-padding-vertical">
              <IonButton fill="solid" onClick={() => {}}>
                Crear
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default PersonaDetailPage;
