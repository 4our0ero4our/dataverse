/**
 * Transaction-related types for Web3
 */

export interface Transaction {
  id: string
  hash: string
  from: string
  to: string
  value: string
  status: TransactionStatus
  timestamp: number
  gasUsed?: string
  gasPrice?: string
  blockNumber?: number
}

export type TransactionStatus = 'pending' | 'confirmed' | 'failed' | 'reverted'

export interface TransactionRequest {
  to: string
  value?: string
  data?: string
  gasLimit?: string
  gasPrice?: string
}

export interface TransactionReceipt {
  transactionHash: string
  blockNumber: number
  blockHash: string
  gasUsed: string
  status: boolean
}

