import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";

export const client = new CognitoIdentityProviderClient({
  region: process.env.REACT_APP_AMPLIFY_REGION,
  credentials: {
    accessKeyId: process.env.REACT_APP_AMPLIFY_PUBLIC_KEY,
    secretAccessKey: process.env.REACT_APP_AMPLIFY_SECRET_KEY,
  },
});
