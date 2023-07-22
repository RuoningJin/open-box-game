const express = require('express');
const app = express();
const fs = require("fs");

const cors = require('cors');

app.use(cors({ origin: 'http://localhost:3000'}));

app.get('/api', (req, res) => {
  res.json(trials)
})

app.listen(8080, () => console.log('Server started on port 8080'))