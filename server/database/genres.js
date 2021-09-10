const mongoose = require('mongoose');
const schema = mongoose.Schema;



const genreSchema = new schema(
    {
        title: String,
        gradientCode:String
    }
  )
  
const genre = mongoose.model('Genre', genreSchema);


module.exports = genre;