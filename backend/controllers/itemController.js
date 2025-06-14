const mongoose = require("mongoose");
const Item = require("../models/items");

// get /:id/homepage
exports.getHomePageItems = async (request, response) => {
  try {
    const userId = request.params.userId;
    const allItems = await Item.find({ author: { $ne: userId } });
    response.status(200).json(allItems);
  } catch {
    response.status(500).send("Error retrieving items");
  }
};

// post /:userId/:itemId/addToFavorite per aggiungere a preferiti
exports.addToFavorites = async (request, response) => {
  try {
    const itemId = request.params.itemId;
    const userId = request.params.userId;
    const retrievedItem = await Item.findById(itemId);
    retrievedItem.likedBy.push(userId);
    await retrievedItem.save();
    response.status(200).send("Item added to favorites");
  } catch {
    response.status(500).send("Error adding item to favorites");
  }
};

// post /:userId/:itemId/removeFromFavorite per rimuovere da preferiti
exports.removeFromFavorites = async (request, response) => {
  try {
    const itemId = request.params.itemId;
    const userId = request.params.userId;
    const retrievedItem = await Item.findById(itemId);
    // Rimuovi l'utente in posizione "index"
    const index = retrievedItem.likedBy.indexOf(userId);
    retrievedItem.likedBy.splice(index, 1);
    await retrievedItem.save();

    // prendi tutti gli items, filtra solo quelli a cui l'utente ha messo like
    const allItems = await Item.find({});
    const likedItems = allItems.filter((item) => item.likedBy.includes(userId));

    response.status(200).json({
      message: "Item removed from favorites",
      items: likedItems,
    });
  } catch {
    response.status(500).send("Error removing item from favorites");
  }
};

// post per aggiungere item
exports.addItem = async (request, response) => {
  try {
    const newItem = request.body;
    await Item.create(newItem);
    response.status(200).json({ message: "Item added successfully" });
  } catch (error) {
    // response.status(500).json({ message: "Ops! Something went wrong" });
    response.status(500).json({ message: error.message });
  }
};

// post per rimuovere :userId/delete/:itemId
exports.deleteItem = async (request, response) => {
  try {
    const itemId = request.params.itemId;
    const retrievedItem = await Item.findById(itemId);
    await retrievedItem.deleteOne();
    // prendo gli item dell'utente
    const userId = request.params.userId;
    const currentItems = await Item.find({ author: userId });
    response.status(200).json({
      message: "Item deleted successfully",
      items: currentItems,
    });
  } catch (error) {
    response.status(500).send(error);
  }
};
