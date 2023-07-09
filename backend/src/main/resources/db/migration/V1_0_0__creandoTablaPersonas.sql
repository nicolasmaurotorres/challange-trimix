CREATE TABLE IF NOT EXISTS `Personas`(
`perId` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`perNombre` VARCHAR(20) NOT NULL,
`perApellido` VARCHAR(20) NOT NULL,
`perFechaNacimiento` DATE NOT NULL,
`perNumeroDocumento` VARCHAR(11) NOT NULL,
`perTipoDocumento` VARCHAR(8) NOT NULL,
CONSTRAINT perTipoDocumentoValido 
CHECK (`perTipoDocumento` IN ('Dni','Pasaporte', 'Cédula'))
);