import TipoDocumentoEnumDto from "./TipoDocumentoEnum";

interface PersonaDto {
  id: number;
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  numeroDocumento: string;
  tipoDocumento: TipoDocumentoEnumDto;
}

export default PersonaDto;
