module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'resource',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                comment: '资源ID',
            },
            name: {
                type: DataTypes.STRING(255),
                allowNull: true,
                comment: '资源名称',
            },
            size: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                comment: '资源大小',
            },
            measure: {
                type: DataTypes.STRING(255),
                allowNull: true,
                comment: '分辨率',
            },
            thumbnail: {
                type: DataTypes.STRING(255),
                allowNull: true,
                comment: '资源地址',
            },
            operator: {
                type: DataTypes.STRING(255),
                allowNull: true,
                comment: '操作者',
            },
            time: {
                type: DataTypes.DATE,
                allowNull: true,
                comment: '创建时间',
            },
        },
        {
            sequelize,
            tableName: 'resource',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'id' }],
                },
            ],
        }
    )
}
