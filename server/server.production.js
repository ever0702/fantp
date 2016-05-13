import 'babel-core/register';
import 'babel-polyfill';
import path from 'path';
import express from 'express';
import {config, connectToDB, configServer, configServerRoutes, port} from './app.config';
import socketio from 'socket.io';


let app = express();

configServer(app);

(async() => {

	await connectToDB();

    let server = app.listen(port, () => console.log('Listening on Port ', port));

    let io = socketio.listen(server);

    configServerRoutes(app, io);

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public', 'index.html'));
    })

})();

console.log('This is the production server file');

console.log(config.database);
