## koa-body

```
之前使用koa2的时候，处理post请求使用的是koa-bodyparser，同时如果是图片上传使用的是koa-multer
这两者的组合没什么问题，不过koa-multer和koa-route（注意不是koa-router）存在不兼容问题。
所以使用koa-body代替两者
```

```
安装：
    yarn add koa-body
    npm install koa-body

基本使用：

    const koaBody = require('koa-body');
    const app = new koa();
    app.use(koaBody({
        multipart:true, // 支持文件上传
        encoding:'gzip',
        formidable:{
            uploadDir:path.join(__dirname,'public/upload/'), // 设置文件上传目录
            keepExtensions: true,    // 保持文件的后缀
            maxFieldsSize:2 * 1024 * 1024, // 文件上传大小
            onFileBegin:(name,file) => { // 文件上传前的设置
           
            },
        }
    }));


获取文件上传后的信息：

    需要注意的是，如果是获取上传文件后的信息，则需要在ctx.request.files中获取
    如果是获取其他的表单字段，则需要在ctx.request.body中获取

    router.get('/', async (ctx) => {
        await ctx.render('index')
    })

    router.post('/', async (ctx) => {
        console.log(ctx.request.files);
        console.log(ctx.request.body);
        ctx.body = JSON.stringify(ctx.request.files);
    })
```