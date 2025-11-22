'use client'

import { useCurrentWallet, useWallets, useCurrentAccount, useSuiClient, useConnectWallet, useDisconnectWallet } from '@mysten/dapp-kit'
import { useEffect, useState } from 'react'

// Helper to truncate address
const truncate = (addr: string) => `${addr.slice(0, 6)}...${addr.slice(-4)}`

export function ConnectWallet() {
    const { connectionStatus, currentWallet, isConnected } = useCurrentWallet()
    const wallets = useWallets()
    const currentAccount = useCurrentAccount()
    const client = useSuiClient()
    const { mutate: connect, isPending: isConnecting } = useConnectWallet()
    const { mutate: disconnect } = useDisconnectWallet()
    const [balance, setBalance] = useState<string>('')

    // Fetch balance when account changes
    useEffect(() => {
        async function fetchBalance() {
            if (currentAccount?.address && client) {
                try {
                    // Get all coins for the address
                    const coins = await client.getCoins({
                        owner: currentAccount.address,
                        coinType: '0x2::sui::SUI',
                    })
                    
                    // Sum all balances
                    const total = coins.data.reduce((sum, coin) => {
                        return sum + BigInt(coin.balance || 0)
                    }, BigInt(0))
                    
                    // Convert from MIST (1 SUI = 10^9 MIST)
                    const sui = Number(total) / 1_000_000_000
                    setBalance(sui.toFixed(3))
                } catch (e) {
                    console.error('Failed to fetch balance', e)
                    setBalance('0.000')
                }
            } else {
                setBalance('')
            }
        }
        fetchBalance()
        
        // Also set up a polling interval to refresh balance
        const interval = setInterval(fetchBalance, 10000) // Refresh every 10 seconds
        
        return () => clearInterval(interval)
    }, [currentAccount?.address, client])

    // Handle wallet connection
    const handleConnect = async () => {
        if (wallets.length === 0) {
            alert('No wallets found. Please install a Sui wallet extension like Sui Wallet or Suiet.')
            return
        }

        // Select the first available wallet
        const wallet = wallets[0]
        
        // Connect using the connect mutation
        connect(
            { wallet },
            {
                onError: (error) => {
                    console.error('Failed to connect wallet:', error)
                    alert('Failed to connect wallet. Please try again.')
                },
            }
        )
    }

    const handleDisconnect = () => {
        disconnect(undefined, {
            onSuccess: () => {
                setBalance('')
            },
        })
    }

    // If connected, show wallet address and balance
    if (isConnected && currentAccount) {
        return (
            <div className="flex items-center gap-3">
                {/* Wallet Address - Clickable to disconnect */}
                <button
                    onClick={handleDisconnect}
                    className="px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300"
                    style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#FFFFFF',
                        cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)'
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                    }}
                >
                    {truncate(currentAccount.address)}
                </button>
                
                {/* Balance */}
                {balance && (
                    <div 
                        className="px-4 py-2 rounded-lg text-sm font-medium"
                        style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: '#FFFFFF',
                            cursor: 'default',
                        }}
                    >
                        {balance} SUI
                    </div>
                )}
            </div>
        )
    }

    // Connect Wallet Button
    return (
        <button
            onClick={handleConnect}
            disabled={isConnecting}
            className="px-6 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap"
            style={{
                border: '1px solid #FFFFFF',
                background: 'transparent',
                color: '#FFFFFF',
                cursor: isConnecting ? 'not-allowed' : 'pointer',
                fontSize: '14px',
                opacity: isConnecting ? 0.6 : 1,
            }}
            onMouseEnter={(e) => {
                if (!isConnecting) {
                    e.currentTarget.style.background = '#FFFFFF'
                    e.currentTarget.style.color = '#000000'
                }
            }}
            onMouseLeave={(e) => {
                if (!isConnecting) {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = '#FFFFFF'
                }
            }}
        >
            {isConnecting ? 'Connecting...' : 'Connect Wallet'}
        </button>
    )
}
