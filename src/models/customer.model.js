import { Schema, model } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const customerSchema = new Schema(
  {
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
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    updater: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

customerSchema.plugin(mongoosePaginate)

export default model('Customer', customerSchema)
