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
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import PersonaDto from "../types/PersonaDto";
import { TipoDocumentoEnumDto } from "../types/TipoDocumentoTypes";
import TipoDocumentoIonSelect from "../components/TipoDocumentoIonSelect";
import AxiosInstance from "../requests/AxiosInstance";
import { useHistory } from "react-router";

const initData: PersonaDto = {
  nombre: "",
  apellido: "",
  fechaNacimiento: "",
  numeroDocumento: "",
  tipoDocumento: TipoDocumentoEnumDto.Dni,
};

const PersonaDetailPage: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonaDto>({
    defaultValues: {
      nombre: "",
      apellido: "",
      fechaNacimiento: "",
      numeroDocumento: "",
      tipoDocumento: TipoDocumentoEnumDto.Dni,
    },
  });

  const history = useHistory();

  const onSubmit: SubmitHandler<PersonaDto> = async (data) => {
    const resp = await AxiosInstance.post("/personas", data);
    if (resp.status >= 200 && resp.status < 300) {
      history.goBack();
    }
  };

  const [persona, setPersona] = useState<PersonaDto>(initData);
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
                      value={persona.nombre}
                      name="nombre"
                      onIonInput={(e) => {
                        setPersona({ ...persona, nombre: e.detail.value! });
                        field.onChange(e.detail.value!);
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
                      value={persona.apellido}
                      onIonInput={(e) => {
                        setPersona({ ...persona, apellido: e.detail.value! });
                        field.onChange(e.detail.value!);
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
                      value={persona.tipoDocumento}
                      setValue={(value) => {
                        setPersona({ ...persona, tipoDocumento: value });
                        field.onChange(value);
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
                      value={persona.numeroDocumento}
                      onIonInput={(e) => {
                        setPersona({
                          ...persona,
                          numeroDocumento: e.detail.value!,
                        });
                        field.onChange(e.detail.value!);
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
                      value={persona.fechaNacimiento}
                      onIonChange={(e) => {
                        setPersona({
                          ...persona,
                          fechaNacimiento: e.detail.value!,
                        });
                        field.onChange(e.detail.value!);
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
                  Crear
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
