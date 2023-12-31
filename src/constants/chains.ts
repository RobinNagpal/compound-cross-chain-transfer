/**
 * List of all the chains/networks supported
 */
export enum Chain {
  // ETH = 'ETH',
  // AVAX = 'AVAX',
  // ARB = 'ARB',
  ETHEREUM = 'ETHEREUM',
  ARBITRUM = 'ARBITRUM',
  OPTIMISM = 'OPTIMISM',
}

/**
 * List of all the chain/network IDs supported
 */
export enum SupportedChainId {
  // ETH_GOERLI = 5,
  // AVAX_FUJI = 43113,
  // ARB_GOERLI = 421613,

  ETH_MAINNET = 1,
  ARB_MAINNET = 42161,
  OPTIMISM_MAINNET = 10,
}

/**
 * List of all the chain/network IDs supported in hexadecimals
 * TODO: Infer from SupportedChainId
 */
export const SupportedChainIdHex = {
  // ETH_GOERLI: '0x5',
  // AVAX_FUJI: '0xa869',
  // ARB_GOERLI: '0x66eed',

  ETH_MAINNET: '0x1',
  ARB_MAINNET: '0xa4b1',
  OPTIMISM_MAINNET: '0xa',
}

interface ChainToChainIdMap {
  [key: string]: number
}

/**
 * Maps a chain to it's chain ID
 */

export const CHAIN_TO_CHAIN_ID: ChainToChainIdMap = {
  // [Chain.ETH]: SupportedChainId.ETH_GOERLI,
  // [Chain.AVAX]: SupportedChainId.AVAX_FUJI,
  // [Chain.ARB]: SupportedChainId.ARB_GOERLI,

  [Chain.ETHEREUM]: SupportedChainId.ETH_MAINNET,
  [Chain.ARBITRUM]: SupportedChainId.ARB_MAINNET,
  [Chain.OPTIMISM]: SupportedChainId.OPTIMISM_MAINNET,
}

interface ChainToChainNameMap {
  [key: string]: string
}

/**
 * Maps a chain to it's readable name
 */
export const CHAIN_TO_CHAIN_NAME: ChainToChainNameMap = {
  ETH: 'Ethereum',
  AVAX: 'Avalanche',
  ARB: 'Arbitrum',

  ETHEREUM: 'Ethereum',
  ARBITRUM: 'Arbitrum',
  OPTIMISM: 'Optimism',
}

/**
 * Array of all the supported chain IDs
 */
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(
  SupportedChainId
).filter((id) => typeof id === 'number') as SupportedChainId[]

/**
 * List of Circle-defined IDs referring to specific domains
 */
export enum DestinationDomain {
  ETH = 0,
  AVAX = 1,
  ARB = 3,

  ETHEREUM = 0,
  ARBITRUM = 3,
  OPTIMISM = 2,
}

// https://eips.ethereum.org/EIPS/eip-3085
interface AddEthereumChainParameter {
  chainId: string
  blockExplorerUrls?: string[]
  chainName?: string
  iconUrls?: string[]
  nativeCurrency?: {
    name: string
    symbol: string
    decimals: number
  }
  rpcUrls?: string[]
}

/*
const ETH_GOERLI: AddEthereumChainParameter = {
  chainId: '0x5',
  blockExplorerUrls: ['https://goerli.etherscan.io'],
  chainName: 'Goerli Test Network',
  nativeCurrency: {
    name: 'Goerli ETH',
    symbol: 'gorETH',
    decimals: 18,
  },
  rpcUrls: ['https://goerli.infura.io/v3/'],
}

const AVAX_FUJI: AddEthereumChainParameter = {
  chainId: '0xa869',
  blockExplorerUrls: ['https://testnet.snowtrace.io/'],
  chainName: 'Avalanche FUJI C-Chain',
  nativeCurrency: {
    name: 'Avalanche',
    symbol: 'AVAX',
    decimals: 18,
  },
  rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
}

const ARB_GOERLI: AddEthereumChainParameter = {
  chainId: SupportedChainIdHex.ARB_GOERLI,
  blockExplorerUrls: ['https://goerli.arbiscan.io/'],
  chainName: 'Arbitrum Goerli Testnet',
  nativeCurrency: {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: ['https://arb-goerli.g.alchemy.com/v2/demo'],
}
*/

const ETH_MAINNET: AddEthereumChainParameter = {
  chainId: SupportedChainIdHex.ETH_MAINNET,
  blockExplorerUrls: ['https://etherscan.io/'],
  chainName: 'Ethereum Mainnet',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: ['https://ethereum.publicnode.com/'],
}

const OPTIMISM_MAINNET: AddEthereumChainParameter = {
  chainId: SupportedChainIdHex.OPTIMISM_MAINNET,
  blockExplorerUrls: ['https://explorer.optimism.io/'],
  chainName: 'Optimism Mainnet',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: ['https://mainnet.optimism.io/'],
}

const ARB_MAINNET: AddEthereumChainParameter = {
  chainId: SupportedChainIdHex.ARB_MAINNET,
  blockExplorerUrls: ['https://arbiscan.io/'],
  chainName: 'Arbitrum Mainnet',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: ['https://arb1.arbitrum.io/rpc'],
}

interface ChainIdToChainParameters {
  [key: string]: AddEthereumChainParameter
}

export const CHAIN_ID_HEXES_TO_PARAMETERS: ChainIdToChainParameters = {
  [SupportedChainIdHex.ETH_MAINNET]: ETH_MAINNET,
  [SupportedChainIdHex.OPTIMISM_MAINNET]: OPTIMISM_MAINNET,
  [SupportedChainIdHex.ARB_MAINNET]: ARB_MAINNET,
}
