const session = require('express-session');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('expresss-handlesbars');
const hbs = exphbs.create({ helpers: require('./utils/helpers') });
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// create app for express and port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up session object with store, cookie, and secret
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

