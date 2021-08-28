import { model, Schema } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'
import bcrypt from 'bcryptjs'

 const userSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

userSchema.statics.comparePassword = async (password, inputPassword) => {
  return await bcrypt.compare(password, inputPassword)
}

userSchema.plugin(mongoosePaginate)

export default model('User', userSchema)
