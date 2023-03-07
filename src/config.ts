const config = {
    host_url: process.env.REACT_APP_HOST_URL || 'http://localhost:3000',
    path_prefix: process.env.REACT_APP_PATH_PREFIX || '/',
    maya_wallet: {
      url: 'https://pg-sandbox.paymaya.com/payby/v2/paymaya/link',
      pub_api_key: process.env.REACT_APP_WALLET_PUBLIC_API_KEY,
      sec_api_key: process.env.REACT_APP_WALLET_SECRET_API_KEY,
    },
}
  
export default config
