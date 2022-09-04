const express = require("express");
const router = express.Router();
const newsController = require("../app/controllers/NewsController");

router.use("/:slug", (req, res) => newsController.show(req, res));

router.use("/", (req, res) => {
  newsController.index(req, res);
});

module.exports = router;
