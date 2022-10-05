const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app) {
    // News routes
    app.use('/news', newsRouter);

    // Site routes
    app.use('/', siteRouter);

    // Courses routes
    app.use('/courses', coursesRouter);
}

module.exports = route;
