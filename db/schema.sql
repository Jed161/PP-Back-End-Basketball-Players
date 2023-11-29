DROP DATABASE IF EXISTS players_dev;

CREATE DATABASE players_dev;

\c players_dev;

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    playerName TEXT NOT NULL,
    img_url TEXT,
    yearDrafted DATE,
    teamDraftedBy VARCHAR(40),
    rookieOfTheYear BOOLEAN
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewerName TEXT NOT NULL,
    content TEXT,
    favorite BOOLEAN,
    rookieRating NUMERIC,
    CHECK (rookie_rating >= 0 AND rookie_rating <= 10),
    player_id INTEGER REFERENCES players (id)
    ON DELETE CASCADE
);