const express = require('express');
const router = express.Router();

const restaurant_controller = require('../controllers/restaurant');
const cuisine_controller = require('../controllers/cuisine');
const address_controller = require('../controllers/address');

// RESTAURANT ROUTES // 
router.get('/', restaurant_controller.index);

router.get('/restaurant/create', restaurant_controller.restaurant_create_get);

router.post('/restaurant/create', restaurant_controller.restaurant_create_post);

router.get('/restaurant/:id/delete', restaurant_controller.restaurant_delete_get);

router.post('/restaurant/:id/delete', restaurant_controller.restaurant_delete_post);

router.get('/restaurant/:id/update', restaurant_controller.restaurant_update_get);

router.post('/restaurant/:id/update', restaurant_controller.restaurant_update_post);

router.get('/restaurant/:id', restaurant_controller.restaurant_detail);

router.get('/restaurants', restaurant_controller.restaurant_list);

// CUISINE ROUTES // 
router.get('/cuisine/:id', cuisine_controller.cuisine_detail);

router.get('/cuisines', cuisine_controller.cuisine_list);

// ADDRESS ROUTES //
router.get('/address/:id', address_controller.address_detail);

router.get('/addresses', address_controller.address_list);


module.exports = router;