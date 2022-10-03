const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the app' });
});

app.listen(PORT, () => {
  console.log(
    `Listening for requests at port ${port}, site live on: http://localhost:${port}`
  );
});
