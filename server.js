const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("public"));

const users = [{ name: "hicham", email: "me@gmail.com" }];

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/about", express.static(path.join(__dirname, "public")));
app.get("/api", (req, res) => {
  res.json(users);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("listning on port 3000");
});
