const express = require('express');
const router = express.Router();
const playlist = require('../database/playlists');


router.get('/', (req, res) => {
   playlist.find({},(err, docs) => {
          res.json(docs);
    })
});


module.exports = router;