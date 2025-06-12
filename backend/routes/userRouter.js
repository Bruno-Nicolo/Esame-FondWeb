const express = require("express");
const { addUser, getUserItems } = require("../controllers/userController");
const router = express.Router();

router.get("/:userId", getUserItems);
router.post("/addUser", addUser);
