const express = require('express');
const app = express();

const cors = require('cors');

const trials = {
  1: {
    shape: 'square',
    color: 'red',
    valence: 'positive',
    rewards: true
  },
  2: {
    shape: 'triangle',
    color: 'blue',
    valence: 'negative',
    rewards: false
  },
  3: {
    shape: 'circle',
    color: 'green',
    valence: 'neutral',
    rewards: true
  },
  4: {
    shape: 'circle',
    color: 'blue',
    valence: 'neutral',
    rewards: true
  },
  5: {
    shape: 'circle',
    color: 'red',
    valence: 'negative',
    rewards: false
  },
  6: {
    shape: 'triangle',
    color: 'green',
    valence: 'neutral',
    rewards: true
  },
  7: {
    shape: 'diamond',
    color: 'blue',
    valence: 'positive',
    rewards: false
  },
  8: {
    shape: 'square',
    color: 'green',
    valence: 'neutral',
    rewards: false
  },
  9: {
    shape: 'diamond',
    color: 'blue',
    valence: 'negative',
    rewards: true
  },
  10: {
    shape: 'circle',
    color: 'green',
    valence: 'neutral',
    rewards: false
  },
}

app.use(cors({ origin: 'http://localhost:3000'}));

app.get('/api', (req, res) => {
  res.json(trials)
})

app.listen(8080, () => console.log('Server started on port 8080'))