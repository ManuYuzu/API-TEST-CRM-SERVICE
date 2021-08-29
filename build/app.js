"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

var _customer = _interopRequireDefault(require("./routes/customer.routes"));

var _initSetup = require("./libs/initSetup");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Routes Imports
// Setup
var app = (0, _express.default)();
(0, _initSetup.createAdmin)(); // Settings

app.set('port', process.env.PORT || 3000);
app.use((0, _cors.default)()).use((0, _helmet.default)()).use((0, _morgan.default)('dev')).use(_express.default.json()); // Routes

app.use('/api/auth', _auth.default).use('/api/users', _user.default).use('/api/customers', _customer.default);
var _default = app;
exports.default = _default;