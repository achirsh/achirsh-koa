import demoDB from '../config/db'

const userModel = '../schema/user.js'

const User = demoDB.import(userModel)

const getUserById = async (id) => {
    return User.findOne({
        where: {
            id,
        },
    })
}

const addUser = async (userInfo) => {
    await User.create(userInfo)
}

const editUser = async (id, data) => {
    await User.update(
        {
            username: data.username,
            nickname: data.nickname,
            password: data.password,
            updateTime: data.updateTime,
        },
        {
            where: {
                id,
            },
        }
    )
}

const delUser = async (id) => {
    await User.destroy({
        where: {
            id,
        },
    })
}

const getUser = async (data) => {
    const { pageNo, pageSize } = data
    return User.findAndCountAll({
        limit: parseInt(pageSize, 10),
        offset: (parseInt(pageNo, 10) - 1) * parseInt(pageSize, 10),
    }).then((result) => {
        return result
    })
}

export default {
    addUser,
    editUser,
    delUser,
    getUser,
    getUserById,
}
