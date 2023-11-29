const checkPlayerName = (req, res, next) => {
    if (req.body.playerName) {
        console.log("Player name is okay")
        next()
    } else {
        res.status(400).json({ error: "Player Name is required "})
    }
};

const checkBoolean = (req, res, next) => {

    if (req.body.favorite === true || req.body.favorite === false) {

        next()
    } else {
        res.status(400).json({ error: "favorite must be a boolean value"})
    }
};

module.exports = {
    checkPlayerName,
    checkBoolean
};