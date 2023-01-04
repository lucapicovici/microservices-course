const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', (req, res) => {
  const event = req.body;

  axios.post('http://localhost:4000/events', event);  // Posts service
  axios.post('http://localhost:4001/events', event);  // Comments
  axios.post('http://localhost:4002/events', event);  // Query
  axios.post('http://localhost:4003/events', event);  // Moderation

  res.send({ status: 'OK' });
});

app.listen(4005, () => {
  console.log('Event bus listening on port 4005');
});