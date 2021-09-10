const mongoose = require('mongoose');
const schema = mongoose.Schema;


const playlistSchema = new schema(
    {
        title: String,
        owner:String,
        ownerId: schema.Types.ObjectId,
        coverPhoto: String,
        tracks:[schema.Types.ObjectId],
        explict:Boolean,
        genres: [String],
        dateAdded: Date
    }
)

const playlist = mongoose.model('Playlist', playlistSchema);

module.exports = playlist;