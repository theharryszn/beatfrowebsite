const mongoose = require('mongoose');
const schema = mongoose.Schema;


const lyricsSchema = new schema(
    {
        _id: String,
        body: String,
        dateAdded: Date
    }
  )
  
const lyric = mongoose.model('Lyrics', lyricsSchema);


module.exports = lyric;