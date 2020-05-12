module.exports = {
    OK: (body) => ({
        statusCode: 200,
        body: JSON.stringify(body)
    }),

    INTERNAL_SERVER_ERROR: (message) => ({
        statusCode: 500,
        body: {
            code: 500,
            message: message || 'Internal Server Error'
        }
    }),

    FORBIDDEN: (message) => ({
        statusCode: 403,
        body: {
            code: 403,
            message: 'Forbidden'
        }
    })
}