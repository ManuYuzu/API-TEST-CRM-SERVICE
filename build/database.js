"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose.default.connect(_config.default.MONGO_URL, (error, res) => {
  error ? console.error(error) : console.info('(!) DB Connection: \x1b[32mOK\x1b[0m\n');
});