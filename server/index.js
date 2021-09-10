const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// init express
const app = express();

mongoose.connect('mongodb://localhost:27017/beatfro-mongo', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);


let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
  }
  app.use(allowCrossDomain);
  
  app.use(bodyParser.json());


// apis
app.use('/api/genres', require('./api/genres'));
app.use('/api/playlists', require('./api/playlists'));
app.use('/api/users', require('./api/users'));
app.use('/api/blogs', require('./api/blogs'));
app.use('/api/lyrics', require('./api/lyrics'));
app.use('/api/artistes', require('./api/artistes'));
app.use('/api/tracks', require('./api/tracks'));
app.use('/api/albums', require('./api/albums'));


//actions api
app.use('/api/actions', require('./api/actions/actions'));




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Beatfro server has started at ${PORT}`));