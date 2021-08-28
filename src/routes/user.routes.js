import { Router } from 'express'
import * as userController from '../controllers/user.controller'

const router = Router()
const { check } = require('express-validator')

router.post('/', userController.createUser)

export default router
