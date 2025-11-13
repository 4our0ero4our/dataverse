/**
 * Wallet-related types for Web3 integration
 */

export interface Wallet {
  address: string
  publicKey?: string
  chainId?: string
  isConnected: boolean
}

export interface WalletAccount {
  address: string
  publicKey: string
  chainId: string
}

export interface WalletProvider {
  name: string
  icon?: string
  id: string
}

export type WalletConnectionStatus = 'disconnected' | 'connecting' | 'connected' | 'error'

export interface WalletState {
  account: WalletAccount | null
  status: WalletConnectionStatus
  provider: WalletProvider | null
  error: string | null
}

