const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.get('/:slug', (req, res) => courseController.show(req, res));

module.exports = router;
