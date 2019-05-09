'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: false
    },
    avatar:{
        type: String,
        required: false
    },

    friends: [{ type: Schema.Types.ObjectId, ref: 'User'}]
});



mongoose.model('User', UserSchema);
