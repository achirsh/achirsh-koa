## ESLint + Prettier

```
第一步：下载相关包

    最基本的，我们肯定要下载eslint、prettier这两个包的
    
    其次，为了将其整合起来那么我们需要已写好的”共享配置包“和插件，因此我们需要下载eslint-plugin-prettier,eslint-config-prettier。

    再次，我们需要站在巨人的肩膀上看世界。也就是我们需要业界一些比较成熟的规范，来规范我们的代码。因此我们可以使用大团队提供的代码规范插件。比较有名的是
    airbnb。这里我们选用的是airbnb-base。故而我们需要下载eslint-config-airbnb-base

    npm install esint prettier eslint-plugin-prettier eslint-config-prettier eslint-config-airbnb-base babel-eslint
```

```
第二步：建立配置文件

    在工程的根目录，创建一个.eslintrc.js文件，文件内容
```