const response = {
    success: (info, data = {}) => {
        return {
            code: '0000',
            info,
            cust: data,
        }
    },
    error: (info) => {
        return {
            code: '9999',
            info,
        }
    },
}
export default response
