const Course = require('../models/Course');

class SiteController {
    index(req, res) {
        // Course.find({}, (err, courses) => {
        //     if (!err) {
        //         res.json(courses);
        //         return;
        //     }
        //     res.status(400).json({ error: 'Error' });
        // });

        res.render('home');
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
