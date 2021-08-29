"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAdmin = void 0;

var _user = _interopRequireDefault(require("../models/user.model"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createAdmin = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    var admin = yield _user.default.findOne({
      email: 'admin@test.es'
    });

    if (!admin) {
      yield _user.default.create({
        name: 'Admin',
        email: 'admin@test.es',
        password: yield _bcryptjs.default.hash('password', 10),
        role: 'admin'
      });
    }
  });

  return function createAdmin() {
    return _ref.apply(this, arguments);
  };
}();

exports.createAdmin = createAdmin;