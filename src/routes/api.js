import koaRouter from 'koa-router'
import auth from '../controllers/login'
import user from '../controllers/user'
import resource from '../controllers/resource'

const router = koaRouter()

router.post('/login', auth.postUserAuth)
router.get('/user/info', auth.getInfo)

router.post('/user', user.postUserInfo)
router.put('/user', user.putUserInfo)
router.delete('/user', user.delUserInfo)
router.get('/user', user.getUserList)

router.post('/upload/image', resource.uploadImage)

export default router
