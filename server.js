const express = require("express");
const app = express(); //instanta a serverului de Express(creaza serverul de express)
const bodyParser = require("body-parser");
const fs = require("fs");

const jsonParser = bodyParser.json(); //e o librarie a npm-ului folosită pentru
//a procesa datele trimise in requestul HTTP

app.use(express.static("./pages"));

app.get("/", (req, res) => {
  res.sendFile("./home/index.html", { root: "./pages" });
});

app.get("/programari", (req, res) => {
  res.sendFile("./programari/programari.html", { root: "./pages" });
});

app.get("/autentificare", (req, res) => {
  res.sendFile("./autentificare/autentificare.html", { root: "./pages" });
});

app.get("/contact", (req, res) => {
  res.sendFile("./contact/contact.html", { root: "./pages" });
});

app.get("/inregistrare", (req, res) => {
  res.sendFile("./inregistrare/inregistrare.html", { root: "./pages" });
});

app.get("/serviciiVeterinare", (req, res) => {
  res.sendFile("./serviciiVeterinare/servVeter.html", { root: "./pages" });
});

app.post("/autentificare", jsonParser, (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(400).send({
      error: "Emailul si parola sunt obligatorii!",
    });
  }

  //luam arrayul de users
  const users = JSON.parse(fs.readFileSync("./data/users.json"));
  //verificam daca intre users din array exista vreunul cu emailul si parola primite
  //daca da returnam userul respectiv, daca nu 400 bad request
  const result = users.filter(
    (user) => user.email == email && user.password == password
  );
  if (result.length) {
    res.send(result[0]);
  } else {
    res.status(400).send({
      error: "Nu este nimeni inregistrat cu aceste date!",
    });
  }
});

app.post("/inregistrare", jsonParser, (req, res) => {
  const lastName = req.body.lastName;
  const firstName = req.body.firstName;
  const email = req.body.email;
  const password = req.body.password;
  const repeatPassword = req.body.repeatPassword;

  if (!lastName || !firstName || !email || !password || !repeatPassword) {
    res.status(400).send({
      error: "Toate campurile sunt obligatorii!",
    });
  }

  if (password !== repeatPassword) {
    res.status(400).send({
      error: "Parola si Repeta parola trebuie sa fie egale!",
    });
  }

  //luam fisierul de users
  const users = JSON.parse(fs.readFileSync("./data/users.json")); // JSON.parse() converteste textul intr-un obiect JS
  //appenduim userul creat la users existenti
  users.push(req.body);
  //stocam noul array de users inapoi in json
  fs.writeFileSync("./data/users.json", JSON.stringify(users)); //JSON.stringify() converteste intr-un obiect JSON

  console.log(lastName, firstName, email, password, repeatPassword);
  res.send({
    lastName: lastName,
    firstName: firstName,
    email: email,
    password: password,
    repeatPassword: repeatPassword,
  });
});

app.listen(3000, () => {
  console.log("Server is now running at localhost:3000");
});
