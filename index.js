const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "/public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(process.env.PORT || 3000, function() {
  console.log("SimpleTube is now listening for connections!");
});
