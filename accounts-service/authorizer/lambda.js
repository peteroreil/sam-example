const httpResponse = require('../utils/httpResponse');
const authorizationService = require('./lib');

exports.authorize = async(event, context) => {
    try {
        const authToken = extractToken(event);
        return authorizationService.authorize(authToken, event.methodArn);
    } catch (error) {
        console.error(`Error Authorization ${error}`);
        return httpResponse.FORBIDDEN();
    }
};

function extractToken(event) {
    const bearerToken = event.headers.Authorization;
    return bearerToken.replace('Bearer ', '');
}