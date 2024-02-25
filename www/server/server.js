const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (_, res) => {
  res.send('Server node is running');
});

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});