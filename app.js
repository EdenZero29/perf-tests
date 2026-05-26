const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World', status: 'ok' });
});

app.listen(3000, () => {
  console.log('Application démarrée sur http://localhost:3000');
});