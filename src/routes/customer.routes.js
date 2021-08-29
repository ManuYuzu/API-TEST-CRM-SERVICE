import { Router } from 'express'
import { check } from 'express-validator'
import * as customerController from '../controllers/customer.controller'
import { authJwt } from '../middlewares'

const router = Router()

router.post(
  '/',
  check('name', 'Name field is empty').not().isEmpty(),
  check('surname', 'Surname field is empty').not().isEmpty(),
  check('photo', 'Photo is necesary').not().isEmpty(),
  authJwt.verifyToken,
  customerController.createCustomer
)

router.get(
  '/',
  authJwt.verifyToken,
  customerController.getCustomers
)

router.get(
  '/:customerId',
  check('customerId', 'The customer ID is not correct').isMongoId(),
  authJwt.verifyToken,
  customerController.getCustomerById
)

router.put(
  '/:customerId',
  check('customerId', 'The customer ID is not correct').isMongoId(),
  authJwt.verifyToken,
  customerController.updateCustomer
)

router.delete(
  '/:customerId',
  check('customerId', 'The customer ID is not correct').isMongoId(),
  authJwt.verifyToken,
  customerController.deleteCustomer
)

export default router
