// const Joi = require("joi");
// const shortid = require("shortid");

// const passwordSchema = Joi.string().alphanum().min(3).max(30);
// console.log(passwordSchema.validate("passw"));

// console.log(shortid.generate());

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use("*", () => console.log("Был запрос от браузера"));

app.listen(3000, () => console.log("Web-server 3000"));
