CREATE TABLE creature_surrender_applications(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  creature_name VARCHAR(255) NOT NULL,
  creature_age INTEGER,
  creature_type_id INTEGER REFERENCES creature_types(id) NOT NULL,
  creature_image_url VARCHAR(255) NOT NULL,
  vaccination_status BOOLEAN,
  application_status VARCHAR(255) NOT NULL
);