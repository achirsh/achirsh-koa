/**
 * 格式化时间
 * @return {string}
 */
const dateTimeFormat = () => {
    const getDate = new Date().getDate()
    const getMonth = new Date().getMonth() + 1
    const Y = new Date().getFullYear()
    const M = getMonth < 10 ? `0${getMonth}` : getMonth
    const D = getDate < 10 ? `0${getDate}` : getDate
    const getHours = new Date().getHours()
    const getMinutes = new Date().getMinutes()
    const getSeconds = new Date().getSeconds()
    const h = getHours < 10 ? `0${getHours}` : getHours
    const m = getMinutes < 10 ? `0${getMinutes}` : getMinutes
    const s = getSeconds < 10 ? `0${getSeconds}` : getSeconds
    return `${Y}-${M}-${D} ${h}:${m}:${s}`
}

export default {
    dateTimeFormat,
}
