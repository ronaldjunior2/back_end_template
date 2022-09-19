import express from "express";

const app = express();

const port = process.env.PORT != null || 4000;
app.get("/", (req, res) => {
  res.send("<h1>Primeiro deploy</h1>");
});

app.listen(port, () => {});
