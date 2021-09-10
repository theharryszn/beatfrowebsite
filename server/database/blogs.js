const mongoose = require('mongoose');
const schema = mongoose.Schema;

const blogSchema = new schema(
    {
        body:String,
        images:[String],
        userId: String,
        userName: String,
        thumbnail: String,
        dateAdded:Date
    }
  )
  
const blog = mongoose.model('blog', blogSchema);


module.exports = blog;