var Event = require('../models/Event');

//fake data function
var fakeData = ["Alex just subscribed to our newsletter 9 minutes ago!",
                "Thanks Michael for posting an awesome 5-star review!",
                "Wow! Julia just purchased two pairs of Nike running shoes on sale!",
                "Get 15% OFF by subscribing to our fashion newsletter!",
                "Redeem this code to save $20 > \"ilovethispromotion\"",
                "Addidas 2018 edition hoodie is the most popular sale item - check it out!"];
                
exports.makeEvent = function (req, res) {
    res.json({message: fakeData[Math.floor(Math.random()*(fakeData.length))]});
};
