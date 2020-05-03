CREATE TABLE adoptable_creatures (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    creature_img VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    vaccination_status BOOLEAN,
    adoption_story TEXT NOT NULL,
    adoption_status VARCHAR(255) NOT NULL,
    type_id INTEGER REFERENCES creature_types(id) NOT NULL
);