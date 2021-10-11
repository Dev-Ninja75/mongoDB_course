// Respecter la chronologie d'execution
const mongoose = require("mongoose");

// Nouveau Shema student
const studentSchema = new mongoose.Schema({
  name: { type: String, unique: true, index: true },
  age: Number,
  class: String,
  level: String,
  gender: String,
  mark: String,
  subjects: [{ type: mongoose.Types.ObjectId, ref: "Subject" }],
});

// Exportation du module pour permettre aux autres utilisateurs d'y acceder
// Définition du model 'Student' (nom de la collection) à partir du schema
module.exports = mongoose.model("Student", studentSchema);
