const mongoose = require('mongoose');
const schema = mongoose.Schema;

const albumSchema = new schema({
    title: String,
    artiste:String,
    coverPhoto:String,
    artisteId:String,
    tracks:[String],
    explicit:Boolean,
    genres:[String],
    dateAdded: Date
})



const albums = mongoose.model('Album',albumSchema);


module.exports = albums;