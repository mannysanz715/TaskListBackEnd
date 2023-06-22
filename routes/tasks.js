import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as tasksCtrl from '../controllers/tasks.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, tasksCtrl.index)
router.post('/create', checkAuth, tasksCtrl.create)

export { router }
