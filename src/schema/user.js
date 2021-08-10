module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'user',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            nickname: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            username: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            password: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            creationTime: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            updateTime: {
                type: DataTypes.DATE,
                allowNull: true,
            },
        },
        {
            sequelize,
            tableName: 'user',
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
