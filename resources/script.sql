CREATE TABLE document_type (
    id_document_type SERIAL PRIMARY KEY,
    document_name_type VARCHAR(30) NOT NULL
);

CREATE TABLE role_table (
    id_role SERIAL PRIMARY KEY,
    role_name VARCHAR(15) NOT NULL UNIQUE
);

CREATE TABLE status (
    id_status SERIAL PRIMARY KEY,
    status_name VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE users (
    id_user SERIAL PRIMARY KEY,
    first_name VARCHAR(15) NOT NULL,
    second_name VARCHAR(15),
    first_surname VARCHAR(40) NOT NULL,
    second_surname VARCHAR(40),
    email VARCHAR(180) NOT NULL UNIQUE,
    phone_number VARCHAR(20) NOT NULL,
    date_of_birth DATE NOT NULL,
    identification_number VARCHAR(20) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    hire_date DATE NOT NULL,
    last_login TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    id_document_type INT NOT NULL,
    id_role INT NOT NULL,
    id_status INT NOT NULL,

    CONSTRAINT fk_document_type FOREIGN KEY (id_document_type) REFERENCES document_type(id_document_type),
    CONSTRAINT fk_role FOREIGN KEY (id_role) REFERENCES role_table(id_role),
    CONSTRAINT fk_status FOREIGN KEY (id_status) REFERENCES status(id_status)
);

CREATE TABLE floor_table(
	id_floor SERIAL PRIMARY KEY,
	floor_number INT NOT NULL,
	floor_name VARCHAR(50) NOT NULL
);

CREATE TABLE zones_table(
	id_zone SERIAL PRIMARY KEY,
	zone_name VARCHAR(200) NOT NULL,
	id_floor INT NOT NULL,

	CONSTRAINT fk_floor_table FOREIGN KEY (id_floor) REFERENCES floor_table(id_floor)
);

CREATE TABLE cleaning_type(
	id_cleaning_type SERIAL PRIMARY KEY,
	cleaning_type_name VARCHAR(20) NOT NULL
);

CREATE TABLE cleaning(
	id_cleaning SERIAL PRIMARY KEY,
	observations TEXT,
	supervisor_comments TEXT,
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	id_cleaning_type INT NOT NULL,
	id_user INT NOT NULL,
	id_zone INT NOT NULL,

	CONSTRAINT fk_cleaning_type FOREIGN KEY (id_cleaning_type) REFERENCES cleaning_type(id_cleaning_type),
	CONSTRAINT fk_cleaning_user FOREIGN KEY (id_user) REFERENCES users(id_user),
	CONSTRAINT fk_zones_table FOREIGN KEY (id_zone) REFERENCES zones_table(id_zone)
);

CREATE TABLE cleaning_evidence(
	id_evidence SERIAL PRIMARY KEY,
	original_filename VARCHAR(255) NOT NULL,
	stored_filename VARCHAR(255) NOT NULL,
	file_path VARCHAR(500),
	file_url VARCHAR(500),
	file_type VARCHAR(10) CHECK (file_type IN ('image', 'video')) NOT NULL,
	mime_type VARCHAR(50) NOT NULL,
	file_size_kb INT NOT NULL,
	uploaded_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

	id_cleaning INT NOT NULL,

	CONSTRAINT fk_evidence_cleaning FOREIGN KEY (id_cleaning) REFERENCES cleaning(id_cleaning)
);

-- Insertar tipos de documento colombianos
INSERT INTO document_type (document_name_type) VALUES 
('Cédula de Ciudadanía'),
('Cédula de Extranjería'),
('Tarjeta de Identidad'),
('Pasaporte');

-- Insertar roles del sistema
INSERT INTO role_table (role_name) VALUES 
('colaborador'),
('administrador');

-- Insertar estados de usuario
INSERT INTO status (status_name) VALUES 
('activo'),
('inactivo'),
('suspendido'),
('en_vacaciones');

-- Insertar pisos del edificio
INSERT INTO floor_table (floor_number, floor_name) VALUES 
(1, 'Primer Piso'),
(2, 'Segundo Piso');

-- Insertar todas las zonas según la especificación
INSERT INTO zones_table (zone_name, id_floor) VALUES 
-- Primer piso (id_floor = 1)
('Recepción (Área interna y zona de estar)', 1),
('Bodega de Recepción', 1),
('Sala Administrativa', 1),
('Sala de Juntas', 1),
('Cocina', 1),
('Baños Administrativos – (baño de damas)', 1),
('Baños Administrativos – (Movilidad Reducida)', 1),
('Escaleras (acceso a segundo piso)', 1),

-- Segundo piso (id_floor = 2)
('Sala Lounge', 2),
('Sala 1', 2),
('Sala 2', 2),
('Sala 3', 2),
('Sala 4', 2),
('Sala de Sistemas', 2),
('Sala de Estudio', 2),
('Pasillo segundo piso', 2),
('Baños Hombres', 2),
('Baños Damas', 2),
('Baños Movilidad Reducida', 2);

-- Insertar tipos de limpieza
INSERT INTO cleaning_type (cleaning_type_name) VALUES 
('Primera vez'),
('Repaso');

-- Insertar usuarios de ejemplo (datos colombianos típicos)
-- NOTA: Las contraseñas deben ser hasheadas en la aplicación real
INSERT INTO users (
    first_name, second_name, first_surname, second_surname, 
    email, phone_number, date_of_birth, identification_number, 
    user_password, hire_date, id_document_type, id_role, id_status
) VALUES 
-- Administrador
('Carlos', 'Andrés', 'Rodríguez', 'Martínez', 
 'carlos.rodriguez@riwi.io', '3001234567', '1985-03-15', '1234567890',
 'hashed_password_here', '2024-01-15', 1, 1, 1),

-- Colaboradores de limpieza
('María', 'Isabel', 'González', 'López', 
 'maria.gonzalez@integraseo.com', '3107654321', '1992-07-20', '1098765432',
 'hashed_password_here', '2024-02-01', 1, 1, 1),

('José', 'Luis', 'Hernández', 'Castro', 
 'jose.hernandez@integraseo.com', '3156789012', '1988-11-10', '1567890123',
 'hashed_password_here', '2024-02-15', 1, 1, 1),

('Ana', 'Lucía', 'Morales', 'Jiménez', 
 'ana.morales@integraseo.com', '3209876543', '1995-04-25', '1876543210',
 'hashed_password_here', '2024-03-01', 1, 1, 1),

-- Supervisor
('Esteban', 'Eduardo', 'Gutierrez', 'Polo', 
 'diego.vasquez@integraseo.com', '3134567890', '1983-09-12', '1345678901',
 'hashed_password_here', '2024-01-20', 1, 2, 2);