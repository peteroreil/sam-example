const httpResponse = require('./utils/httpResponse');
const accountService = require('./lib');

/**
 *
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * @param {Object} context
 *
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.createAccount = async (event) => {
    try {
        const accountCreateParams = JSON.parse(event.body);
        const account = await accountService.createAccount(accountCreateParams);
        return httpResponse.OK(account);
    } catch (err) {
        console.log(err);
        return httpResponse.INTERNAL_SERVER_ERROR();
    }
};

/**
 *
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * @param {Object} context - Lambda Context
 *
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.getAccount = async (event, context) => {
    try {
        console.log('EVENT: ', JSON.stringify(event));
        // access custom properties added by authorizer if needed
        console.log('REQUEST CONTEXT: ', JSON.stringify(event.requestContext));
        const { pathParameters } = event;
        const account = await accountService.getAccountById(pathParameters.accountId);
        return httpResponse.OK(account);
    } catch (err) {
        console.log(err);
        return httpResponse.INTERNAL_SERVER_ERROR();
    }
};