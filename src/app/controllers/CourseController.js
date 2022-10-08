const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                course = mongooseToObject(course);
                res.render('courses/show', { course });
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render('courses/create');
    }

    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.video_id}/sddefault.jpg`;
        const newCourse = new Course(formData);
        newCourse
            .save(newCourse)
            .then(() => {
                res.redirect('/');
            })
            .catch((error) => {});
    }
}

module.exports = new CourseController();
