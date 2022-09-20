const schema = require('./schema');
const mangoose = require('mongoose');
const { default: mongoose } = require('mongoose');

const todo = {};

todo.initialConnection = () => {
  return new Promise((resolve) => {
    mongoose.connect(`mongodb://localhost:27017`);
    let temp = mongoose.connection;
    temp.on('error', (e) => {
      console.log(e);
      resolve(false);
    });
    temp.on('open', () => {
      resolve(true);
    });
  });
};

module.exports = todo;