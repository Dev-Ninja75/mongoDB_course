// Respecter la chronologie d'execution
const mongoose = require("mongoose");

// Nouveau Shema subject
const subjectSchema = new mongoose.Schema({
  name: String,
  coeff: Number,
  name: String,
  teacher: String,
  room: String,
});

// Exportation du module pour permettre aux autres utilisateurs d'y acceder
// Définition du model 'Subject' (nom de la collection) à partir du schema

const subjectModel = mongoose.model("Subject", subjectSchema);

module.exports = subjectModel;
