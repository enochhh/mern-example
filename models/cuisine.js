const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CuisineSchema = new Schema(
    {
        name: {type: String, required: true, minlength: 1}
    }
);

CuisineSchema.virtual('url').get(function() {
    return '/home/cuisine/' + this._id;
});

module.exports = mongoose.model('Cuisine', CuisineSchema);