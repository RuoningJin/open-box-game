const express = require('express');
const app = express();

const cors = require('cors');

const trials = {
  1: {
    shape: 'square',
    color: 'red',
    valence: 'positive',
    rewards: 'positive'
  },
  2: {
    shape: 'triangle',
    color: 'blue',
    valence: 'neutral',
    rewards: 'negative'
  },
  3: {
    shape: 'circle',
    color: 'green',
    valence: 'negative',
    rewards: ''
  },
  4: {
    shape: 'circle',
    color: 'blue',
    valence: 'neutral',
    rewards: 'positive'
  },
  5: {
    shape: 'circle',
    color: 'red',
    valence: 'positive',
    rewards: ''
  },
  6: {
    shape: 'triangle',
    color: 'green',
    valence: 'neutral',
    rewards: 'negative'
  },
  7: {
    shape: 'diamond',
    color: 'blue',
    valence: 'negative',
    rewards: ''
  },
  8: {
    shape: 'square',
    color: 'green',
    valence: 'neutral',
    rewards: ''
  },
  9: {
    shape: 'diamond',
    color: 'blue',
    valence: 'negative',
    rewards: 'negative'
  },
  10: {
    shape: 'circle',
    color: 'green',
    valence: 'negative',
    rewards: ''
  },
}

app.use(cors({ origin: 'http://localhost:3000'}));

app.get('/api', (req, res) => {
  res.json(trials)
})

app.listen(8080, () => console.log('Server started on port 8080'))