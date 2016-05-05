import  mongoose from 'mongoose';
import  express from 'express';
import  session from 'express-session';

import checkToken from './middlewares/checkToken';

import authRouter from './auth/auth.router';
import todoRouter from './todo/todo.router';


const config = {
	secret: 'TheBestIsYetToBe',
	tokenExpiresInMinutes: 20,
	// database: 'mongodb://localhost:27017/relay_graph'
	database: 'mongodb://root:1234@ds015780.mlab.com:15780/relay_graph'
};

const connectToDB = () => mongoose.connect(config.database);

const configServerRoutes = (app, io) => {
	app.use(session({ secret: 'TheBestIsYetToBe', resave: false, saveUninitialized: false }));
	app.use('/', authRouter(io));

	app.use('/todos', todoRouter(io));
}


export {
	config,
	connectToDB,
	configServerRoutes
};
