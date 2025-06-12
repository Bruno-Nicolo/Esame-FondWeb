const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const mongoose = require("mongoose");
const itemsRoute = require("./routes/itemsRoute");

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.use(express.json());

app.use("/api/items", itemsRoute);

mongoose.connect(
  `mongodb+srv://brunonico787:${process.env.DB_PASSWORD}@fond-web.lqjleft.mongodb.net/?retryWrites=true&w=majority&appName=fond-web`
);
