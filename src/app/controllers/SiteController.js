const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    index(req, res, next) {
        // Course.find({}, (err, courses) => {
        //     if (!err) {
        //         res.json(courses);
        //         return;
        //     }
        //     res.status(400).json({ error: 'Error' });
        // }); --call back

        Course.find({})
            .then((courses) => {
                courses = multipleMongooseToObject(courses);
                res.render('home', { courses });
            })
            .catch(next);
        // --promise
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
