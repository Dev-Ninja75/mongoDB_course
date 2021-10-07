// Respecter la chronologie d'execution
const http = require("http");
const server = http.createServer();
const mongoose = require("mongoose");

// Importation du userSchema
const userModel = require("./models/userModel");

// Nouvelle instance de userModel
const user = new userModel({
  name: "Sofiane ABDEDOU",
  email: "sofiane.ab@gmail.com",
  password: "password1234",
  birthDate: new Date("1990-08-30"),
});

// console.log(user); vérifier le contenu user

// creation d'un nouvel utilisateur
// user
//   .save()
//   .then((newUser) => {
//     console.log("Nouvel utilisateur !", newUser);
//   })
//   .catch((error) => {
//     console.error("Error mongoDB", error);
//   });

// Obtenir l'ensemble de la collection
// userModel
//   .find()
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//Obtenir un utilisateur par son id
// userModel
//   .findById("615d9ab41f6367ca989e14f2")
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//Obtenir un utilisateur par son email adress avec le filtre findOne
// userModel
//   .findOne({ email: "sofiane.ab@gmail.com" })
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//Mise à jour d'un document
//

// Supprimer un document
userModel
  .deleteOne({ _id: "615d9ab41f6367ca989e14f2" })
  .then((deletUser) => {
    console.log(deletUser);
  })
  .catch((error) => {
    console.error(error);
  });

// Connection à MongoDB
mongoose.connect("mongodb://localhost:27017/demo", (error) => {
  if (error) {
    console.error(error); // Afficher l'erreur de MongoDB en cas de problème
    process.exit(1); // Quitte l'application en cas d'erreur
  }
  console.log("MongoDB connected Successfully");
}); // <demo> est le nom de notre databse

server.listen(3000, () => {
  console.log(`Nodejs server started on port ${3000}`);
});
