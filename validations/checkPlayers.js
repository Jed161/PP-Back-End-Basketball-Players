const checkReviewerName = (req, res, next) => {
    if (req.body.reviewerName) {
        console.log("Reviewer name is okay")
        next()
    } else {
        res.status(400).json({ error: "Reviewer Name is required "})
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
    checkReviewerName,
    checkBoolean
};