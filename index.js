import Koa from 'koa';
import koaRouter from 'koa-router';
import json from 'koa-json';
import logger from 'koa-logger';
import koaBody from 'koa-body';

const app = new Koa()
const router = koaRouter()

app.use(koaBody())
app.use(json())
app.use(logger())

app.use(async (ctx, next) => {
	await next()
})

app.on('error', (err, ctx) => {
	console.log('server error', err)
})

app.listen(3000, () => {
	console.log('服务启动成功,端口：3000,地址：http://localhost:3000')
})

export default app