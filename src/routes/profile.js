const express = require('express');
const profile = require("../controllers/profile");

const router = express.Router();

// Create a new profile
router.post("/",  profile.create);

// Retrieve all profile
router.get("/", profile.findAll);

// Retrieve all profile by userId
router.get("/user/:userId", profile.findByUserId);

// Retrieve a single Tutorial with id
router.get("/:id", profile.findOne);

// Update a profile with id
router.put("/:id", profile.update);

// Delete a profile with id
router.delete("/:id", profile.delete);

// Delete all profile
router.delete("/", profile.deleteAll);

module.exports = router;
