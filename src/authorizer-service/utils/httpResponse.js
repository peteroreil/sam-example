module.exports = {
    FORBIDDEN: (message) => ({
        statusCode: 403,
        body: {
            code: 403,
            message: 'Forbidden'
        }
    })
}