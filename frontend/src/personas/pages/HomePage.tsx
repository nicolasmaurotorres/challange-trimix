import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
} from "@ionic/react";
import { filter, addCircle, closeCircle, pencil, trash } from "ionicons/icons";
import PersonaDto from "../types/PersonaDto";
import TipoDocumentoEnumDto from "../types/TipoDocumentoEnum";
//import styles from "./HomePage.module.scss";

enum TipoDocumentoEnum {
  todos,
  Dni,
  Cédula,
  Pasaporte,
}

const HomePage: React.FC = () => {
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [nameFilter, setNameFilter] = useState<string | undefined>(undefined);
  const [tipoDocumentoFilter, setTipoDocumentoFilter] =
    useState<TipoDocumentoEnum>(TipoDocumentoEnum.todos);
  const [personas, setPersonas] = useState<PersonaDto[]>([]);

  useEffect(() => {
    setPersonas([
      {
        id: 1,
        nombre: "pepe",
        apellido: "guarani",
        fechaNacimiento: "2020-01-01",
        numeroDocumento: "12345678",
        tipoDocumento: TipoDocumentoEnumDto.dni,
      },
    ]);
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid>
          {showFilters && (
            <>
              <IonRow>
                <IonCol size="11">
                  <IonItem>
                    <IonTitle>Filtros</IonTitle>
                  </IonItem>
                </IonCol>
                <IonCol class="ion-padding-start ion-padding-top">
                  <IonIcon
                    icon={closeCircle}
                    size="large"
                    color="danger"
                    onClick={() => {
                      setShowFilters(!showFilters);
                    }}
                  ></IonIcon>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="6">
                  <IonInput
                    fill="outline"
                    labelPlacement="floating"
                    label="Nombre"
                    type="text"
                    value={nameFilter}
                    onIonInput={(e) => {
                      setNameFilter(e.detail.value!);
                    }}
                  ></IonInput>
                </IonCol>
                <IonCol size="6">
                  <IonItem>
                    <IonSelect
                      fill="outline"
                      interface="popover"
                      label-placement="floating"
                      label="Tipo Documento"
                      value={tipoDocumentoFilter}
                      onIonChange={(e) => {
                        setTipoDocumentoFilter(e.detail.value!);
                      }}
                    >
                      <IonSelectOption value="todos">Todos</IonSelectOption>
                      <IonSelectOption value="Dni">Dni</IonSelectOption>
                      <IonSelectOption value="Cédula">Cédula</IonSelectOption>
                      <IonSelectOption value="Pasaporte">
                        Pasaporte
                      </IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol
                  offsetXl="11"
                  offsetXs="9"
                  offsetLg="10"
                  offsetSm="10"
                  offsetMd="10"
                >
                  <IonButton>Buscar</IonButton>
                </IonCol>
              </IonRow>
            </>
          )}

          <IonRow>
            <IonCol size="9">
              <IonItem>
                <IonTitle>Personas</IonTitle>
              </IonItem>
            </IonCol>
            <IonCol size="1" class="ion-padding-vertical">
              <IonIcon
                icon={filter}
                size="large"
                onClick={() => {
                  setShowFilters(!showFilters);
                }}
              ></IonIcon>
            </IonCol>
            <IonCol
              size="2"
              class="ion-padding-horizontal ion-padding-vertical"
            >
              <IonIcon
                icon={addCircle}
                size="large"
                color="primary"
                onClick={() => {}}
              ></IonIcon>
            </IonCol>
          </IonRow>
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
          {personas.length === 0 && (
            <IonRow>
              <IonCol offset="6">
                <IonTitle>No hay personas a mostrar</IonTitle>
              </IonCol>
            </IonRow>
          )}
          {personas.length > 0 &&
            personas.map((persona) => (
              <IonRow>
                <IonCol>
                  <IonLabel>{persona.id}</IonLabel>
                </IonCol>
                <IonCol size="2">
                  <IonLabel>{persona.nombre}</IonLabel>
                </IonCol>
                <IonCol>
                  <IonLabel>{persona.apellido}</IonLabel>
                </IonCol>
                <IonCol size="2">
                  <IonLabel>{persona.numeroDocumento}</IonLabel>
                </IonCol>
                <IonCol size="2">
                  <IonLabel>{persona.tipoDocumento}</IonLabel>
                </IonCol>
                <IonCol size="2">
                  <IonLabel>{persona.fechaNacimiento}</IonLabel>
                </IonCol>
                <IonCol>
                  <IonIcon icon={pencil} color="primary" />
                </IonCol>
                <IonCol>
                  <IonIcon icon={trash} color="danger" />
                </IonCol>
              </IonRow>
            ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
