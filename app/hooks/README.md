# Hooks

This directory contains custom React hooks.

## Structure

- **web3/**: Web3-specific hooks (useWallet, useTransaction, etc.)

## Usage

Import hooks using the path alias:
```typescript
import { useWallet } from '@/app/hooks/web3/useWallet'
import { useSui } from '@/app/hooks/web3/useSui'
```

## Example

```typescript
// app/hooks/web3/useWallet.ts
export function useWallet() {
  // Hook implementation
}
```

