## Babel

```
Babel是一个JavaScript编译器

Babel是一个工具链，主要用于将采用ECMAScript2015+ 语法编写的代码转换为向后兼容的JavaScript语法，以便能够运行在当前和旧版本的浏览器或其他环境中。下边列出的是Babel能为你做的事情：

    语法转换
    通过Polyfill方式在目标环境中添加缺失的特性（通过第三方polyfill模块，例如core-js实现）
    源码转换（codemods）


Babel有两种并行的配置文件格式，可以一起使用，也可以分开使用
1、项目范围的配置
    babel.config.js文件，具有不同的拓展名(json、js、html)
    babel.config.js是按照commonjs导出对象，可以写js的逻辑
2、相对文件的配置
    .babelrc文件，具有不同的扩展名
总结：baberc的加载规则是按目录加载的，是指针对自己的代码。config的配置针对了第三方的组件和自己的代码内容。
babel.config.js是一个项目级别的配置，一般有了babel.config.js就不会去执行.babelrc的设置。



Babel输入：  ES2015箭头函数
[1, 2, 3].map((n) => n + 1)

Babel输出：ES5语法实现的同等功能
[1, 2, 3].map(function(n) {
    return n + 1
})
```