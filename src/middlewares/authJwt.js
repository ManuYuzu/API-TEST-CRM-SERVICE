import jwt from 'jsonwebtoken'
import config from '../config'

import User from '../models/user.model'

export const verifyToken = async (req, res, next) => {
  const token = req.headers.token
  if (!token) return res.status(403).json({ msg: 'Token not provided' })

  try {
    const decoded = jwt.verify(token, config.SECRET)
    req.userId = decoded.id

    const user = await User.findById(req.userId)
    if (!user) return res.status(401).json({ msg: 'User not found' })
    res.locals.user = user

    next()
  } catch (error) {
    return res.status(403).json({ msg: 'Unauthorized' })
  }
}

export const isAdmin = async (req, res, next) => {
  try {
    const { role } = res.locals.user

    if (role === 'admin') {
      next()
      return
    }

    return res.status(403).json({ message: 'Admin permits needed' })
  } catch (error) {
    return res.status(500).send({ msg: error })
  }
}
