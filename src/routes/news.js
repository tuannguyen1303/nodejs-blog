const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');

router.get('/:slug', (req, res) => newsController.show(req, res));

router.get('/', (req, res) => {
    newsController.index(req, res);
});

module.exports = router;
