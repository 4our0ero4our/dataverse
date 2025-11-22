'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ConnectWallet } from '@/app/components/wallet/ConnectWallet';

export function MarketplaceNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="w-full relative" style={{ background: 'transparent', paddingTop: '24px', paddingBottom: '24px' }}>
      <div className="mx-auto flex items-center justify-between flex-wrap" style={{ gap: '10px', maxWidth: '1440px', paddingLeft: 'clamp(24px,5vw,80px)', paddingRight: 'clamp(24px,5vw,80px)' }}>
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
          <span className="font-bold" style={{ background: 'linear-gradient(90deg,#FFFFFF 0%,#808080 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontSize: 'clamp(32px,2vw,40px)' }}>
            Dataverse
          </span>
        </Link>

        {/* Desktop navigation links */}
        <div className="hidden lg:flex items-center" style={{ gap: '40px' }}>
          <Link href="/marketplace" className="font-medium text-gray-300 hover:text-white transition-colors" style={{ fontSize: '14px' }}>Marketplace</Link>
          <Link href="/#categories" className="font-medium text-gray-300 hover:text-white transition-colors" style={{ fontSize: '14px' }}>Categories</Link>
          <Link href="/#how-it-works" className="font-medium text-gray-300 hover:text-white transition-colors" style={{ fontSize: '14px' }}>How It Works</Link>
          <Link href="/pricing" className="font-medium text-gray-300 hover:text-white transition-colors" style={{ fontSize: '14px' }}>Pricing</Link>
          <Link href="/upload" className="font-medium text-gray-300 hover:text-white transition-colors" style={{ fontSize: '14px' }}>Upload Dataset</Link>
        </div>

        {/* Desktop action buttons */}
        <div className="hidden lg:flex items-center" style={{ gap: '12px' }}>
          <ConnectWallet />
          
          {/* Upload dataset Button - Solid */}
          <button
            className="px-6 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap"
            style={{
              background: '#FFFFFF',
              color: '#000000',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#E5E5E5'
              e.currentTarget.style.color = '#000000'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#FFFFFF'
              e.currentTarget.style.color = '#000000'
            }}
          >
            Upload dataset
          </button>
        </div>

        {/* Mobile menu button */}
        <button onClick={toggleMobileMenu} className="lg:hidden flex flex-col items-center justify-center w-8 h-8 text-white" aria-label="Toggle menu" style={{ cursor: 'pointer' }}>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
          <span className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div className={`lg:hidden absolute left-0 right-0 top-full transition-all duration-300 ease-in-out overflow-hidden z-50 ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`} style={{ background: 'linear-gradient(180deg,#000000 0%,#1a1a1a 100%)', paddingLeft: 'clamp(24px,5vw,80px)', paddingRight: 'clamp(24px,5vw,80px)', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' }}>
        <div className="px-6 py-4">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col mb-6" style={{ gap: '16px' }}>
            <Link href="/marketplace" onClick={closeMobileMenu} className="font-medium text-white transition-colors py-2" style={{ fontSize: '16px' }}>Marketplace</Link>
            <Link href="/#categories" onClick={closeMobileMenu} className="font-medium text-white transition-colors py-2" style={{ fontSize: '16px' }}>Categories</Link>
            <Link href="/#how-it-works" onClick={closeMobileMenu} className="font-medium text-white transition-colors py-2" style={{ fontSize: '16px' }}>How It Works</Link>
            <Link href="/pricing" onClick={closeMobileMenu} className="font-medium text-white transition-colors py-2" style={{ fontSize: '16px' }}>Pricing</Link>
            <Link href="/upload" onClick={closeMobileMenu} className="font-medium text-white transition-colors py-2" style={{ fontSize: '16px' }}>Upload Dataset</Link>
          </div>

          {/* Mobile Action Buttons */}
          <div className="flex flex-col pt-4 border-t" style={{ gap: '12px', borderColor: 'rgba(156, 163, 175, 0.3)' }}>
            <div onClick={closeMobileMenu}>
              <ConnectWallet />
            </div>
            <button
              onClick={closeMobileMenu}
              className="w-full px-6 py-3 rounded-lg font-medium transition-all duration-300"
              style={{
                background: '#FFFFFF',
                color: '#000000',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#E5E5E5'
                e.currentTarget.style.color = '#000000'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FFFFFF'
                e.currentTarget.style.color = '#000000'
              }}
            >
              Upload dataset
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
