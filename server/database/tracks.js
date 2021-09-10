const mongoose = require('mongoose');
const schema = mongoose.Schema;

const trackSchema = new schema(
    {
        title: String,
        artiste: String,
        coverPhoto:String,
        song:String,
        artisteId:String,
        genres:[String],
        albumName:String,
        explicit: Boolean,
        lyricsApiId:schema.Types.ObjectId,
        dateAdded:Date
    }
  )
  
const track = mongoose.model('Track', trackSchema);


module.exports = track;