const express = require('express');
require('dotenv').config();

const config = require('config');
const app = express();
const port = config.get('app.port') || 3000;

app.get('/', (req, res) => {
  const message = 'Hello World!!!!';
  res.send(`${message}`);
});

app.listen(port, () => {
  const env = config.get('app.env') || 'null';
  console.log(`Application is running on ${port} port.`);
  console.log(`NODE_ENV value is ${process.env.NODE_ENV}`);
  console.log(`Application environment = ${env}`);
});
