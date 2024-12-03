import {Router} from 'express'
import * as apiController from '../controllers/apiController'
 
const router = Router()
 
router.get('/ping',apiController.ping)
 
router.get('/random',apiController.random)
 
router.get('/nome/:nome',apiController.nome)

//criando endpoint frases
router.post('/frases',apiController.criarFrase)

router.get('/frases',apiController.listarFrases)
 
export default router