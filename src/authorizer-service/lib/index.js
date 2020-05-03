module.exports = { authorize };


/**
 * @param {String} token - a user provided Bearer token value `deny` or `letmein`
 *
 * @param {String} arn - the resource that you wish to invoke
 *
 * @returns {Object} object - IAM Policy
 */

function authorize(token, arn) {
    let policy;
    if (token === 'letmein') {
        policy = generatePolicy('allow', arn);
    } else {
        policy = generatePolicy('deny', arn);
    }
    return policy;
}

/**
 * @param {String} effect - one of 'allow' or 'deny'
 *
 * @param {String} resource - the lambda function 
 *    ARN that you wish to create the policy on
 *
 * @returns {Object} object - IAM Policy to Invoke
 */
function generatePolicy(effect, resource) {
    const policyStatement = {
        Action: 'execute-api:Invoke',
        Effect: effect,
        Resource: resource,     
    };

    const policyDocument = {
        Version: '2012-10-17',
        Statement: [ policyStatement ]
    };

    const principalId = getUserId();
    const context = getContext();
    return { principalId, context, policyDocument }
}


function getUserId() {
    return 'zsfgarasgzolqt';
}

function getContext() {
    // Pass this context to your down stream functions
    return { 
        simpleAuth: true,
        username: 'testuser',
        accountName: 'testaccountName',
        emailAddress: 'test@domain.com'
    };
}