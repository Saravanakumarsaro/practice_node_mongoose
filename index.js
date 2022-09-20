const express = require('express');
const database = require('./database');
const app = express();
const port = 2209;
app.use(express.json());

const initial = async () => {
  let temp = await database.initialConnection();
  if (temp) {
    app.listen(port, () => {
      console.log(`This Application is listens to http://localhost:${port}`);
    });
  } else {
    console.log('not Connected');
  }
};

initial();
