import fs from 'fs'
import path from 'path'
import probe from 'probe-image-size'
import res from '../models/resource'
import Res from '../utils/response'
import tools from '../utils/tools'

const imageUrl = `${process.env.SERVER_URL}/image/`
const imagePath = path.join(__dirname, '../../upload/image')

// const videoUrl = `${process.env.SERVER_URL}/video/`
// const videoPath = path.join(__dirname, '../../upload.video')

const uploadImage = async (ctx) => {
    const { file } = ctx.request.files

    // 检查重名文件
    const repeat = await res.getResByName(file.name)
    if (repeat) {
        ctx.body = Res.error(`资源中已存在【${file.name}】文件`)
        return false
    }

    const reader = fs.createReadStream(file.path) // 创建可读流

    // 获取图片流的尺寸，注意，这里不能直接使用reader，不然会导致图片损坏
    const measure = await probe(fs.createReadStream(file.path))

    const upStream = fs.createWriteStream(`${imagePath}\\${file.name}`)

    const data = {
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2),
        measure: `${measure.width}*${measure.height}`,
        thumbnail: `${imageUrl}${file.name}`,
        url: `${imageUrl}${file.name}`,
        type: 'image',
        operator: 'admin',
        time: tools.dateTimeFormat(),
    }

    await res.postRes(data)
    if (!fs.existsSync(imagePath)) {
        fs.mkdir(imagePath, (err) => {
            if (err) throw err
            reader.pipe(upStream) // 可读流通过管道写入可写流
            ctx.body = Res.success('上传成功')
            return true
        })
    } else {
        reader.pipe(upStream) // 可读流通过管道斜土可写流
        ctx.body = Res.success('上传成功')
        return true
    }

    return false
}

const getResImageList = async (ctx) => {
    const data = ctx.query

    const list = await res.getRes(data, 'image')
    const resData = {
        pages: {
            total: list.count,
        },
        source: list.rows,
    }
    ctx.body = Res.success('成功', resData)
}

const delResImage = async (ctx) => {
    const data = ctx.request.query
    const image = await res.getResById(data.id)

    fs.unlink(`${imagePath}\\${image.name}`, (err) => {
        if (err) throw err
        res.deleteRes(data.id)
    })
    ctx.body = Res.success('删除成功!')
}

export default {
    uploadImage,
    getResImageList,
    delResImage,
}
