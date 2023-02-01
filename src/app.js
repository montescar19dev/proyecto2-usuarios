const express = require('express')
const app = express()


app.use(express.json());

const usersDB = [
  {
    id: 1,
    firstName: "Sahid",
    lastName: "Kick",
    email: "sahid.kick@academlo.com",
    password: "root",
    age: 22,
  },
];

let baseId = 2;

//* data del cliente

app.get("/", (req, res) => {
  res.json({
    message: "Server Ok!",
  });
});

//TODO Mostrar todos los usuarios

app.get("/users", (req, res) => {
  res.json(usersDB);
});

//TODO Mostrar un usuario dependiendo del ID

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const data = usersDB.find((user) => id === user.id);

  if (data) {
    res.json(data);
  } else {
    res.status(404).json({
      message: "Invalid ID",
    });
  }
});

//TODO Crear un usuario nuevo

app.post("/users", (req, res) => {
  const data = req.body;

  const newUser = {
    id: ++baseId,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    age: data.age,
  };

  usersDB.push(newUser);
  res.status(201).json(newUser);
});

app.listen(9000, () => {
  console.log("Server started at port 9000");
});


module.exports = app
