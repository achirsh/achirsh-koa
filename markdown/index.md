一、创建项目

1、创建目录FIRST-PROJECT
2、npm init创建package.json，然后执行npm install
3、通过npm install koa安装koa模块
4、通过npm install nodemon -D 安装nodemon模块，用于node热启动
5、在根目录下新建index.js文件，作为入口文件，内容如下：
```
const Koa = require('koa');
const app = new Koa();

app.use(async(ctx, next) => {
    await next();
    ctx.response.body = 'Hello, koa2!';
});

app.listen(9527)
```
6、配置package
```
{
    "name": "first-project",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "dev": "nodemon index.js"
    },
    "nodemonConfig": {
        "ignore": ["node_modules", "dist"],
        "delay": "2500",
        "watch": ["app.js", "src"]
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
        "koa": "^2.13.1"
    },
    "devDependencies": {
        "nodemon": "^2.0.12"
    }
}
```
7、启动
npm run dev

二、路由配置
npm install koa-router
三、请求
npm install koa-bodyparser
更改为
npm install koa-body


