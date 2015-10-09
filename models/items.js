/**
 * Created by uzer-y on 10/4/15.
 */
var mongoose = require('mongoose');
var chalk = require('chalk')

mongoose.connect("mongodb://localhost/proteinStore", function(err){
    if(err)
        return console.log(chalk.red(err));

    console.log(chalk.green("connect to database " + mongoose.connection.name));
});

var ItemSchema = new mongoose.Schema(
    {
        name: String,
        price: Number,
        category: [String],
        available: Boolean,
        weights: String,
        imageURL: String

    });
var Item = mongoose.model('item', ItemSchema);



var PlaceSchema = mongoose.Schema(
    {
        name: String,
        address: String,
        city: String,
        state: String,
        phone: String,
        location:[Number]
    }
);

var Place = mongoose.model('place', PlaceSchema);

var OrderSchema = mongoose.Schema(
    {
        num_id: String,
        status: String,
        ship: [PlaceSchema],
        bill: [PlaceSchema],
        items:["String"],
        total: Number
    }
);

var Order = mongoose.model('order', OrderSchema);


var UserSchema = new mongoose.Schema(
    {
        username: String,
        name_fist: String,
        name_last: String,
        email: String,
        orders: [ String ]

    });
var User = mongoose.model('user', UserSchema);


module.exports = {
    Item: Item,
    User: User,
    Place: Place,
    Order: Order
};