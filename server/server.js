import 'babel-core/register';
import 'babel-polyfill';
import '../isomorphic/utils/objectPolyfill';
import path from 'path';
import express from 'express';
import {config, configServer, connectToDB, configServerRoutes, port} from './app.config';
import socketio from 'socket.io';

var webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpackDevConfig = require('../webpack.config.js');


let app = express();

let compiler = webpack(webpackDevConfig);

app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: {
        color: true
    }
}));

app.use(webpackHotMiddleware(compiler));

configServer(app);

console.log('dirname ', __dirname);

(async() => {

    await connectToDB();

    let server = app.listen(port, () => console.log(`Listening on Port ${port}`));

    let io = socketio.listen(server);

    configServerRoutes(app, io);

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public', 'index.html'));
    })

})();

console.log(config.database);
