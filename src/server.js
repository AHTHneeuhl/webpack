const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const path = require("path");
const fs = require("fs");

app.get("/hello-world", (req, res) => {
  const pathToHtmlFile = path.join(__dirname, "../dist/helloWorld.html");
  res.sendFile(pathToHtmlFile);
});

app.get("/kiwi", (req, res) => {
  const pathToHtmlFile = path.join(__dirname, "../dist/kiwi.html");
  res.sendFile(pathToHtmlFile);
});

app.use("/static", express.static(path.join(__dirname, "../dist")));

app.listen(port, () => {
  console.log(`Server is ready at http://localhost:${port}`);
});
