const { DataTypes } = require('sequelize')
const Resource = require('./resource')
const User = require('./user')

function initModels(sequelize) {
    const resource = Resource(sequelize, DataTypes)
    const user = User(sequelize, DataTypes)

    return {
        resource,
        user,
    }
}

export default {
    initModels,
}
