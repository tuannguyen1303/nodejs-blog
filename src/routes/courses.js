const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.get('/create', (req, res) => courseController.create(req, res));
router.post('/store', (req, res) => courseController.store(req, res));
router.get('/:slug', (req, res) => courseController.show(req, res));

module.exports = router;
