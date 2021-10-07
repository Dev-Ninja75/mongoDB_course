// Respecter la chronologie d'execution
const mongoose = require("mongoose");

// Nouveau Shema
const userSchema = new mongoose.Schema({
  name: String,

  email: {
    type: String,
    required: true, //obligatoire !
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
  },

  birthDate: Date,

  CreatedOne: {
    type: Date,
    default: Date.now(),
  },
});

// Exportation du module pour permettre aux autres utilisateurs d'y acceder
// Définition du model 'User' (nom de la collection) à partir du schema
module.exports = mongoose.model("User", userSchema);
