const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static(path.join(__dirname, 'build')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/home', 'index.html'));
});

// Other routes...

app.post("/autentificare", jsonParser, (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(400).send({
      error: "Emailul si parola sunt obligatorii!",
    });
  }

  const users = JSON.parse(fs.readFileSync("./data/users.json"));
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
  const { lastName, firstName, email, password, repeatPassword } = req.body;

  if (!lastName || !firstName || !email || !password || !repeatPassword) {
    return res.status(400).send({
      error: "Toate campurile sunt obligatorii!",
    });
  }

  if (password !== repeatPassword) {
    return res.status(400).send({
      error: "Parola si Repeta parola trebuie sa fie egale!",
    });
  }

  const users = JSON.parse(fs.readFileSync("./data/users.json"));
  users.push(req.body);
  fs.writeFileSync("./data/users.json", JSON.stringify(users));

  res.send({
    lastName,
    firstName,
    email,
    password,
    repeatPassword,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
