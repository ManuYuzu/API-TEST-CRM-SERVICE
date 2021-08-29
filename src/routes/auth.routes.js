import { Router } from 'express'
import { check } from 'express-validator'
import { validate } from '../middlewares'
import * as authController from '../controllers/auth.controller'

const router = Router()

router.post(
  '/login',
  check('email', 'Email not valid').isEmail(),
  check('password', 'Password field is empty').not().isEmpty(),
  validate,
  authController.login
)

export default router
