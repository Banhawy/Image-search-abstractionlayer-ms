//Setting up a schema for mongodb
const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    term:  String,
    when: { 
        type: Date,
        default: Date.now
     }
});