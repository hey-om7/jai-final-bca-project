const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    addressLine: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
