export enum TipoDocumentoEnumDto {
  Dni,
  Pasaporte,
  Cédula,
}

export enum TipoDocumentoEnum {
  Todos,
  Dni,
  Cédula,
  Pasaporte,
}

export type TipoDocumentoType = TipoDocumentoEnumDto | TipoDocumentoEnum;
