/**
 * Application constants
 */

export const APP_CONFIG = {
  name: 'Dataverse',
  version: '0.1.0',
  description: 'Fullstack Next.js Web3 Application',
} as const

export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  WALLET: '/wallet',
  TRANSACTIONS: '/transactions',
  AUTH: '/auth',
  PROFILE: '/profile',
} as const

export const API_ROUTES = {
  AUTH: {
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    REGISTER: '/api/auth/register',
  },
  USERS: {
    PROFILE: '/api/users/profile',
  },
  TRANSACTIONS: {
    LIST: '/api/transactions',
    CREATE: '/api/transactions',
  },
  WEB3: {
    CONNECT: '/api/web3/connect',
    DISCONNECT: '/api/web3/disconnect',
  },
  WALLET: {
    BALANCE: '/api/wallet/balance',
    ADDRESS: '/api/wallet/address',
  },
} as const

