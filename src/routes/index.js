const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // News routes
    app.use('/news', newsRouter);

    // Site routes
    app.use('/', siteRouter);
}

module.exports = route;
