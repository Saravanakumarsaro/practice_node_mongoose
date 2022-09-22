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
app.post('/createMongoose', async (req, res) => {
  let temp = await database.register(req.body);
  res.send(temp);
});
app.post('/readMongoose', async (req, res) => {
  let temp = await database.login(req.body);
  res.send(temp);
});
app.post('/updateMongoose', async (req, res) => {
  let temp = await database.update(req.body);
  res.send(temp);
});
app.post('/deleteMongoose', async (req, res) => {
  let temp = await database.delete(req.body);
  res.send(temp);
});

initial();
