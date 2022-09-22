const mongoose = require('mongoose');

const todo = {};

todo.registerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    max: 20,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
});

todo.loginSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    max: 20,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
});

todo.updateSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    max: 20,
  },
  newName: {
    type: String,
    required: true,
    unique: true,
    max: 20,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
});
const exportModule = {};

exportModule.registerSchema = mongoose.model(
  'registerSchema',
  todo.registerSchema,
  'data'
);
exportModule.loginSchema = mongoose.model('loginSchema', todo.loginSchema, 'data');
exportModule.updateSchema = mongoose.model('updateSchema', todo.updateSchema, 'data');

module.exports = exportModule;
