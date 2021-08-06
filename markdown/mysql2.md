## mysql2

```
安装：
    npm install mysql2
连接数据库：

    const mysql = require('mysql2');
    let connection = mysql.createConnection({
        host: "主机地址，默认localhost",       
        user: "root",
        password: "123456",
        port: "端口，默认3306",
        database: "数据库名",
        charset: "连接字符集（默认：‘UTF8_GENERAL_CI’，注意字符集的字母都要大写）",
        connectTimeout: "连接超时（单位：毫秒）",
        multipleStatements: "是否许一个query中有多个MySQL语句（ 默认： false）"
    })
```

```
通过query()方法执行SQL语句

连接数据库后，可以使用query()方法对数据库进行增删改查操作。

// 接上边的连接语句
connection.query(
    'select * from admin where', [],
    function (err, results, fields) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        console.log(results);
        console.log(fields);
    }
)


通过execute()方法执行SQL语句

connection.execute(
    'select * from admin where AdminId = ?', [2],
    function (err, results, fields) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        console.log(results);
    }
)


execute()和query()之间的区别：
1、query是在node装SQL语句，而 execute 则是利用MySQL 的 PreparedStatement 机制来预编译SQL语句
2、execute 的优势是数据库原生支持的预编译机制，性能更高
3、query 的优势是更灵活，例如可以用??代替表名、字段、索引名；用?代替数据
```


```
连接池：
    通过重新使用以前的连接，连接池保持打开状态，而不是完成连接后关闭，有助于减少连接到MySQL服务器的时间。

    const pool = mysql.createPool({
        host: "主机地址，默认localhost",       
        user: "root",
        password: "123456",
        port: "端口，默认3306",
        database: "数据库名",
        charset: "连接字符集（默认：‘UTF8_GENERAL_CI’，注意字符集的字母都要大写）",
        connectTimeout: "连接超时（单位：毫秒）",
        multipleStatements: "是否许一个query中有多个MySQL语句（ 默认： false）",

        waitForConnections: "表示连接超频是否等待",
        connectionLimit: "一次创建的最大连接数",
        queueLimit: "表示可以等待的连接的个数一次创建的最大连接数"
    })

在创建完连接池之后，可以使用和createConnection()连接相同的方式使用池（使用pool.query()和pool.execute()。也可以通过连接池手动获取连接进行数据库操作。

pool.getConnection(function(err, conn) {
    conn.query(
            'select * from admin where AdminID = ?', [1],
            function(err, results, fields) {
                if (err) {
                    console.log('[SELECT ERROR] - ', err.message);
                    return;
                }
                console.log(results);
            }
        )
    pool.releaseConnection(conn);//释放连接
})

```

```
使用Promise

    在之前通过query()和execute()操作数据库时都是通过回调函数的形式获取返回的数据。而我们可以
    使用Promise将异步转化为同步，以同步的方式来完成对数据库的操作。而在使用Promise时，又分为
    两种形式，一种是通过 async\await 来实现，一种是通过 promise() 函数来实现


通过async\await 和createConnection()的方式创建数据库操作

const mysql = require('mysql2/promise');
async function pro_createConnection() {
    let connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "123456",
        database: "student",
        multipleStatements: true
    });

    let [results] = await connection.execute(
        'select * from admin where AdminID = ?', [1]
    )
    console.log(results);
}
pro_createConnection();


通过async\await 和createPool()的方式创建数据库操作
const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "student",
    waitForConnections: true, //连接超额是否等待
    connectionLimit: 10, //一次创建的最大连接数
    queueLimit: 0 //可以等待的连接的个数
});
async function pro_createPool() {

    let [results] = await pool.execute(
        'select * from admin where AdminID = ?', [1]
    )
    console.log(results);
}
pro_createPool



通过 promise() 函数和createConnection()的方式创建数据库操作

const mysql = require('mysql2');
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "student",
    multipleStatements: true
});
connection.promise().query('select * from admin where AdminID = ?', [1])
    .then(([rows, fields]) => {
        console.log(rows);
    })
    .catch(console.log)
    .then(() => connection.end());



通过 promise() 函数 和 createPool() 的方式创建数据库操作
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "student",
    waitForConnections: true, //连接超额是否等待
    connectionLimit: 10, //一次创建的最大连接数
    queueLimit: 0 //可以等待的连接的个数
});
pool.promise().query('select * from admin where AdminID = ?', [1])
    .then(([rows, fields]) => {
        console.log(rows);
    })
    .catch(console.log)

```

