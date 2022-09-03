const path = require("path");
const express = require("express");
const app = express();
const port = process.env.port || 3000;
const morgan = require("morgan");
const { create } = require("express-handlebars");

app.use(morgan("short"));

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const hbs = create({
  extname: ".hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.post("/search", (req, res) => {
  console.log(req.body);
  res.send("Submit successful");
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
