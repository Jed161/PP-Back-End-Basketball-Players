const express = require("express");

const {
    getAllPlayers,
    getOnePlayer,
    createPlayer,
    deletePlayer,
    updatePlayer
} = require("../queries/players.js");

const reviewsController = require("./reviewsController.js");
const { checkPlayerName, checkBoolean } = require("../validations/checkPlayers.js");
const players = express.Router();


players.use("/:player_id/reviews", reviewsController);

players.get("/:id", async (req, res) => {
    const { id } = req.params
    const onePlayer = await getOnePlayer(id)
    if (onePlayer) {
        res.json(onePlayer)
    } else {
        res.status(404).json({error: "not found!"})
    }
});

players.get("/", async (req, res) => {
    const allPlayers = await getAllPlayers();
    if (allPlayers[0]) {
        res.status(200)
        .json({ success: true, data: { payload: allPlayers }});
    } else {
        res.status(500)
        .json({success: false, data: { error: "Server error" }});
    }
});

players.post("/", checkPlayerName, checkBoolean, async (req, res) => {
    try {
        const createdPlayer = await createPlayer(req.body)
        res.json(createdPlayer)
    } catch (error) {
        res.status(400).json({error: "You have an error"})
    }
});

players.delete("/:id", async (req, res) => {
    try {
        const { id } =req.params;
        const deletedPlayer = await deletePlayer(id);
        if (deletedPlayer) {
            res.status(200).json( {success: true, payload: {data: deletedPlayer}})
        } else {
            res.status(404).json("playeer not found")
        }
    } catch(err) {
        res.send(err)
    }
});

players.put("/:id", async(req, res) => {
    const { id } = req.params;
    const updatedPlayer = await updatePlayer(id, req.body);
    if (updatePlayer.id) {
        res.status(200).json(updatedPlayer);
    } else {
        res.status(404).json("no player found with that id")
    }
});

module.exports = players;