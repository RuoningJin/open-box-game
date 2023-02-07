const express = require('express');
const app = express();

const cors = require('cors');

const trials = {
  1: {
    shape: 'square',
    color: 'red',
    valence: 'positive',
    rewards: 3
  },
  2: {
    shape: 'triangle',
    color: 'blue',
    valence: 'negative',
    rewards: 2
  },
  3: {
    shape: 'circle',
    color: 'green',
    valence: 'positive',
    rewards: 0
  },
}

app.use(cors({ origin: 'http://localhost:3000'}));

app.get('/api', (req, res) => {
  res.json(trials)
})

app.listen(8080, () => console.log('Server started on port 8080'))