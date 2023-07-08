CREATE TABLE IF NOT EXISTS `Personas`(
`perId` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`perNombre` VARCHAR(20),
`perApellido` VARCHAR(20),
`perFechaNacimiento` DATE,
`perNumeroDocumento` VARCHAR(11),
`perTipoDocumento` VARCHAR(8) NOT NULL,
CONSTRAINT perTipoDocumentoValido 
CHECK (`perTipoDocumento` IN ('Dni','Pasaporte', 'Cédula'))
);