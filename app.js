var express = require('express');
var promise = require('bluebird');
var chalk = require('chalk');
var swig = require('swig');

//var route = require("./routes/key");
var models = require('./models/items');
var Items = models.Item;


var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan')

var app = express();

swig.setDefaults({ cache: false });
app.engine('html', swig.renderFile);
app.set('view engine', 'html');


app.use(logger('dev'));


app.listen(3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.use(express.static(path.join(__dirname , 'public')))
//app.use('/bower_components',  express.static(__dirname + '/bower_components'));


/* GET home page. */
app.get('/', function(req, res) {
    res.render('index');
});

app.get('/item/:id', function (req, res) {
    Items.findById(req.params.id, function (err, item) {
        setTimeout(function () {
            console.log(req.params.id);
            res.send(item);
        }, Math.random() * 1000);
    });
});


app.get('/item', function (req, res, next) {
    var modelParams = {};


    if (req.query.category) {

        modelParams.category = req.query.category;
    }

    Items.find(modelParams, function (err, items) {
        if (err) return next(err);
        console.log(items);
        setTimeout(function () {
            res.send(items);
        }, Math.random() * 1000);
    });

});

//app.get('/item/:id', function(req, res, next) {
//    var modelParams = {};
//
//    if (req.params.id) {
//        modelParams._id = req.query.id
//    }
//    Items.findOne(modelParams, function (err, items) {
//        if (err) return next(err);
//        console.log(items);
//        setTimeout(function () {
//            res.send(items);
//        }, Math.random() * 1000);
//    });
//});


