const express = require('express');
const router = express.Router();
const uniqid = require('uniqid');
const videos = require('./videos');

router.get('/videos', (req, res) => {
  res.json(videos);
})

router.post('/videos', (req, res) => {
  const { title, image, description } = req.body;

  videos.push(
    {
      id: uniqid(),
      title,
      channel: "Mohan Muruge",
      image,
      description,
      views: "0",
      likes: "0",
      duration: "4:12",
      timestamp: new Date(),
      comments: [],
    }
  );

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

router.post('/videos/:id', (req, res) => {
  const id = req.params.id;
  const { comment } = req.body;

  let currentVideo;
  videos.forEach((video) => {
    if (video.id === id) {
      currentVideo = video;
      return;
    }
  });

  currentVideo.comments.push(
    {
      name: "Mohan Muruge",
      comment,
      id: uniqid(),
      likes: "0",
      timestamp: Date.now(),
    }
  );

  res.json(currentVideo.comments)
})

module.exports = router;

