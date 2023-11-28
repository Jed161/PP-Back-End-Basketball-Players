const express = require("express");
const cors = require("cors");
const app = express();
const playersController = require("./controllers/playersController");
const reviewsController = require("./controllers/reviewsController");


app.use(cors());
app.use(express.json());
app.use("/players", playersController);

app.get("/", (req, res) => {
    res.send("Welcome to players with Postgres")
});

app.get("*", (req, res) => {
    res.status(404).json({success: false, data: { error: "page not found "}})
});

module.exports = app;