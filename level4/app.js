//jshint esversion:6
require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// connecting to mongodb
mongoose.connect("mongodb://127.0.0.1:27017/userDB");
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

var secret = process.env.SECRET;
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
  bcrypt.hash(req.body.password, saltRounds).then((hash) => {
    const newUser = new User({
      email: req.body.username,
      password: hash,
    });

    newUser.save().then(() => {
      res.render("secrets");
    });
  });
});

app.post("/login", (req, res) => {
  User.findOne({ email: req.body.username }).then((element) => {
    if (element) {
      bcrypt.compare(req.body.password, element.password).then((result) => {
        if (result === true) {
          res.render("secrets");
        } else {
          res.render("login");
        }
      });
    } else {
      res.render("login");
    }
  });
});
app.listen(3000, () => {
  console.log("Server started on port 3000.");
});
