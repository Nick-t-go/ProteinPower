/**
 * Created by uzer-y on 10/4/15.
 */
var express = require("express"); //server
var model = require("../models.items"); //data
// create home route

//create route for get requests of items

//create route for post cart items

//create route for returning full cart

app.post('/store', function(req, res, next) {
    console.log(req.body)
    FlashCardModel.create(req.body)
        .then(function(card) {
            res.json(card)
        })
        .then(null, next)
})

app.get('/store', function (req, res, next) {

    var modelParams = {};

    if (req.query.category) {
        modelParams.category = req.query.category;
    }

    ProductModel.find(modelParams, function (err, cards) {
        if (err) return next(err);
        setTimeout(function () {
            res.send(cards);
        }, Math.random() * 1000);
    });

});