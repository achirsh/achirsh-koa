import Koa from 'koa'
import koaRouter from 'koa-router'
import json from 'koa-json'
import logger from 'koa-logger'

import koaBody from 'koa-body'
import statics from 'koa-static'
import path from 'path'
import api from './routes/api'

const app = new Koa()
const router = koaRouter()

app.use(koaBody())
app.use(json())
app.use(logger())

// 静态服务
app.use(statics(path.join(__dirname, './upload/')))

// app.use(async(ctx, next) => {
//     await next()
// })

app.on('error', (err, ctx) => {
    // console.log('server error', err)
    // console.log('server ctx', ctx)
})

router.use('/api', api.routes())
app.use(router.routes())

app.listen(3000)

export default app
