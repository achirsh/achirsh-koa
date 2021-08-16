import { DataTypes } from 'sequelize'
import Resource from './resource'
import User from './user'
import Article from './article'

function initModels(sequelize) {
    const resource = Resource(sequelize, DataTypes)
    const user = User(sequelize, DataTypes)
    const article = Article(sequelize, DataTypes)

    return {
        resource,
        user,
        article,
    }
}

export default {
    initModels,
}
