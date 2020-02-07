const mongoose = require('mongoose');
const { Schema } = mongoose;
// similar to const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0}
});

mongoose.model('users', userSchema);
// tell mongoose we want to create a new collection called users