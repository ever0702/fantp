import mongoose from 'mongoose';
import express from 'express';
import session from 'express-session';
import path from 'path';
import bodyParser from 'body-parser';

import checkToken from './middlewares/checkToken';

import authRouter from './auth/auth.router';
import todoRouter from './todo/todo.router';
import stepNodeRouter from './stepNode/stepNode.router';
import planRouter from './plan/plan.router';

const port = 3500;


const config = {
    secret: 'TheBestIsYetToBe',
    tokenExpiresInMinutes: 20,
    database: 'mongodb://localhost:27017/relay_graph'
        // database: 'mongodb://root:1234@ds015780.mlab.com:15780/relay_graph'
};

const connectToDB = () => mongoose.connect(config.database);

const configServer = app => {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.use(express.static('public'));

    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());
};

const configServerRoutes = (app, io) => {
	
    app.use(session({
        secret: 'TheBestIsYetToBe',
        resave: false,
        saveUninitialized: false
    }));

    app.use('/', authRouter(io));
    app.use('/todos', todoRouter(io));
    app.use('/stepNodes', stepNodeRouter(io));
    app.use('/plans', planRouter(io));
}


export {
    config,
    connectToDB,
    configServer,
    configServerRoutes,
    port
};
