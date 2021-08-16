import jwt from 'jsonwebtoken'
import log4js from 'log4js'
import login from '../models/login'
import user from '../models/user'
import _res from '../utils/response'

const logger = log4js.getLogger()
logger.level = 'info'

const sercet = 'koa-demo'

const postUserAuth = async (ctx) => {
    const data = ctx.request.body
    const userInfo = await login.getUserByName(data.username)

    if (userInfo !== null) {
        if (userInfo.password !== data.password) {
            ctx.body = _res.error('密码错误！')
        } else {
            const userToken = {
                username: userInfo.username,
                id: userInfo.id,
            }
            const token = jwt.sign(userToken, sercet)
            ctx.body = {
                code: '0000',
                info: '登陆成功',
                token,
            }
        }
    } else {
        ctx.body = _res.error('用户不存在')
    }
}

const getInfo = async (ctx) => {
    const { request } = ctx
    let body = null
    const authData = await jwt.verify(request.header.token, sercet)
    if (authData) {
        const userAuth = await user.getUserById(authData.id)
        if (userAuth) {
            body = {
                code: '0000',
                info: '查询成功',
                data: userAuth.dataValues,
            }
        } else {
            body = {
                code: '403',
                info: '查无此人',
                data: null,
            }
        }
    }
    ctx.body = body
}

export default {
    postUserAuth,
    getInfo,
}
