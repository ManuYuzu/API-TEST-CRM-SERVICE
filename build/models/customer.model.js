"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var _mongoosePaginate = _interopRequireDefault(require("mongoose-paginate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customerSchema = new _mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 24,
    required: [true, 'Name is required']
  },
  surname: {
    type: String,
    minlength: 2,
    maxlength: 24,
    required: [true, 'Surname is required']
  },
  photo: {
    type: String,
    default: 'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png',
    required: [true, 'Photo is required']
  },
  creator: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  updater: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true,
  versionKey: false
});
customerSchema.plugin(_mongoosePaginate.default);

var _default = (0, _mongoose.model)('Customer', customerSchema);

exports.default = _default;