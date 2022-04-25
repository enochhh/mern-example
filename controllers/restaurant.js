const Restaurant = require('../models/restaurant');


exports.index = function(req, res, next) {
    // res.render('index', {title: 'restaurant'});
    res.send('restaurant index not implemented yet');
}

exports.restaurant_list = function(req, res, next) {
    res.send('restaurant list not implemented yet');
}

exports.restaurant_detail = function(req, res, next) {
    res.send('restaurant detail not implemented yet');
}

exports.restaurant_create_get = function(req, res, next) {
    res.send('restaurant create get not implemented yet');
}

exports.restaurant_create_post = function(req, res, next) {
    res.send('restaurant create post not implemented yet');
}

exports.restaurant_delete_get = function(req, res, next) {
    res.send('restaurant delete get not implemented yet');
}

exports.restaurant_delete_post = function(req, res, next) {
    res.send("restaurant delete post not implemented yet")
}

exports.restaurant_update_get = function(req, res, next) {
    res.send('restaurant update get not implemented yet');
}

exports.restaurant_update_post = function(req, res, next) {
    res.send('restaurant update post not implemented yet');
}