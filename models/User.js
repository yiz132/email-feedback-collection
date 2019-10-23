const mongoose = require('mongoose');
const { Schema } = mongoose;
// similar to const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);
// tell mongoose we want to create a new collection called users