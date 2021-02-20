import Sequelize from 'sequelize';

// 使用url连接的形式进行连接，注意将root：后面的XXXX改成自己数据库的密码
const demo = new Sequelize("mysql://root:12345678@127.0.0.1/demo", {
    define: {
        // 取消Sequelzie自动给数据表加入时间戳（createdAt以及updatedAt）
        timestamps: false
    },
    timezone: '+08:00' // 时差区，国内需要加入不然存储的时间会有时差
})

export default demo