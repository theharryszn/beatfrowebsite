const mongoose = require('mongoose');
const schema = mongoose.Schema;


const actionsSchema = new schema(
    {
       type:String,
       data:Object,
       groupId: String,
       dateAdded: Date
    }
)


const actions = mongoose.model('actions', actionsSchema);

module.exports = actions;