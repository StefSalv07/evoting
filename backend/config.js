const { TokenCachePlugin } = require("@azure/msal-node");

const MSAL_CONFIG = {
  auth: {
    clientId: "YOUR_CLIENT_ID",
    authority: "https://login.microsoftonline.com/common",
  },
  system: {
    tokenCache: {
      cachePlugin: TokenCachePlugin,
      cachePluginConfig: {
        cacheLocation: TOKEN_CACHE_PATH,
      },
    },
  },
};

const TOKEN_CACHE_PATH = "./tokenCache.json";

module.exports = { MSAL_CONFIG, TOKEN_CACHE_PATH };
