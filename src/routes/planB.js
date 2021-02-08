const express = require('express');
const planB = require("../controllers/planB");

const router = express.Router();

// Create a new planB
router.post("/",  planB.create);

// Retrieve all planB
router.get("/", planB.findAll);

// Retrieve all planB by userId
router.get("/upline/:uplineId", planB.findByUplineId);
// Retrieve all planB by userId
router.get("/user/:userId", planB.findByUserId);

// Retrieve a single planB with id
router.get("/:id", planB.findOne);

// Update a planB with id
router.put("/:id", planB.update);

// Delete a planB with id
router.delete("/:id", planB.delete);

// Delete all planB
router.delete("/", planB.deleteAll);

module.exports = router;
