const express = require('express');
const router = express.Router();

const videos = require('./videos')

router.get('/videos', (req, res) => {
  res.json(videos);
})

router.get('/videos/:id', (req, res) => {
  const id = req.params.id;
  videos.forEach((video) => {
    if (video.id === id) {
      res.json(video);
      return;
    }
  });
})

module.exports = router;

