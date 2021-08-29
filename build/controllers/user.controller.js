"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;

var _user = _interopRequireDefault(require("../models/user.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    try {
      var {
        email,
        password
      } = req.body;
      var newUser = new _user.default({
        email,
        password: yield _user.default.encryptPassword(password)
      });
      var savedUser = yield newUser.save();
      return res.status(200).json(savedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  return function createUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var getUsers = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    try {
      var {
        page,
        perPage
      } = req.query;
      var settings = {
        page: parseInt(page, 10) || 1,
        limit: parseInt(perPage, 10) || 10
      };
      var users = yield _user.default.paginate({}, settings);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  return function getUsers(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUsers = getUsers;

var getUserById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    try {
      var user = yield _user.default.findById(req.params.userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  return function getUserById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getUserById = getUserById;

var updateUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    try {
      var user = yield _user.default.findByIdAndUpdate(req.params.userId, req.body, {
        new: true
      });
      var userUpdated = yield user.save();
      res.status(200).json(userUpdated);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  return function updateUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateUser = updateUser;

var deleteUser = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    try {
      yield _user.default.findByIdAndDelete(req.params.userId);
      res.status(200).json({
        msg: 'User deleted'
      });
    } catch (error) {
      res.status(500).json(error);
    }
  });

  return function deleteUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteUser = deleteUser;