const Course = require('../models/Course');

class SiteController {
    index(req, res, next) {
        // Course.find({}, (err, courses) => {
        //     if (!err) {
        //         res.json(courses);
        //         return;
        //     }
        //     res.status(400).json({ error: 'Error' });
        // });

        Course.find({})
            .then((courses) => res.render('home', { courses }))
            .catch(next);
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
