'use client'

/**
 * Navbar Component for Landing Page
 * 
 * This navbar is specifically designed for the landing page with:
 * - Gradient logo (Dataverse)
 * - Navigation links
 * - Connect Wallet and Get Started buttons
 * - Mobile hamburger menu
 */

import Link from 'next/link'
import { useState } from 'react'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav 
      className="w-full relative"
      style={{
        background: 'transparent',
        paddingTop: '24px',
        paddingBottom: '24px',
      }}
    >
      <div 
        className="mx-auto flex items-center justify-between flex-wrap"
        style={{ 
          gap: '10px',
          maxWidth: '1440px',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
        }}
      >
        {/* Logo with gradient */}
        <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
          <span 
            className="font-bold"
            style={{
              background: 'linear-gradient(90deg, #3CC9F0 0%, #8C6FFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: 'clamp(32px, 2vw, 40px)', // Responsive: 24px on mobile, up to 28px on desktop
            }}
          >
            Dataverse
          </span>
        </Link>

        {/* Navigation Links - Hidden on mobile, visible on larger screens */}
        <div className="hidden lg:flex items-center" style={{ gap: '40px' }}>
          <Link 
            href="/marketplace" 
            className="font-medium text-gray-300 hover:text-white transition-colors"
            style={{ fontSize: '14px' }}
          >
            Marketplace
          </Link>
          <Link 
            href="/categories" 
            className="font-medium text-gray-300 hover:text-white transition-colors"
            style={{ fontSize: '14px' }}
          >
            Categories
          </Link>
          <Link 
            href="/how-it-works" 
            className="font-medium text-gray-300 hover:text-white transition-colors"
            style={{ fontSize: '14px' }}
          >
            How It Works
          </Link>
          <Link 
            href="/pricing" 
            className="font-medium text-gray-300 hover:text-white transition-colors"
            style={{ fontSize: '14px' }}
          >
            Pricing
          </Link>
          <Link 
            href="/about" 
            className="font-medium text-gray-300 hover:text-white transition-colors"
            style={{ fontSize: '14px' }}
          >
            About
          </Link>
        </div>

        {/* Desktop Action Buttons - Hidden on mobile */}
        <div className="hidden lg:flex items-center" style={{ gap: '12px' }}>
          {/* Connect Wallet Button - Outlined */}
          <button
            className="px-6 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap"
            style={{
              border: `1px solid #6BB6FF`,
              background: 'transparent',
              color: '#6BB6FF',
              cursor: 'pointer',
              fontSize: '14px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#6BB6FF'
              e.currentTarget.style.color = 'white'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#6BB6FF'
            }}
          >
            Connect Wallet
          </button>

          {/* Get Started Button - Solid */}
          <button
            className="px-6 py-2 rounded-lg font-medium text-white transition-all duration-300 whitespace-nowrap"
            style={{
              background: '#6BB6FF',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#5AA5E6'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#6BB6FF'
            }}
          >
            Get Started
          </button>
        </div>

        {/* Hamburger Menu Button - Visible on mobile */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col items-center justify-center w-8 h-8 text-white"
          aria-label="Toggle menu"
          style={{ cursor: 'pointer' }}
        >
          <span 
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
            }`}
          />
          <span 
            className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span 
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden absolute left-0 right-0 top-full transition-all duration-300 ease-in-out overflow-hidden z-50 ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          background: 'linear-gradient(180deg, #0A1A2E 0%, #162B45 100%)',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
        }}
      >
        <div className="px-6 py-4">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col mb-6" style={{ gap: '16px' }}>
            <Link
              href="/marketplace"
              onClick={closeMobileMenu}
              className="font-medium text-white transition-colors py-2"
              style={{ fontSize: '16px' }}
            >
              Marketplace
            </Link>
            <Link
              href="/categories"
              onClick={closeMobileMenu}
              className="font-medium text-white transition-colors py-2"
              style={{ fontSize: '16px' }}
            >
              Categories
            </Link>
            <Link
              href="/how-it-works"
              onClick={closeMobileMenu}
              className="font-medium text-white transition-colors py-2"
              style={{ fontSize: '16px' }}
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              onClick={closeMobileMenu}
              className="font-medium text-white transition-colors py-2"
              style={{ fontSize: '16px' }}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className="font-medium text-white transition-colors py-2"
              style={{ fontSize: '16px' }}
            >
              About
            </Link>
          </div>

          {/* Mobile Action Buttons */}
          <div className="flex flex-col pt-4 border-t" style={{ gap: '12px', borderColor: 'rgba(156, 163, 175, 0.3)' }}>
            <button
              onClick={closeMobileMenu}
              className="w-full px-6 py-3 rounded-lg font-medium transition-all duration-300"
              style={{
                border: `1px solid #6BB6FF`,
                background: 'transparent',
                color: '#6BB6FF',
                cursor: 'pointer',
                fontSize: '14px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#6BB6FF'
                e.currentTarget.style.color = 'white'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#6BB6FF'
              }}
            >
              Connect Wallet
            </button>
            <button
              onClick={closeMobileMenu}
              className="w-full px-6 py-3 rounded-lg font-medium text-white transition-all duration-300"
              style={{
                background: '#6BB6FF',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#5AA5E6'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#6BB6FF'
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

