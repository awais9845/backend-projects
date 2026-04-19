const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Helllo world!");
});
const PORT = 9000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
