import  mongoose from 'mongoose';
import  express from 'express';
import  session from 'express-session';

import todoRouter from './todo/todo.router';

let config = {
	secret: 'TheBestIsYetToBe',
	tokenExpiresInMinutes: 20,
	// database: 'mongodb://localhost:27017/relay_graph'
	database: 'mongodb://root:1234@ds015780.mlab.com:15780/relay_graph'
};


function connectToDB() {
	mongoose.connect(config.database);
}

function configServerRoutes(app, io) {

	app.use(session({ secret: 'TheBestIsYetToBe', resave: false, saveUninitialized: false }));

	// app.use('/', authRouter);
	app.use('/todos', todoRouter(io));
	// app.use('/api/users', userRouter(io));
	// app.use('/api/votes', voteRouter(io));
	// app.use('/api/posts', postRouter(io));
    // app.use('/api/social', socialRouter(io));

}


export {
config,
connectToDB,
// checkCrendential,
configServerRoutes
};
