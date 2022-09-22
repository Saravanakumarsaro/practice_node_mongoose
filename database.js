const schema = require('./schema');
const mongoose = require('mongoose');

const todo = {};

todo.initialConnection = () => {
  return new Promise((resolve) => {
    mongoose.connect(`mongodb://localhost:27017/userdetails`);
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

todo.register = (data) => {
  return new Promise((resolve) => {
    let temp = schema.registerSchema.create(data, (err, res) => {
      if (err) {
        resolve('Not insterted');
      } else {
        resolve(res);
      }
    });
  });
};

todo.login = (data) => {
  return new Promise((resolve) => {
    // let temp = schema.loginSchema.find(data, (err, res) => {
    // let temp = schema.loginSchema.findOne(data, (err, res) => {
    // let temp = schema.loginSchema.findOne({ _id: data.id }, (err, res) => {
    let temp = schema.loginSchema.findById({ _id: data.id }, (err, res) => {
      if (err) {
        resolve('Not Found');
      } else {
        resolve(res);
      }
    });
  });
};

todo.update = (data) => {
  return new Promise((resolve) => {
    let temp = schema.updateSchema.findByIdAndUpdate(
      { _id: data.id },
      { $set: { name: data.newName } },
      (err, res) => {
        if (err) {
          resolve('Not Found');
        } else {
          resolve(res);
        }
      }
    );
  });
};

todo.delete = (data) => {
  return new Promise((resolve) => {
    let temp = schema.updateSchema.findByIdAndRemove(
      { _id: data.id },
      (err, res) => {
        if (err) {
          resolve('Not Found');
        } else {
          resolve('Deleted');
        }
      }
    );
  });
};

module.exports = todo;
