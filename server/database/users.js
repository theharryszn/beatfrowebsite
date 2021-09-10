const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema(
    {
        _id: String,
        username: String,
        isArtiste: Boolean,
        email: String,
        isVerified:Boolean,
        coverPhoto: String,
        followers:Number,
        following:Number,
        isPremium: Boolean,
        dateAdded: Date
    }
  )
  
const user = mongoose.model('User', userSchema);


module.exports = user;