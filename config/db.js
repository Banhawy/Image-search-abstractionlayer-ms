const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
exports.db = mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true});