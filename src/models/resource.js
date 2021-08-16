import demoDB from '../config/db'

const resModel = '../schema/resource'

const Res = demoDB.import(resModel)

// 根据ID获取资源
const getResById = async (id) => {
    return Res.findOne({
        where: {
            id,
        },
    })
}

// 查询资源名
const getResByName = async (name) => {
    return Res.findOne({
        where: {
            name,
        },
    })
}

// 获取资源列表
const getRes = async (data, type) => {
    const { pageNo, pageSize } = data
    return Res.findAndCountAll({
        where: {
            type,
        },
        limit: parseInt(pageSize, 10),
        offset: (parseInt(pageNo, 10) - 1) * parseInt(pageSize, 10),
    }).then((result) => {
        return result
    })
}

// 上传资源
const postRes = async (data) => {
    await Res.create(data)
}

// 删除资源
const deleteRes = async (id) => {
    await Res.destroy({
        where: {
            id,
        },
    })
}

const postResImage = async (data) => {
    await Res.create(data)
}

export default {
    getResById,
    getRes,
    postRes,
    deleteRes,
    getResByName,
    postResImage,
}
