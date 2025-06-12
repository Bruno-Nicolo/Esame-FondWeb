const express = require("express");
const {
  getHomePageItems,
  getUserItems,
  addItem,
  addToFavorites,
  deleteItem,
  removeFromFavorites,
} = require("../controllers/itemController");
const router = express.Router();

router.get("/:userId/homepage", getHomePageItems);

router.post("/addItem", addItem);
router.post("/:userId/:itemId/addToFavorite", addToFavorites);
router.post("/:userId/:itemId/removeFromFavorite", removeFromFavorites);
router.delete("/delete/:itemId", deleteItem);

module.exports = router;
