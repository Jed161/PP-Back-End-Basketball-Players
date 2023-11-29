DROP DATABASE IF EXISTS players_dev;

CREATE DATABASE players_dev;

\c players_dev;

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    playerName TEXT NOT NULL,
    img_url TEXT,
    yearDrafted VARCHAR(255),
    teamDraftedBy VARCHAR(255),
    rookieOfTheYear BOOLEAN
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewerName TEXT NOT NULL,
    content TEXT,
    favorite BOOLEAN,
    rookieRating NUMERIC,
    CHECK (rookieRating >= 0 AND rookieRating <= 10),
    player_id INTEGER REFERENCES players (id)
    ON DELETE CASCADE
);