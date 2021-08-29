"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var _default = {
  PORT: process.env.PORT || 3000,
  SECRET: process.env.SECRET || 'super-secret-here-test',
  MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost',
  MONGO_DB: process.env.MONGO_DB || 'API-TEST-CRM-SERVICE'
};
exports.default = _default;