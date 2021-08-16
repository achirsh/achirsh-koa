import DB from '../config/db'

const articleModel = '../schema/article.js'

const Article = DB.import(articleModel)

const getArticles = () => {
    return Article.findAndCountAll().then((result) => {
        return result
    })
}

export default {
    getArticles,
}
