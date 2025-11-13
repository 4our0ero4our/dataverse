# Types

This directory contains TypeScript type definitions and interfaces.

## Structure

- **web3/**: Web3-related types (wallet, transactions, contracts, etc.)

## Usage

Import types using the path alias:
```typescript
import type { Wallet } from '@/app/types/web3/wallet'
import type { Transaction } from '@/app/types/web3/transaction'
```

## Example

```typescript
// app/types/web3/wallet.ts
export interface Wallet {
  address: string
  publicKey: string
  // ...
}
```

