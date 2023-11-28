DROP DATABASE IF EXISTS players_dev;

CREATE DATABASE players_dev;

\c players_dev;

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    player_name TEXT NOT NULL,
    img_url TEXT,
    year_drafted DATE,
    team_drafted_by VARCHAR(40),
    rookie_of_the_year BOOLEAN
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer_name TEXT NOT NULL,
    content TEXT,
    favorite BOOLEAN,
    rookie_rating NUMERIC,
    CHECK (rookie_rating >= 0 AND rookie_rating <= 10),
    player_id INTEGER REFERENCES plqayers (id)
    ON DELETE CASCADE
);