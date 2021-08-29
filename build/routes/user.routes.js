"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _expressValidator = require("express-validator");

var userController = _interopRequireWildcard(require("../controllers/user.controller"));

var _middlewares = require("../middlewares");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)();
/* CRUD Methods */

router.post('/', (0, _expressValidator.check)('email', 'Email not valid').isEmail(), (0, _expressValidator.check)('password', 'Password field is empty').not().isEmpty(), _middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, userController.createUser);
router.get('/', _middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, userController.getUsers);
router.get('/:userId', (0, _expressValidator.check)('userId', 'The user ID in not correct').isMongoId(), _middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, userController.getUserById);
router.put('/:userId', (0, _expressValidator.check)('userId', 'The user ID in not correct').isMongoId(), _middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, userController.updateUser);
router.delete('/:userId', (0, _expressValidator.check)('userId', 'The user ID in not correct').isMongoId(), _middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, userController.deleteUser);
var _default = router;
exports.default = _default;