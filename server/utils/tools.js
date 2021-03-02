/**
 * 格式化时间
 * @return {string}
 */
const dateTimeFormat = () => {
    const getDate = new Date().getDate()
    const getMonth = new Date().getMonth() + 1
    let Y = new Date().getFullYear()
    let M = getMonth < 10 ? '0' + getMonth : getMonth
    let D = getDate < 10 ? '0' + getDate : getDate
    const getHours = new Date().getHours()
    const getMinutes = new Date().getMinutes()
    const getSeconds = new Date().getSeconds()
    let h = getHours < 10 ? '0' + getHours : getHours
    let m = getMinutes < 10 ? '0' + getMinutes : getMinutes
    let s = getSeconds < 10 ? '0' + getSeconds : getSeconds
    return `${Y}-${M}-${D} ${h}:${m}:${s}`
}

export default {
    dateTimeFormat
}