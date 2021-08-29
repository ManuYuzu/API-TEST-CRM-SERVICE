"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _expressValidator = require("express-validator");

var customerController = _interopRequireWildcard(require("../controllers/customer.controller"));

var _middlewares = require("../middlewares");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)();
/* CRUD Methods */

router.post('/', (0, _expressValidator.check)('name', 'Name field is empty').not().isEmpty(), (0, _expressValidator.check)('surname', 'Surname field is empty').not().isEmpty(), (0, _expressValidator.check)('photo', 'Photo is necesary').not().isEmpty(), _middlewares.authJwt.verifyToken, customerController.createCustomer);
router.get('/', _middlewares.authJwt.verifyToken, customerController.getCustomers);
router.get('/:customerId', (0, _expressValidator.check)('customerId', 'The customer ID is not correct').isMongoId(), _middlewares.authJwt.verifyToken, customerController.getCustomerById);
router.put('/:customerId', (0, _expressValidator.check)('customerId', 'The customer ID is not correct').isMongoId(), _middlewares.authJwt.verifyToken, customerController.updateCustomer);
router.delete('/:customerId', (0, _expressValidator.check)('customerId', 'The customer ID is not correct').isMongoId(), _middlewares.authJwt.verifyToken, customerController.deleteCustomer);
var _default = router;
exports.default = _default;