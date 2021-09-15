const express = require("express");

const app = express();

const users = [{ name: "hicham", email: "me@gmail.com" }];

app.get("/", (req, res) => {
  res.json(users);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("listning on port 3000");
});
