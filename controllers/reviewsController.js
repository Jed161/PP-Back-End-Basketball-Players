const express = require("express");
const reviews = express.Router({ mergeParams: true });
const { getOnePlayer } = require("../queries/players");
const {
  getAllReviews,
  getOneReview,
  deleteReview,
  createReview,
  updateReview
} = require("../queries/reviews");

reviews.get("/", async (req, res) => {
    const { player_id, } = req.params;
    try {
        const player = await getOnePlayer(player_id);
        const allReviews = await getAllReviews(player_id);
        res.json({...player, allReviews });
    } catch (err) {
        res.json(err);
    }
});

reviews.get("/:review_id", async (req, res) => {
    const { review_id, player_id } = req.params;
    try {
        const review = await getOneReview(review_id);
        const player = await getOnePlayer(player_id);
        if (review_id) {
            res.json({ ...player, review });
        }
    } catch (err) {
        res.json(err);
    }
});

reviews.post("/", async (req, res) => {
    try {
        const { player_id } = req.params;
        const createdReview = await createReview(player_id, req.body)
        res.json(createdReview);
    } catch(err) {
        res.status(400).json( {error: "uh oh Error!"})
    }
});

reviews.delete("/:review_id", async (req, res) => {
    try {
    const { review_id } = req.params;
    const deletedReview = await deleteReview(review_id); 

    if (deleteReview) {
        res.status(200).json({ success: true, payload: { data: deletedReview }});
    } else {
        res.status(404).json("no review found");
    }
    } catch (err) {
        res.send(err);
    }
});

reviews.put("/:id", async (req, res) => {
    const { id, player_id } = req.params;
    const updatedReview = await updateReview( {player_id, id, ...req.body});
    if (updatedReview.id) {
        res.status(200).json(updatedReview)
    } else {
        res.status(404).json("Review is not here")
    }
});

module.exports = reviews;
