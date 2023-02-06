const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors({ origin: 'http://localhost:3000'}));

app.get('/api', (req, res) => {
  res.json({'users': ['userone']})
})

app.listen(8080, () => console.log('Server started on port 8080'))