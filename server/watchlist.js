const express = require("express");
const { ObjectId } = require("mongodb");
const dbConnection = require("./db");

const router = express.Router();

// Post new show in watchlist
router.post("/", async (req, res) => {
  const db = dbConnection.getDb();
  const now = new Date();

  const newShow = {
    title: req.body.title,
    description: req.body.description,
    created_at: now,
    last_updated: now,
  };

  const watchlistCollection = db.collection("watchlist");

  try {
    const result = await watchlistCollection.insertOne(newShow);
    // const message = `New show created with ID: ${result.insertedId}`;
    res.status(201).json(result);
  } catch (error) {
    res.status(400).send("Error adding new show.");
  }
});

// Get watchlist
router.get("/", async (req, res) => {
  const db = dbConnection.getDb();
  const watchlistCollection = db.collection("watchlist");

  try {
    const result = await watchlistCollection.find({}).toArray();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send("Error fetching watchlist.");
  }
});

// Get a show in the watchlist
router.get("/:id", async (req, res) => {
  const db = dbConnection.getDb();
  const showId = req.params.id;
  console.log(showId);
  const watchlistCollection = db.collection("watchlist");

  try {
    const result = await watchlistCollection.findOne({ _id: ObjectId(showId) });
    console.log(result)
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send("Error fetching show.");
  }
});

// Update a show in the watchlist
router.put("/:id", async (req, res) => {
  const db = dbConnection.getDb();
  const now = new Date();
  const showId = req.params.id;
  const updatedShow = {
    ...req.body,
    last_updated: now,
  };
  const watchlistCollection = db.collection("watchlist");

  try {
    await watchlistCollection.updateOne(
      { _id: ObjectId(showId) },
      { $set: updatedShow },
      { upsert: true }
    );
    res.status(200).json({
      message: `Show with ID: ${showId} updated.`
    });
  } catch (error) {
    res.status(400).send("Error updating show.");
  }
});

// Delete a show in the watchlist
router.delete("/:id", async (req, res) => {
  const db = dbConnection.getDb();
  const showId = req.params.id;
  const watchlistCollection = db.collection("watchlist");

  try {
    await watchlistCollection.deleteOne({ _id: ObjectId(showId) });
    res.status(200).json({
      message: `Show with ID: ${showId} deleted.`
    });
  } catch (error) {
    res.status(400).send("Error deleting show.");
  }
});

module.exports = router;
