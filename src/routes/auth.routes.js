import { Router } from 'express'

import * as authController from '../controllers/auth.controller'
import { validate } from '../middlewares'

const router = Router()

const { check } = require('express-validator')

router.post(
  '/login',
  check('email', 'Email not valid').isEmail(),
  check('password', 'Password field is empty').not().isEmpty(),
  validate,
  authController.login
)

export default router
