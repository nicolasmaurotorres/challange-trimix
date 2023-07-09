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
import { Controller, SubmitHandler, useForm } from "react-hook-form";

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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initData,
  });
  const onSubmit: SubmitHandler<PersonaDto> = (data) => console.log(data);

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
                  render={() => (
                    <IonInput
                      fill="outline"
                      labelPlacement="floating"
                      label="Nombre"
                      type="text"
                      value={persona.nombre}
                      onIonInput={(e) => {
                        setPersona({ ...persona, nombre: e.detail.value! });
                      }}
                    />
                  )}
                />
              </IonCol>
              <IonCol size="6">
                <Controller
                  name="apellido"
                  control={control}
                  render={() => (
                    <IonInput
                      fill="outline"
                      labelPlacement="floating"
                      label="Apellido"
                      type="text"
                      value={initData.apellido}
                      onIonInput={(e) => {
                        setPersona({ ...persona, apellido: e.detail.value! });
                      }}
                    />
                  )}
                />
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="6">
                <Controller
                  name="tipoDocumento"
                  control={control}
                  render={() => (
                    <TipoDocumentoIonSelect
                      isFiltro={false}
                      value={persona.tipoDocumento}
                      setValue={(e) =>
                        setPersona({ ...persona, tipoDocumento: e })
                      }
                    />
                  )}
                />
              </IonCol>
              <IonCol size="6">
                <Controller
                  name="numeroDocumento"
                  control={control}
                  render={() => (
                    <IonInput
                      fill="outline"
                      labelPlacement="floating"
                      label="Numero Documento"
                      type="text"
                      value={initData.numeroDocumento}
                      onIonInput={(e) => {
                        setPersona({
                          ...persona,
                          numeroDocumento: e.detail.value!,
                        });
                      }}
                    />
                  )}
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <Controller
                  name="numeroDocumento"
                  control={control}
                  render={() => (
                    <IonInput
                      fill="outline"
                      labelPlacement="floating"
                      label="Fecha Nacimiento"
                      type="date"
                      value={initData.numeroDocumento}
                      onIonInput={(e) => {
                        setPersona({
                          ...persona,
                          numeroDocumento: e.detail.value!,
                        });
                      }}
                    />
                  )}
                />
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
