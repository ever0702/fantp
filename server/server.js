import 'babel-core/register';
import 'babel-polyfill';
import fs from 'fs';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import {config, connectToDB, configServerRoutes} from './app.config';
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
    // noInfo: true,
    stats: {
        color: true
    }
}));

app.use(webpackHotMiddleware(compiler));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

connectToDB();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let MONGO_URL = 'mongodb://localhost/relay_graph';

(async() => {

    // let db = await MongoClient.connect(MONGO_URL);


    let server = app.listen(3500, () => console.log('Listening on Port 3500'));

    let io = socketio.listen(server);

    configServerRoutes(app, io);

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    })

})();

console.log(MONGO_URL);
