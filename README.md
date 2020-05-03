# customer-account-service

This project contains source code and supporting files for a serverless application that you can deploy with the SAM CLI. It includes the following files and folders.

- src/accounts-service - A mock set of Lambdas & Service for creating and retreiving customer accounts (refer to `template-swagger.yaml` for api descriptions).
- src/authorizer-service - A custom Authorizer function for authenticating calls to the customer account service
- template-sam.yaml - A template that defines the application's AWS resources.
- template-swagger.yaml - A swagger template that defines the API

# dependencies
- SAM CLI - [Install SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
- Docker - [Install Docker](https://hub.docker.com/search/?type=edition&offering=community)

# Run SAM application locally
*Note:* PITA - SAM local does not currently support custom authorizer run locally

```bash
sam build -t template-sam.yaml
sam local start-api
```

## Deploy the sample application
To build and deploy your application to AWS (requires valid AWS account and tokens):

```bash
sam build
sam deploy --guided
```

## Cleanup
To delete the sample application that you created, use the AWS CLI. Assuming you used your project name for the stack name, you can run the following:

```bash
aws cloudformation delete-stack --stack-name customer-account-service
```

## Resources
See the [AWS SAM developer guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html) for an introduction to SAM specification, the SAM CLI, and serverless application concepts.

See the [Custom Authorizer Flow](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html) for details on how custom authorization works.