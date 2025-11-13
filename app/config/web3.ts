/**
 * Web3 configuration
 */

export const WEB3_CONFIG = {
  // Sui Network Configuration
  SUI: {
    MAINNET: {
      rpcUrl: process.env.NEXT_PUBLIC_SUI_MAINNET_RPC_URL || 'https://fullnode.mainnet.sui.io',
      chainId: 'sui:mainnet',
    },
    TESTNET: {
      rpcUrl: process.env.NEXT_PUBLIC_SUI_TESTNET_RPC_URL || 'https://fullnode.testnet.sui.io',
      chainId: 'sui:testnet',
    },
    DEVNET: {
      rpcUrl: process.env.NEXT_PUBLIC_SUI_DEVNET_RPC_URL || 'https://fullnode.devnet.sui.io',
      chainId: 'sui:devnet',
    },
  },
  
  // Default network
  defaultNetwork: process.env.NEXT_PUBLIC_DEFAULT_NETWORK || 'testnet',
  
  // Wallet configuration
  wallets: {
    walrus: {
      name: 'Walrus',
      id: 'walrus',
    },
    // Add other wallet configurations as needed
  },
} as const

export type SuiNetwork = 'mainnet' | 'testnet' | 'devnet'

export function getSuiConfig(network: SuiNetwork = WEB3_CONFIG.defaultNetwork as SuiNetwork) {
  return WEB3_CONFIG.SUI[network.toUpperCase() as keyof typeof WEB3_CONFIG.SUI]
}

