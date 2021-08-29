import { Router } from 'express'
import { check } from 'express-validator'
import * as userController from '../controllers/user.controller'
import { authJwt } from '../middlewares'

const router = Router()

router.post(
  '/',
  check('email', 'Email not valid').isEmail(),
  check('password', 'Password field is empty').not().isEmpty(),
  authJwt.verifyToken,
  authJwt.isAdmin,
  userController.createUser
)

router.get(
  '/',
  authJwt.verifyToken,
  authJwt.isAdmin,
  userController.getUsers
)

router.get(
  '/:userId',
  check('userId', 'The user ID in not correct').isMongoId(),
  authJwt.verifyToken,
  authJwt.isAdmin,
  userController.getUserById
)

router.put(
  '/:userId',
  check('userId', 'The user ID in not correct').isMongoId(),
  authJwt.verifyToken,
  authJwt.isAdmin,
  userController.updateUser
)

router.delete(
  '/:userId',
  check('userId', 'The user ID in not correct').isMongoId(),
  authJwt.verifyToken,
  authJwt.isAdmin,
  userController.deleteUser
)

export default router
