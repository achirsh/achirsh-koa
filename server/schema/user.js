const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "用户ID"
    },
    nickname: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "昵称"
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "用户名"
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "密码"
    },
    creationTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "创建时间"
    },
    updateTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "更新时间"
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
