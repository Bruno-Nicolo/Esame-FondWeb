const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const mongoose = require("mongoose");
const itemsRoute = require("./routes/itemsRoute");
const userRoute = require("./routes/userRouter");
const app = express();
const cors = require("cors"); // Importa il pacchetto cors

const http = require("http");
const server = http.createServer(app);

// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Per parsare il body delle richieste URL-encoded

app.use("/api/items", itemsRoute);
app.use("/api/users", userRoute);

mongoose.connect(
  `mongodb+srv://brunonico787:${process.env.DB_PASSWORD}@fond-web.lqjleft.mongodb.net/?retryWrites=true&w=majority&appName=fond-web`
);

const db = mongoose.connection;

// Apriamo una connessione con il database e mettiamo il server in ascolto
db.once("open", () =>
  server.listen(process.env.PORT, () =>
    console.log(
      `App connessa al DB e in ascolto sulla porta ${process.env.PORT}`
    )
  )
);
