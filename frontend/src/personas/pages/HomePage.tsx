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
  IonTitle,
} from "@ionic/react";
import { filter, addCircle, closeCircle, pencil, trash } from "ionicons/icons";
import PersonaDto from "../types/PersonaDto";
import { useHistory } from "react-router";
import {
  TipoDocumentoEnum,
  TipoDocumentoEnumDto,
} from "../types/TipoDocumentoTypes";
import TipoDocumentoIonSelect from "../components/TipoDocumentoIonSelect";
import RowPersona from "../components/RowPersona";
import HeaderPersona from "../components/HeaderPersona";

const HomePage: React.FC = () => {
  const history = useHistory();
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [nameFilter, setNameFilter] = useState<string | undefined>(undefined);
  const [tipoDocumentoFilter, setTipoDocumentoFilter] =
    useState<TipoDocumentoEnum>(TipoDocumentoEnum.Todos);
  const [personas, setPersonas] = useState<PersonaDto[]>([]);

  useEffect(() => {
    setPersonas([
      {
        id: 1,
        nombre: "pepe",
        apellido: "guarani",
        fechaNacimiento: "2020-01-01",
        numeroDocumento: "12345678",
        tipoDocumento: TipoDocumentoEnumDto.Dni,
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
                    <TipoDocumentoIonSelect
                      name="tipoDocumento"
                      isFiltro
                      value={tipoDocumentoFilter}
                      setValue={setTipoDocumentoFilter}
                    ></TipoDocumentoIonSelect>
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
                onClick={() => {
                  history.push("/personas");
                }}
              ></IonIcon>
            </IonCol>
          </IonRow>
          <HeaderPersona />
          {personas.length === 0 && (
            <IonRow>
              <IonCol offset="6">
                <IonTitle>No hay personas a mostrar</IonTitle>
              </IonCol>
            </IonRow>
          )}
          {personas.length > 0 &&
            personas.map((persona) => (
              <RowPersona
                key={persona.id}
                id={persona.id}
                nombre={persona.nombre}
                apellido={persona.apellido}
                fechaNacimiento={persona.fechaNacimiento}
                numeroDocumento={persona.numeroDocumento}
                tipoDocumento={persona.tipoDocumento}
              />
            ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
