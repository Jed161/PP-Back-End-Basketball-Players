const db = require("../db/dbConfig.js");

const getAllReviews = async (player_id) => {
    try {
        const allReviews = await db.any("SELECT * FROM players WHERE player_id=$1", player_id);
        return allReviews 
    } catch (error) {
        return error
    }
};

const getOneReview = async (id) => {
    try {
        const oneReview = await db.one("SELECT * FROM players WHERE id=$1", id);
        return oneReview 
    } catch (error) {
        return error
    }
};

const deleteReview = async (id) => {
    try {
        const deletedReview = await db.one("DELETE FROM players WHERE id = $1 RETURNING *", id);

        return deletedReview

    } catch (error) {
        return error
    }
};

const createReview = async (player_id, review) => {
    try {
        const { reviewerName, content, favorite, rookieRating } = review;
        const createdReview = await db.one(`INSERT INTO players (reviewerName, content, favorite, rookieRating, player_id)
            VALUES
            ($1, $2, $3, $4, $5) RETURNING *`,
            [reviewerName, content, favorite, rookieRating, player_id]
        );
        return createdReview

    } catch (error) {
        return error
    }
};

const updateReview = async (review) => {
    try {
        const { reviewerName, content, favorite, rookieRating, id, player_id} = review;
        const updatedReview = await db.one(
            `UPDATE reviews SET
            reviewerName=$1, content=$2, favorite=$3, rookieRating=$4, player_id=$5 WHERE id=$6 RETURNING * `,
            [reviewerName, content, favorite, rookieRating, id, player_id]
        );
        return updatedReview

    } catch (error) {
        return error
    }
};

module.exports = {
    getAllReviews,
    getOneReview,
    deleteReview,
    createReview,
    updateReview
};