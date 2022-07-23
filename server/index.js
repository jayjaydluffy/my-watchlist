const express = require("express");
const db = require("./db");
const watchlist = require("./watchlist");

const PORT = process.env.PORT || 3001;

db.connectToServer();

const app = express();
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "RTK Demo API" });
});

app.use("/api/watchlist", watchlist);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
