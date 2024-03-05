const express = require("express");
// create the server/app
const app = express();
// define server routes
// ejs

app.get("/", (req, res) => {
  // database logic
  res.render("home.ejs", { uname: "knfdklwnfj" });
});
app.get("/login", (req, res) => {
  res.render("login.ejs");
});
// start/run your app
app.listen(8003, () => {
  console.log("app is running on port 8003");
});
// explicit and implicit return with arrow functions ---
