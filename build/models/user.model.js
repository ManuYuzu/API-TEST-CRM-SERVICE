"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var _mongoosePaginate = _interopRequireDefault(require("mongoose-paginate"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var userSchema = new _mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'This email is arleady in use']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    select: false
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  name: {
    type: String,
    minlength: 2,
    maxlength: 24
  },
  surname: {
    type: String,
    minlength: 2,
    maxlength: 24
  },
  phone: {
    type: String,
    minlength: 5,
    maxlength: 15
  }
}, {
  timestamps: true,
  versionKey: false
});

userSchema.statics.encryptPassword = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (password) {
    var salt = yield _bcryptjs.default.genSalt(10);
    return yield _bcryptjs.default.hash(password, salt);
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

userSchema.statics.comparePassword = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (password, inputPassword) {
    return yield _bcryptjs.default.compare(password, inputPassword);
  });

  return function (_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

userSchema.plugin(_mongoosePaginate.default);

var _default = (0, _mongoose.model)('User', userSchema);

exports.default = _default;