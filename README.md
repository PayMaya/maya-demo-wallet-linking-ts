# Recurring Wallet Payments Demo App

This mini application demonstrates the use of [Pay with Maya API](https://developers.maya.ph/docs/pay-with-maya)
in order to pay using a customer's Maya account.

If you want to see the relevant integration code directly, see the file [wallet.ts](src/services/wallet.ts)

This project was created with React (React Redux and Thunk) and TypeScript.

Do not build your application on top of this demo.

For demo purposes, the functions in [wallet.ts](src/services/wallet.ts) were done on the frontend. 
However, when implementing for commercial use, please do the following transactions
on your backend servers to protect the linkId of the customer.

---

## Requirements
1. Pay with Maya API keys (public and secret)- needed as authorization in API calls

## How to Run the Application
1. Run `npm install` to install all needed packages.
2. Run `npm start` to start the application. (see next part for note on environment variables) 

Example: 
> REACT_APP_WALLET_PUBLIC_API_KEY='pk-abcdefhij' npm start

## Environment variables
You can set these variables in your environment, or when running the application, or in a `.env` file in the root directory.

| env variable                      | description                                 | default               |
|-----------------------------------|---------------------------------------------|-----------------------|
| REACT_APP_WALLET_PUBLIC_API_KEY | (required) public api key                   |                       |
| REACT_APP_WALLET_SECRET_API_KEY | (required) secret api key    |                       |
| REACT_APP_HOST_URL                | host url of the app, used for redirect urls | http://localhost:3000 |
| REACT_APP_PATH_PREFIX             | path prefix, used for redirect urls         | /                     |
| PORT                              | port that the app listens to                | 3000                  |

### Using a .env file
You can create a `.env` file in the root folder with values.

Example
```ini
REACT_APP_WALLET_PUBLIC_API_KEY=pk-gjldkfjgkldfjgljdfglawas
REACT_APP_WALLET_SECRET_API_KEY=sk-sjsdfhdsjfhsjkldfsdfhsdf
```


## APIs Used
1. [Pay With Maya - Recurring Wallet Payments](https://developers.maya.ph/docs/recurring-wallet-payments) 
    - https://pg-sandbox.paymaya.com/payby/v2/paymaya/link
    - https://pg-sandbox.paymaya.com/payby/v2/paymaya/link/{linkId}
    - https://pg-sandbox.paymaya.com/payby/v2/paymaya/link/{linkId}/execute

## Features
1. Adding products to cart
2. Link Maya Wallet to Account
2. Checking out products by paying through your Maya Wallet

## Codebase (`src` folder)
### **Frontend**
##### `App.tsx`
Routing / handling of React views / pages
##### `App.css`
CSS for the application
##### `src/actions`
Redux actions
##### `src/components`
Customized React components used within the application
##### `src/reducers`
Redux reducers
##### `src/thunks`
Redux thunks for handling asynchronous logic
##### `src/views`
Customized React views / pages


### **Backend**
##### `src/services`
Service files - API calls

### **Miscellaneous**
##### `src/types`
Type assertions
##### `src/utils`
Helper functions


## Additional Resources
1. [Sandbox credentials and Maya account that can be used during paying with Maya](https://developers.maya.ph/reference/sandbox-credentials-and-cards)
2. [How to integrate with Pay with Maya](https://developers.maya.ph/docs/pay-with-maya)
3. [Using webhooks](https://developers.maya.ph/docs/receive-real-time-payment-information-using-webhooks)

