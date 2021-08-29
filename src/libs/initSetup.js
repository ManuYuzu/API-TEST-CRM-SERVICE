/* Creates an Admin account to work with the app */

import User from '../models/user.model'
import bcrypt from 'bcryptjs'

export const createAdmin = async () => {
  const admin = await User.findOne({ email: 'admin@test.es' })

  if (!admin) {
    await User.create({
      name: 'Admin',
      email: 'admin@test.es',
      password: await bcrypt.hash('password', 10),
      role: 'admin'
    })
  }
}
