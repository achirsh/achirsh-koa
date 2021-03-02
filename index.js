import Koa from 'koa'
import koaRouter from 'koa-router'
import json from 'koa-json'
import logger from 'koa-logger'

import api from './server/routes/api';
import koaBody from 'koa-body'
import statics from 'koa-static';
import path from 'path';

const app = new Koa()
const router = koaRouter()

app.use(koaBody())
app.use(json())
app.use(logger())

// 静态服务
app.use(statics(path.join(__dirname, './upload/')))

app.use(async(ctx, next) => {
    await next()
})

app.on('error', (err, ctx) => {
    console.log('server error', err)
})

router.use('/api', api.routes())
app.use(router.routes())

app.listen(3000, () => {
    console.log('服务启动成功,端口：3000,地址：http://localhost:3000')
})

export default app