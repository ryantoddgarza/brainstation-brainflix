const express = require('express');
const app = express();
const cors = require('cors');

const videoData = require('./routes/videoData');

app.use(cors());

app.use('/', videoData);
app.use('/videos', videoData);
app.use('/foo', videoData);
app.use('/bar', videoData);

app.listen(8080, () => console.info('Server is running on port 8080'));

