import { Router } from 'express'
import { analyzeDNA, getStats } from '../controllers/dnaController.js'

const router = Router()

router.post('/mutant', analyzeDNA)
router.get('/stats', getStats)

export default router
