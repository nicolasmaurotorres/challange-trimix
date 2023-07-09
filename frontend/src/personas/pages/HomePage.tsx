import React, { useEffect, useState } from "react";
import {
  IonAlert,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonPage,
  IonRow,
  IonTitle,
} from "@ionic/react";
import { filter, addCircle, closeCircle } from "ionicons/icons";
import PersonaDto from "../types/PersonaDto";
import { useHistory } from "react-router";
import { TipoDocumentoEnum } from "../types/TipoDocumentoTypes";
import TipoDocumentoIonSelect from "../components/TipoDocumentoIonSelect";
import RowPersona from "../components/RowPersona";
import HeaderPersona from "../components/HeaderPersona";
import AxiosInstance from "../requests/AxiosInstance";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

const HomePage: React.FC = () => {
  const history = useHistory();

  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [nameFilter, setNameFilter] = useState<string | undefined>(undefined);
  const [tipoDocumentoFilter, setTipoDocumentoFilter] =
    useState<TipoDocumentoEnum>(TipoDocumentoEnum.Todos);
  const [personas, setPersonas] = useState<PersonaDto[]>([]);
  const [personaToDelete, setPersonaToDelete] = useState<PersonaDto>();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      nombre: "",
      tipoDocumento: TipoDocumentoEnum.Todos,
    },
  });

  const onSubmit: SubmitHandler<{
    nombre: string;
    tipoDocumento: TipoDocumentoEnum;
  }> = async (data) => {
    let url: string = "/personas";
    if (
      data.nombre &&
      data.tipoDocumento &&
      data.tipoDocumento !== TipoDocumentoEnum[TipoDocumentoEnum.Todos]
    ) {
      url += "?nombre=" + data.nombre + "&tipoDocumento=" + data.tipoDocumento;
    }
    if (
      data.nombre &&
      data.tipoDocumento === TipoDocumentoEnum[TipoDocumentoEnum.Todos]
    ) {
      url += "?nombre=" + data.nombre;
    }
    if (
      !data.nombre &&
      data.tipoDocumento &&
      data.tipoDocumento !== TipoDocumentoEnum[TipoDocumentoEnum.Todos]
    ) {
      url += "?tipoDocumento=" + data.tipoDocumento;
    }

    const resp = await AxiosInstance.get(url);
    if (resp.status >= 200 && resp.status < 300) {
      setPersonas(resp.data);
      history.goBack();
    }
  };

  const _fetchPersonas = async () => {
    const resp = await AxiosInstance.get("/personas");
    if (resp.status >= 200 && resp.status < 300) {
      setPersonas(resp.data);
    }
  };

  useEffect(() => {
    _fetchPersonas();
  }, []);

  const _getNombreABorrar = () => {
    return personaToDelete && personas?.length > 0
      ? personas.filter((item) => item.id === personaToDelete?.id)[0].nombre
      : "";
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonAlert
          isOpen={personaToDelete !== undefined ? true : false}
          header="Atencion!"
          subHeader="Vas a borrar a la persona"
          message={`Esta seguro que quiere borrar a ${_getNombreABorrar()} ?`}
          buttons={[
            {
              text: "Cancel",
              role: "cancel",
              handler: () => {
                setPersonaToDelete(undefined);
              },
            },
            {
              text: "OK",
              role: "destructive",
              handler: async () => {
                await AxiosInstance.delete("/personas/" + personaToDelete?.id);
                setPersonaToDelete(undefined);
                setPersonas(
                  personas.filter((item) => item.id !== personaToDelete?.id)
                );
              },
            },
          ]}
          onDidDismiss={() => setPersonaToDelete(undefined)}
        ></IonAlert>

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
                  />
                </IonCol>
              </IonRow>
              <form onSubmit={handleSubmit(onSubmit)}>
                <IonRow>
                  <IonCol size="6">
                    <Controller
                      name="nombre"
                      control={control}
                      render={({ field }) => (
                        <IonInput
                          {...field}
                          name="nombre"
                          fill="outline"
                          labelPlacement="floating"
                          label="Nombre"
                          type="text"
                          value={nameFilter}
                          onIonInput={(e) => {
                            setNameFilter(e.detail.value!);
                            field.onChange(e.detail.value!);
                          }}
                        />
                      )}
                    />
                  </IonCol>
                  <IonCol size="6">
                    <IonItem>
                      <Controller
                        name="tipoDocumento"
                        control={control}
                        render={({ field }) => (
                          <TipoDocumentoIonSelect
                            {...field}
                            name="tipoDocumento"
                            isFiltro
                            value={tipoDocumentoFilter}
                            setValue={(value) => {
                              setTipoDocumentoFilter(value);
                              field.onChange(value);
                            }}
                          />
                        )}
                      />
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
                    <IonButton type="submit">Buscar</IonButton>
                  </IonCol>
                </IonRow>
              </form>
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
              />
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
              />
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
                setPersonaToDelete={setPersonaToDelete}
                key={persona.id}
                id={persona.id!}
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
