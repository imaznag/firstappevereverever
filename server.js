const express = require("express");

const app = express();

const users = [{ name: "hicham", email: "me@gmail.com" }];

app.get("/", (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log("listning on port 3000");
});
