import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

const APP_NAME = 'My Awesome App';
const APP_LOGO_URL = 'https://example.com/logo.png';
const DEFAULT_ETH_JSONRPC_URL = 'https://mainnet.infura.io/v3/<YOUR_INFURA_API_KEY>';
const DEFAULT_CHAIN_ID = 1;

// Initialize Coinbase Wallet SDK
export const coinbaseWallet = new CoinbaseWalletSDK({
 appName: APP_NAME,
 appLogoUrl: APP_LOGO_URL,
 darkMode: false
});

// Initialize a Web3 Provider object
export const ethereum = coinbaseWallet.makeWeb3Provider(DEFAULT_ETH_JSONRPC_URL, DEFAULT_CHAIN_ID);
