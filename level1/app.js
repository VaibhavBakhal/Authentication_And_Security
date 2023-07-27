//jshint esversion:6
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// connecting to mongodb
mongoose.connect("mongodb://127.0.0.1:27017/userDB");
const userSchema = {
  email: String,
  password: String,
};
const User = mongoose.model("User", userSchema);

//routing

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  User.insertMany({ email: req.body.username, password: req.body.password })
    .then(() => {
      res.render("secrets");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/login", (req, res) => {
  User.findOne({ email: req.body.username, password: req.body.password }).then(
    (element) => {
      if (element === null) {
        res.render("login");
      } else {
        res.render("secrets");
      }
    }
  );
});
app.listen(3000, () => {
  console.log("Server started on port 3000.");
});
