const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RestaurantSchema = new Schema(
    {
        name: {type: String, required: true},
        cuisine: {type: Schema.Types.ObjectId, ref: 'Cuisine', required: true}, 
        address: {type: Schema.Types.ObjectId, ref: 'Address', required: true},
        phone: {type: String, required: true},
        link: { type: String, required: true}
    }
);

RestaurantSchema.virtual('url').get(function() {
    return '/home/restaurant/' + this._id;
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);