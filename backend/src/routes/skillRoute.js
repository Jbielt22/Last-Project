const express = require("express");
const router = express.Router();
const skillController = require("../controllers/skillControllers");

router.get("/api/skills", skillController.getSkills);

module.exports = router;