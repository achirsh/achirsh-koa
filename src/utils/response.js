const response = {
    success: (info, data = {}) => {
        return {
            code: '0000',
            info: info,
            cust: data
        }
    },
    error: (info) => {
        return {
            code: '9999',
            info: info
        }
    }
}
export default response