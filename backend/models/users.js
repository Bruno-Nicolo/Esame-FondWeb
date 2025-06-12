const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true, // rimuove gli spazi iniziali e finali
  },
  surname: {
    type: String,
    required: [true, "Surname is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true, // se un utente si registra con una email già esistente, il db non lo accetta -> fai il login
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Email is not valid"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
    match: [
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*_+.?~-]).+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%&*_+.?~-)",
    ],
  },
  liekdItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
  description: {
    type: String,
    default: "",
  },
  profilePicture: {
    type: String, // URL dell'immagine del profilo
  },
});

// Middleware pre-save per hashare la password prima di salvarla
userSchema.pre("save", async function (next) {
  console.log(this);

  // Esegui l'hashing solo se la password è stata modificata (o è nuova)
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Metodo per confrontare la password inserita con quella hashata nel DB
userSchema.methods.comparePassword = async function (otherpwd) {
  return bcrypt.compare(otherpwd, this.password);
};

module.exports = mongoose.model("User", userSchema);
