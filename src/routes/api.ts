import {Router} from 'express'
import * as apiController from '../controllers/apiController'
 
const router = Router()
 
router.get('/ping',apiController.ping)
 
router.get('/random',apiController.random)
 
router.get('/nome/:nome',apiController.nome)

//criando endpoint frases
router.post('/frases',apiController.criarFrase)

router.get('/frases',apiController.listarFrases)

//pegar a frase pelo id
router.get('/frases/:id',apiController.pegarFrase)

//api atualizar usa o put
router.put('/frases/:id',apiController.editaFrase)

router.delete('/frases/:id',apiController.deletarFrase)
 
export default router