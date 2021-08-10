import Sequelize from 'sequelize'

// 使用url连接的形式进行连接
const demo = new Sequelize(`mysql://root:12345678@127.0.0.1/demo`, {
    define: {
        // 取消Sequelize自动给数据表加入时间戳
        timestamps: false,
    },
    timezone: '+08:00',
    // 时间格式化 see: https://segmentfault.com/a/1190000020009630
    dialectOptions: {
        dateStrings: true,
        typeCast: true,
    },
})

export default demo
