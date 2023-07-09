import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import PersonaDto from "../types/PersonaDto";
import TipoDocumentoIonSelect from "../components/TipoDocumentoIonSelect";
import AxiosInstance from "../requests/AxiosInstance";
import { useHistory, useLocation, useParams } from "react-router";
import { TipoDocumentoEnumDto } from "../types/TipoDocumentoTypes";

const PersonaDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [persona, setPersona] = useState<PersonaDto>();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (id) {
      setIsEdit(true);
      setPersona(location.state as PersonaDto);
    }
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonaDto>({
    values: {
      id: persona?.id,
      nombre: persona?.nombre ?? "",
      apellido: persona?.apellido ?? "",
      fechaNacimiento: persona?.fechaNacimiento ?? "",
      numeroDocumento: persona?.numeroDocumento ?? "",
      tipoDocumento: persona?.tipoDocumento ?? TipoDocumentoEnumDto.Dni,
    },
    defaultValues: {
      id: persona?.id,
      nombre: persona?.nombre ?? "",
      apellido: persona?.apellido ?? "",
      fechaNacimiento: persona?.fechaNacimiento ?? "",
      numeroDocumento: persona?.numeroDocumento ?? "",
      tipoDocumento: persona?.tipoDocumento ?? TipoDocumentoEnumDto.Dni,
    },
  });

  const onSubmit: SubmitHandler<PersonaDto> = async (data) => {
    let resp;
    if (isEdit) {
      resp = await AxiosInstance.put("/personas", data);
    } else {
      resp = await AxiosInstance.post("/personas", data);
    }
    if (resp && resp.status >= 200 && resp.status < 300) {
      history.goBack();
    }
  };

  return (
    <IonPage>
      <IonContent>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                <Controller
                  name="nombre"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field }) => (
                    <IonInput
                      {...field}
                      max={20}
                      maxlength={20}
                      fill="outline"
                      labelPlacement="floating"
                      label="Nombre"
                      type="text"
                      value={persona?.nombre}
                      name="nombre"
                      onIonInput={(e) => {
                        if (persona) {
                          setPersona({ ...persona, nombre: e.detail.value! });
                          field.onChange(e.detail.value!);
                        }
                      }}
                    />
                  )}
                />
                {errors.nombre && (
                  <IonLabel color="danger">Este campo es requerido</IonLabel>
                )}
              </IonCol>
              <IonCol size="6">
                <Controller
                  name="apellido"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <IonInput
                      {...field}
                      fill="outline"
                      max={20}
                      maxlength={20}
                      labelPlacement="floating"
                      label="Apellido"
                      type="text"
                      name="apellido"
                      value={persona?.apellido}
                      onIonInput={(e) => {
                        if (persona) {
                          setPersona({ ...persona, apellido: e.detail.value! });
                          field.onChange(e.detail.value!);
                        }
                      }}
                    />
                  )}
                />
                {errors.apellido && (
                  <IonLabel color="danger">Este campo es requerido</IonLabel>
                )}
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="6">
                <Controller
                  name="tipoDocumento"
                  control={control}
                  rules={{
                    required: true,
                    validate: (value, formState) => {
                      return value + "" !== "0";
                    },
                  }}
                  render={({ field }) => (
                    <TipoDocumentoIonSelect
                      {...field}
                      name="tipoDocumento"
                      isFiltro={false}
                      value={persona?.tipoDocumento}
                      setValue={(value) => {
                        if (persona) {
                          setPersona({ ...persona, tipoDocumento: value });
                          field.onChange(value);
                        }
                      }}
                    />
                  )}
                />
                {errors.tipoDocumento && (
                  <IonLabel color="danger">Este campo es requerido</IonLabel>
                )}
              </IonCol>
              <IonCol size="6">
                <Controller
                  name="numeroDocumento"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <IonInput
                      {...field}
                      fill="outline"
                      labelPlacement="floating"
                      label="Numero Documento"
                      type="text"
                      name="numeroDocumento"
                      max={11}
                      maxlength={11}
                      value={persona?.numeroDocumento}
                      onIonInput={(e) => {
                        if (persona) {
                          setPersona({
                            ...persona,
                            numeroDocumento: e.detail.value!,
                          });
                          field.onChange(e.detail.value!);
                        }
                      }}
                    />
                  )}
                />
                {errors.numeroDocumento && (
                  <IonLabel color="danger">Este campo es requerido</IonLabel>
                )}
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <Controller
                  name="fechaNacimiento"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <IonInput
                      {...field}
                      name="fechaNacimiento"
                      fill="outline"
                      labelPlacement="floating"
                      label="Fecha Nacimiento"
                      type="date"
                      value={persona?.fechaNacimiento}
                      onIonChange={(e) => {
                        if (persona) {
                          setPersona({
                            ...persona,
                            fechaNacimiento: e.detail.value!,
                          });
                          field.onChange(e.detail.value!);
                        }
                      }}
                    />
                  )}
                />
                {errors.fechaNacimiento && (
                  <IonLabel color="danger">Este campo es requerido</IonLabel>
                )}
              </IonCol>
              <IonCol offset="5" className="ion-padding-vertical">
                <IonButton type="submit" fill="solid">
                  {isEdit ? "Editar" : "Crear"}
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default PersonaDetailPage;
