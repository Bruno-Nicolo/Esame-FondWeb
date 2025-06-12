const User = require("../models/user");

// aggiungi utente /addUser
exports.addUser = async (request, response) => {
  try {
    const newUser = request.body;
    await User.create(newUser);
    response.status(200).send("User added successfully");
  } catch {
    response.status(500).send("Error adding user");
  }
};

// get con query /:userId(?q=liked)
exports.getUserItems = async (request, response) => {
  try {
    const userId = request.params.id;
    const liked = request.query.liked;

    if (liked) {
      const retrievedItems = await Item.find({ likedBy: userId });
      response.status(200).json(retrievedItems);
    } else {
      const retrievedItems = await Item.find({ author: userId });
      response.status(200).json(retrievedItems);
    }
  } catch {
    response.status(500).send("Error retrieving items");
  }
};
