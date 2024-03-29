
const express = require('express');
const morgan = require('morgan');
const path = require('path')
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

//connect db
const db = require('./config/db')
db.connect();

//static file
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded());
app.use(express.json());

//HTTP loger
app.use(morgan('combined'))

//template engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


//route init
route(app);

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})