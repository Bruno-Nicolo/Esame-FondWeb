const User = require("../models/users");
const Item = require("../models/items");

// aggiungi utente /addUser
exports.addUser = async (request, response) => {
  try {
    const newUser = request.body;
    const user = new User(newUser);

    await user.save();
    response.status(200).json({
      message: "User added successfully",
      userId: user._id,
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

// get con query /:userId/items(?q=liked)
exports.getUserItems = async (request, response) => {
  try {
    const userId = request.params.userId;
    const liked = request.query.q;

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

// get /:userId
exports.getUserInfo = async (request, response) => {
  const { userId } = request.params;
  try {
    const retrievedUser = await User.findById(userId);
    console.log(retrievedUser);
    response.status(200).json({
      name: retrievedUser.name,
      surname: retrievedUser.surname,
      email: retrievedUser.email,
    });
  } catch {
    response.status(500).json({ message: "Something went wrong" });
  }
};

exports.login = async (request, response) => {
  try {
    const user = await User.findOne({ email: request.body.email });
    if (!user) {
      response.status(401).json({ message: "User not found" });
    } else {
      const isPasswordCorrect = await user.comparePassword(
        request.body.password
      );
      if (!isPasswordCorrect) {
        response.status(401).json({ message: "Password is incorrect" });
      } else {
        response
          .status(200)
          .json({ message: "Login successful", userId: user._id });
      }
    }
  } catch (error) {
    response.status(500).json({ message: "Error logging in" });
  }
};
