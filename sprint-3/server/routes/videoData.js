const express = require('express');
const router = express.Router();

const data = require('./data')

router.get('/videos', (req, res) => {
  res.json(data);
})

router.get('/foo', (req, res) => {
  res.send('foo');
})

router.get('/bar', (req, res) => {
  res.send('bar');
})

module.exports = router;

