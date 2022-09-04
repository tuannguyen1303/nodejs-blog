const path = require('path');
const express = require('express');
const app = express();
const port = process.env.port || 3000;
const morgan = require('morgan');
const { create } = require('express-handlebars');
const route = require('./routes/index');
const db = require('./config/db/index');

// connect db
db.connect();

// configuration middleware built-in --begin
app.use(morgan('short'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

const hbs = create({
    extname: '.hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));
// configuration middleware built-in --end

// Routes
route(app);

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
