"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = void 0;

var _expressValidator = require("express-validator");

var validate = (req, res, next) => {
  var error = (0, _expressValidator.validationResult)(req);
  if (!error.isEmpty()) return res.status(400).json(error);
  next();
};

exports.validate = validate;