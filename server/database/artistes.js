const mongoose = require('mongoose');
const schema = mongoose.Schema;


const artisteSchema = new schema(
    {
        _id:String,
        stageName: String,
        coverPhoto:String,
        isVerified: Boolean,
        dateAdded: Date
    }
)


const artiste = mongoose.model('Artiste', artisteSchema);

module.exports = artiste;