const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// Middleware

app.use(cors())
app.use(express.json())

const users = [
  { id: 1, name: "Aija", email: "aija@gmail.com" },
  { id: 2, name: "Bipasa", email: "bipas@gmail.com" },
  { id: 3, name: "Sobuj", email: "sobuj@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("User Management Server is running");
});





app.get("/users", (req, res) => {
  res.send(users);
});


// for sent server


app.post('/users',(req, res)=>{

    console.log('post api heating');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
