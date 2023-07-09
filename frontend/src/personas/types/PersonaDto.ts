import TipoDocumentoEnum from "./TipoDocumentoEnum";

interface PersonaDto {
  id: number;
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  numeroDocumento: string;
  tipoDocumento: TipoDocumentoEnum;
}

export default PersonaDto;
