// Respecter la chronologie d'execution
const http = require("http");
const server = http.createServer();
const mongoose = require("mongoose");

//Importation du subjectSchema
const subjectModel = require("./models/subjectModel");
//Importation du studentSchema
const studentModel = require("./models/studentModel");

const subjects = [
  {
    name: "React",
    teacher: "Chris",
    coeff: 5,
    room: "Masterclass",
  },
  {
    name: "Node.js",
    teacher: "Marc",
    coeff: 8,
    room: "Sunshine",
  },
  {
    name: "Mongo DB",
    teacher: "Bryan",
    coeff: 6,
    room: "Rocket",
  },
  {
    name: "Javascript",
    teacher: "Hervé",
    coeff: 3,
    room: "Rocket",
  },
];

// Insertion database du tableau 'subjects'
subjectModel.insertMany(subjects).then(console.log).catch(console.error);

function addSubjectToStudent(studentName, subjectName) {
  return new Promise((resolve, reject) => {
    //Essaye d'effectuer une action asynchrone
    //Renvoie nous la réponse => resolve
    //S'il ya une erreur => reject !
    subjectModel
      // On récupère le sujet d'examen d'après le nom demandé (par exemple: 'React')
      .findOne({ name: subjectName })
      .then((subject) => {
        studentModel
          // On récupère le student d'après le nom demandé (par exemple: 'Annelise')
          .findOne({ name: studentName })
          .then((student) => {
            // ajout de l'id du sujet dans le tableau `subject` de student
            student.subjects.push(subject._id);
            // Mise à jour de student dans la database
            updateStudent(student).then(resolve).catch(reject);
          })
          .catch(reject);
      })
      .catch(reject);
  });
}

// Fonction de mise à jour d'un student
function updateStudent(student) {
  return new Promise((resolve, reject) => {
    studentModel
      .updateOne({ _id: student._id }, { $set: student }) // $set => remplacer
      .then(resolve)
      .catch(reject);
  });
}

// async function adddSbjectToStudentAsync(student, subject) {
//   const subjectsList = await subjectModel.find();
// } => autre possibilité

// Execution de la fonction de liaison entre un student et un subject d'examen
addSubjectToStudent("Enrika", "React").then(console.log).catch(console.error);

// Importation de la librairie nécessaire à l'affichage du console.log ci-dessous
const util = require("util");

// Récuperation des 3 premier Students, mise en relation avec la collection `subjects`
studentModel
  .find()
  .limit(3)
  .populate("subjects")
  .then((students) => {
    //Affichage  de la liste des Students retournée par la requête dans la console
    console.log(util.inspect(students, false, Infinity, true));
  })
  .catch(console.error);

// Connection à MongoDB Compass
mongoose.connect("mongodb://localhost:27017/demo", (error) => {
  if (error) {
    console.error(error); // Afficher l'erreur de MongoDB en cas de problème
    process.exit(1); // Quitte l'application en cas d'erreur
  }
  console.log("MongoDB connected Successfully");
}); // demo est le nom de notre database

server.listen(3000, () => {
  console.log(`Nodejs server started on port ${3000}`);
});
