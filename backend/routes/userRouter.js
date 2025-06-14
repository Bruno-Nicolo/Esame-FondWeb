const express = require("express");
const router = express.Router();
const {
  addUser,
  getUserItems,
  getUserInfo,
  login,
} = require("../controllers/userController");

router.get("/:userId", getUserInfo);
router.get("/:userId/items", getUserItems);
router.post("/addUser", addUser);
router.post("/login", login);

module.exports = router;
