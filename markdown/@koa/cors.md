## @koa/cors

```
什么是cors
    跨域资源共享(Cross-Origin Resource Sharing)是一种机制，用来允许不同源服务器上的指定资源可以特定的Web应用访问

同源策略
    同源是指不同的站点间，域名、端口、协议都相同，浏览器的同源策略(same-origin policy)出于安全原因，会限制浏览器的跨源HTTP请求

哪些情况遵循同源策略
    1、由XMLHttpRequest或Fetch发起的跨域HTTP请求
    2、Web字体(CSS中通过@font-face使用跨域字体资源)
    3、WebGL贴图
    4、使用drawImage将Images/video画面绘制到canvas

为什么需要CORS
    Web应用向服务器请求资源时，用于同源策略限制，Web应用程序只能从同一个域请求HTTP资源。如果服务器和Web应用不在同一个域，会发起一个跨域HTTP请求。

CORS响应头部
    当响应报文包含了正确CORS响应头，Web应用程序才能从跨域的服务器加载资源。
    Access-Control-Allow-Origin       - 指定了允许访问该资源的外域URI
    Access-Control-Expose-Headers     - 服务器设置允许浏览器访问特定的头
    Access-Control-Max-Age            - 指定预请求的结果能够被缓存多久
    Access-Control-Allow-Credentials  - 当浏览器credentials设置为true时是否允许浏览器读取response的内容
    Access-Control-Allow-Methods      - 预检请求的响应，指明实际请求所允许使用的HTTP方法
    Access-Control-Allow-Headers      - 预检请求的响应，指明实际请求中允许携带的首部字符
```


```
Koa-cors: 基于node-cors开发的Koa CORS中间件
使用：
    const cors = require("koa-cors");
    app.use(cors())

origin ：配置 Access-Control-Allow-Origin 头部
expose ：配置 Access-Control-Expose-Headers 头部
maxAge ：配置 Access-Control-Max-Age 头部
credentials ：配置 Access-Control-Allow-Credentials 头部
methods ：配置 Access-Control-Allow-Methods 头部
headers ：配置 Access-Control-Allow-Headers 头部

```