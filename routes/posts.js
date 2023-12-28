const express = require("express");
const postsController = require("../controllers/postsController");

const router = new express.Router();

// Add a new post
router.post("/", async (req, res) => {
    await postsController.add(req, res);
});

// All posts
router.get("/", async (req, res) => {
    await postsController.all(req, res);
});

// Show a specific post
router.get("/:_id", async (req, res) => {
    await postsController.show(req, res);
});

// Update a specific post
router.put("/:_id", async (req, res) => {
    await postsController.update(req, res);
});

// Remove a spcific post
router.delete("/:_id", async (req, res) => {
    await postsController.remove(req, res);
});

module.exports = router;
