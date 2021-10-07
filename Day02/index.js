// Respecter la chronologie d'execution
const http = require("http");
const server = http.createServer();
const mongoose = require("mongoose");

//Importation du studentSchema
const studentModel = require("./models/studentModel");

// Import unique-names-generator
const { uniqueNamesGenerator, names } = require("unique-names-generator");
const levels = ["6eme", "5eme", "4eme", "3eme", "2nde", "1ere", "Terminale"];
const classes = ["A", "B", "C", "D", "E"];

// Nouvelle instance de schema studentModel
const students = [];
for (let i = 0; i < 1000; i++) {
  students.push({
    name: uniqueNamesGenerator({ dictionaries: [names] }),
    age: Math.floor(Math.random() * 10 + 10),
    level: levels[Math.floor(Math.random() * levels.length)],
    classes: classes[Math.floor(Math.random() * classes.length)],
    gender: Math.random() > 0.5 ? "M" : "F",
    mark: parseFloat((Math.random() * 20).toFixed(2)),
  });
}

// console.log(students);

// Enregistrement de mon tableau 'students' dans la collection 'students'
// studentModel
//   .create(students)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Aggregation => filtrer tous les étudiants de 6eme A
// studentModel
//   .aggregate()
//   .match({ level: "6eme", class: "A" })
//   .sort({ name: 1 })
//   .group({
//     _id: null,
//     count: { $sum: 1 },
//   })
//   .then(console.log)
//   .catch(console.error);

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
