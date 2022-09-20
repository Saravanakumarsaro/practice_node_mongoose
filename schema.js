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

const exportModule = {};

exportModule.validateSchema = mongoose.model(
  'userSchema',
  todo.registerSchema,
  'data'
);

module.exports = exportModule;
