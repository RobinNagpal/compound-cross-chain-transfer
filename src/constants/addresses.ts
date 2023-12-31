import { SupportedChainId } from 'constants/chains'

/**
 * Map of supported chains to USDC contract addresses
 */
export const CHAIN_IDS_TO_USDC_ADDRESSES = {
  [SupportedChainId.ETH_MAINNET]: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',

  [SupportedChainId.OPTIMISM_MAINNET]:
    '0x0b2c639c533813f4aa9d7837caf62653d097ff85',

  [SupportedChainId.ARB_MAINNET]: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
}

/**
 * Map of supported chains to Token Messenger contract addresses
 */
export const CHAIN_IDS_TO_TOKEN_MESSENGER_ADDRESSES = {
  [SupportedChainId.ETH_MAINNET]: '0xbd3fa81b58ba92a82136038b25adec7066af3155',

  [SupportedChainId.OPTIMISM_MAINNET]:
    '0x2B4069517957735bE00ceE0fadAE88a26365528f',

  [SupportedChainId.ARB_MAINNET]: '0x19330d10D9Cc8751218eaf51E8885D058642E08A',
}

/**
 * Map of supported chains to Message Transmitter contract addresses
 */
export const CHAIN_IDS_TO_MESSAGE_TRANSMITTER_ADDRESSES = {
  [SupportedChainId.ETH_MAINNET]: '0x0a992d191deec32afe36203ad87d7d289a738f81',

  [SupportedChainId.OPTIMISM_MAINNET]:
    '0x4d41f22c5a0e5c74090899e5a8fb597a8842b3e8',

  [SupportedChainId.ARB_MAINNET]: '0xC30362313FBBA5cf9163F0bb16a0e01f01A896ca',
}
