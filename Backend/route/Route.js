const express = require("express");
const router = express.Router();
const {registerRunner} = require("../controllers/Controllers");

router.post("/register", registerRunner);


module.exports = router;
