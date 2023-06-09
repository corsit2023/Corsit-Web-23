const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(port, () =>
  console.log(`Server is up and running on the port ${port}`)
);
