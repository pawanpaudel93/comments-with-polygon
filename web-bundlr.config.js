const dotenv = require("dotenv");
dotenv.config();

/** @type {import('web-bundlr').WebBundlrConfig} */

const WebBundlrConfig = {
  url: "https://devnet.bundlr.network",
  currency: "ethereum",
  wallet: process.env.WALLET,
  folderPath: "out",
  appType: "next",
  config: {
    providerUrl:
      "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
  },
};

export default WebBundlrConfig;
