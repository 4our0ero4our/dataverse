# Library

This directory contains shared libraries and utilities.

## Structure

- **web3/**: Web3 utilities and helpers
- **sui/**: Sui SDK integration and utilities
- **walrus/**: Walrus wallet integration
- **api/**: API client utilities
- **contracts/**: Smart contract interaction utilities
- **wallet/**: Wallet management utilities
- **database/**: Database connection and utilities
- **validations/**: Validation schemas and utilities

## Usage

Import libraries using the path alias:
```typescript
import { connectWallet } from '@/app/lib/wallet'
import { suiClient } from '@/app/lib/sui'
```

