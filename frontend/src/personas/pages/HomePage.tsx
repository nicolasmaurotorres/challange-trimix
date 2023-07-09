import React, { useState } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
} from "@ionic/react";
import { filter, addCircle, closeCircle } from "ionicons/icons";
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

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid>
          {showFilters && (
            <>
              <IonRow>
                <IonCol size="10">
                  <IonItem>
                    <IonTitle>Filtros</IonTitle>
                  </IonItem>
                </IonCol>
                <IonCol size="2" class="ion-padding-start ion-padding-top">
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
                <IonCol>
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
                <IonCol>
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
          <IonRow></IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
