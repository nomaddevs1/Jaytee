const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  if (username) {
    res.send([username]);
  }
  res.send({ message: "Something went wrong" });
});
app.listen(5000, () => {
  console.log("Server started");
});
11;
