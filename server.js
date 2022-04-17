const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const jsonParser = bodyParser.json();

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
    console.log("aici");
    res.status(400).send({
      error: "Email or Password are required!",
    });
  }

  console.log(email, password);
  res.send({ email: email, password: password });
});

app.listen(3000, () => {
  console.log("Server is now running at localhost:3000");
});
