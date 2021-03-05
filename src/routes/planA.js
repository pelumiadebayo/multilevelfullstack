const express = require('express');
const planA = require("../controllers/planA");

const router = express.Router();

// Create a new planA
router.post("/",  planA.create);

// Retrieve all planA
router.get("/", planA.findAll);

// Retrieve all planA by uplineId
router.get("/upline/:uplineId", planA.findByUplineId);

// Retrieve all planA by userId
router.get("/:userId", planA.findByUserId);

// Retrieve a single planA with id
router.get("/:id", planA.findOne);

// Update a planA with id
router.put("/:id", planA.update);

// Delete a planA with id
router.delete("/:id", planA.delete);

// Delete all planA
router.delete("/", planA.deleteAll);

module.exports = router;
