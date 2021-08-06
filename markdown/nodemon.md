## nodemon

```
nodemon是一种工具，可在检测到目录中的文件更改时通过自动重新启动节点应用程序来帮助开发基于node.js的应用程序

本地安装：npm i -D nodemon

nodemon一般只在开发时使用，它最大的好处在于watch功能，一旦文件发生变化，就自动重启进程

# 默认件事昂前目录的文件变化
nodemon app.js

# 指定主机和端口作为参数，表示在本地3697端口启动node服务
nodemon app.js localhost 3697

```
```
参数：
    watch：监控的文件夹路径或者文件路径
    watch可以监控多个目录，默认值：'*.*'。默认情况下，nodemon监控当前工作目录。如果想控制该选项，使用以下命令

    nodemon --watch app --watch libs app.js
    现在，nodemon只有在./app目录或./libs目录下文件发生变化时才会重新启动



    ext：监听指定文件扩展名的文件
    监控指定后缀名的文件，用空格间隔，默认监听"js, mjs, json"
    使用 -e 或 --ext 指定监听的文件扩展名，如下所示：
    nodemon -e js,pug

    优先级：nodemon 会先读取 watch 里面需要监听的文件或文件路径，再从文件中选择监控 ext 中指定的后缀名，最后去掉从 ignore 中指定的忽略文件或文件路径。



    exec：执行项，若设定了执行项，nodemon将执行程序而不是javascript脚本
    nodemon --exec "python -v" ./app.py



    ignore:忽略项（包括文件、目录或文件名通配符匹配）
    注意，默认情况下，nodemon会忽略 .git，node_modules，bower_components，.nyc_output，coverage 和 .sass-cache 目录，并添加你的忽略模式到列表中。将 ignore 置空并不能取消忽略。

    # 忽略特定的文件
    $ nodemon --ignore lib/app.js

    # 忽略多个目录
    $ nodemon --ignore lib/ --ignore tests/

    # 使用通配符匹配（但是一定要引用引号），* 表示该文件夹下的所有后缀为 .js 的文件
    $ nodemon --ignore 'lib/*.js'


    execMap：设置运行服务的后缀名与对应的命令
    {
        "execMap": {
            "js": "npm -v"
        }
    }

    可以用来定义默认可执行文件，如果您使用的语言在默认情况下不受Node支持，则此应用特别有用
    {
        "execMap": {
            "pl": "perl"
        }
    }
    现在运行以下命令，nodemon将指导将其perl用作可执行文件：
    nodemon app.pl


    delay：延迟重启时间（毫秒）。延迟重启类似于JS函数中的函数节流，只在最后一次更改的文件往后延迟重启，以避免了短时间多次重启
    nodemon --delay 10 app.js
    nodemon --delay 2.5 app.js
    nodemon --delay 2500ms app.js


    verbose：设置日志输出模式，true详细模式
    {
        "verbose": true
    }


    colours：默认为true，输出信息颜色标示
    {
        "colours": "false"
    }


    event: 表示nodemon运行到某些状态时的一些触发事件，总共有五个状态：
    - start：子进程（即监控的应用）启动
    - crash：子进程崩溃，不会触发exit
    - exit： 子进程完全退出，不是非正常的崩溃
    - restart：子进程重启
    - config:update: nodemon的config文件改变


    restartable：设置重启模式。重启的命令，默认是rs，可以改成你自己喜欢的字符串。
    {
        "restartbale": "nv"
    }


    env：运行环境
    {
        "env": {
            "NODE_ENV": "development",
            "PORT": "3000"
        }
    }



    配置文件：你可以在命令行周添加参数以支持某些功能，也可以使用本地和全局配置文件。可以使用该config选项指定备用本地配置文件。
    // nodemon.json
    {
        "restartable": "nv",
        "delay": 1000,
        "colours": false,
        "verbose": true,
        "ignore": [
            "./src"
        ],
        "watch": [
            "app.js",
            "src"
        ],
        "events": {
            "restart": "osascript -e 'display notification \"app restarted\" with title \"nodemon\"'"
        },
        "execMap": {
            "js": "npm -v"
        },
        "ext": "js, json",
        "env": {
            "NODE_ENV": "development",
            "PORT": "3000"
        }
    }

    你还可以在package.json中使用nodemonConfig字段进行配置，这时独立配置文件将被忽略
    // package.json
    {
        "name": "demo",
        "nodemonConfig": {
            "ignore": ["node_modules", "dist"],    // 忽略node_modules和dist文件
            "delay": "2500",
            "watch": ["app.js", "src"]
        }
    }

    优先级：本地配置文件 -> nodemonConfig -> 全局配置文件。命令行中指定的参数选项会被本地文件覆盖，而在paskage.json中配置的会被命令行覆盖
    
    nodemon的默认配置文件

    var ignoreRoot = require('ignore-by-default').directories();

    // 默认选项配置选项
    module.exports = {
        restartable: 'rs',
        colours: true,
        execMap: {
            py: 'python',
            rb: 'ruby',
            ts: 'ts-node',
            // 更多的可以在这里添加，如 ls:lsc - 但请确保它是交叉的与 linux、mac 和 windows 兼容，或使 default.js 为基于 node 的实用程序动态附加 .cmd
        },
        watch: ['*.*'],
        stdin: true,
        runOnChangeOnly: false, // 为 true 时运行 nodemon xxx 项目不会启动，只保持对文件的监控，当监控的文件有修改并保存时才会启动应用，其他没有影响。默认是 false 即一开始就启动应用并监控文件改动。
        verbose: false,
        signal: 'SIGUSR2',
        stdout: true, // 这个是关于标准输入输出的设置，上文提到 nodemon.json 文件中的 events 字段可以为状态设置标准输入输出语句，如果这里设置了 false，标准输入输出语句就会失效。
        watchOptions: {},
    };
```