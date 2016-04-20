import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

var webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpackDevConfig = require('./webpack.config.js');


let nextBookId = 3;
let books = [{
    id: 1,
    name: 'C++'
}, {
    id: 2,
    name: 'JAVA'
}];

let todos = [{
    id: 1,
    text: 'first',
    completed: false
}, {
    id: 2,
    text: 'second tod',
    completed: true
}];

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

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let MONGO_URL = 'mongodb://localhost/relay_graph';

(async() => {

    // let db = await MongoClient.connect(MONGO_URL);


    app.listen(3500, () => console.log('Listening on Port 3500'));

    app.get('/coms', (req, res) => {
        res.send(['Google', 'facebook', 'amazon']);
    });

    app.get('/books', (req, res) => {
        res.send(books);
    })

    app.post('/books', (req, res) => {
        let { bookName } = req.body;
        const newBook = {
            id: nextBookId++,
            name: bookName
        };
        books.push(newBook);
        res.send(newBook);
    });

    app.get('/todos', (req, res) => {
        res.send(todos);
    });

    app.post('/todos', (req, res) => {
        let {text} = req.body;
        const newTodo = {
            id: nextBookId ++,
            text,
            completed: false
        };

        res.send(newTodo);
    });

    app.put('/todos/:id', (req, res) => {
        let {id} = req.params;
        let {completed} = req.body;

        todos = todos.map(td => ({
            ...td,
            completed
        }));

        res.send({
            success: true
        });

    });

})();

console.log(MONGO_URL);
