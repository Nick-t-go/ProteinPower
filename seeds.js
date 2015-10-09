/**
 * Created by uzer-y on 10/4/15.
 */
var Promise = require('bluebird');
var mongoose = require('mongoose');
var models = require('./models/items');
var Place = models.Place;


var data =
    {
        Item:[
            {
                name: "Pea and Rice Blend 5 lbs",
                price: 45,
                category: ['Protein', 'Vegetarian'],
                available: true,
                weight: '5 lbs',
                imageURL: 'img/protein-blend.jpg'
            },
            {
                name: "Pea and Rice Blend 2 lbs",
                price: 25,
                category: ['Protein', 'Vegetarian'],
                available: true,
                weight: '2 lbs',
                imageURL: 'img/protein-blend.jpg'
            },
            {
                name: "Mushroom Energy 1 lb",
                price: 20,
                category: ['Sports Enhancer', 'Vegetarian'],
                available: true,
                weight: '1 lbs',
                imageURL: 'img/protein-blend.jpg'
            },
            {
                name: "Mushroom Energy 2 lbs",
                price: 40,
                category: ['Sports Enhancer', 'Vegetarian'],
                available: true,
                weight: '2 lbs',
                imageURL: 'img/protein-blend.jpg'
            }
        ],

        Order:[
            {
                num_id: 'A1',
                status: 'Delivered',
                ship:[ new Place({
                    address:"52 Mulberry St",
                    city:"New York",
                    state:"NY",
                    phone:"123-456-7890",
                    location:[40.715317, -73.999542]
                })],
                bill: [ new Place({
                    address:"52 Mulberry St",
                    city:"New York",
                    state:"NY",
                    phone:"123-456-7890",
                    location:[40.715317, -73.999542]
                })],
                items: ["Mushroom Energy 2 lbs", "Mushroom Energy 1 lb" ],
                total: 45
            },
            {
                num_id: 'B2',
                status: 'Pending',
                ship: [new Place({
                    address: "75 Wall St",
                    city: "New York",
                    state: "NY",
                    phone: "123-456-7890",
                    location: [40.705137, -74.007624]
                })] ,
                bill: [new Place(
                    {
                        address:"75 Wall St",
                        city:"New York",
                        state:"NY",
                        phone:"123-456-7890",
                        location:[40.705137, -74.007624]
                    })],
                items: ["Mushroom Energy 5 lbs", "Mushroom Energy 2 lb" ],
                total: 65
            }
        ],
        User:[
            {
                username: 'Pod1',
                name_fist: 'Bob',
                name_last: 'Dole',
                email: 'bobdole@bobedole.com',
                orders: ['A1']
            },
            {
                username: 'Pod2',
                name_fist: 'Bo',
                name_last: 'Dallas',
                email: 'boliever@bolieve.com',
                orders: ['B2']
            }
        ]
    };



mongoose.connection.on('open', function() {
    mongoose.connection.db.dropDatabase(function() {

        console.log("Dropped old data, now inserting data");
        Promise.map(Object.keys(data), function(modelName) {
            return Promise.map(data[modelName], function(item) {
                console.log(modelName);
                return models[modelName].create(item);
            });
        }).then(function() {
            console.log("Finished inserting data");
        }, console.log).then(function() {
            mongoose.connection.close()
        });

    });
});
