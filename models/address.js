const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AddressSchema = new Schema(
    {
        street: {type: String, required: true},
        city: {type: String, required: true},
        zip: {type: String, required: true}
    }
)

AddressSchema.virtual('url').get(function() {
    return '/home/address/' + this._id;
});

module.exports = mongoose.model('Address', AddressSchema);