const db = require("../db/dbConfig.js");

const getAllPlayers = async () => {
    try {
        const allPlayers = await db.any("SELECT * FROM players");
        return allPlayers
    } catch(err) {
        return err
    }
};

const getonePlayer = async (id) => {
    try {
        const onePlayer = await db.one("SELECT * FROM players WHERE id=$1", id)
        return onePlayer
    } catch (error) {
        return error
    }
};

const createPlayer = async (player) => {
    try {
        const createdPlayer = await db.one("INSERT INTO players (playerName, img_url, yearDrafted, teamDraftedBy, rookieOfTheYear) VALUES ($1, $2, $3, $4, $5) RETURNING *", [player.playerName, player.img_url, player.yearDrafted, player.teamDraftedBy, rookieOfTheYear])
        return createdPlayer
    } catch (error) {
        return error
    }
};

const deletePlayer = async (id) => {
    try {
        const deletedPlayer = await db.one(
            "DELETE FROM players WHERE id = $1 RETURNING *", id
        )
        return deletedPlayer
    } catch (error) {
        return error
    }
};

const updatePlayer = async (id, player) => {
    try {
        const { playerName, img_url, yearDrafted, teamDraftedBy, rookieOfTheYear } = player;
        const updatedPlayer = await db.one(
            "UPDATE players SET playerName=$1, img_url=$2, yearDrafted=$3, teamDraftedBy=$4, rookieOfTheYear=$5 WHERE id=$6 RETURNING*",
            [playerName, img_url, yearDrafted, teamDraftedBy, rookieOfTheYear, id]
        );
        return updatedPlayer
    } catch (error) {
        return error
    }
};

module.exports = {
    getAllPlayers,
    getonePlayer,
    createPlayer,
    deletePlayer,
    updatePlayer
}