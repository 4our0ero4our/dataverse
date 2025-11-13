'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section 
      className="w-full relative overflow-hidden"
      style={{
        background: 'transparent', // Background comes from page wrapper
        minHeight: 'calc(100vh - 104px)',
      }}
    >
      <div 
        className="mx-auto py-12 md:py-16 lg:py-24"
        style={{
          maxWidth: '1440px',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
          {/* Left Section - Text Content */}
          <div className="flex flex-col space-y-5 md:space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center">
              <span 
                className="px-3 py-1.5 md:px-4 md:py-2 rounded font-medium"
                style={{
                  background: 'rgba(17, 24, 39, 0.8)',
                  color: '#9CA3AF',
                  border: '1px solid rgba(156, 163, 175, 0.2)',
                  fontSize: 'clamp(12px, 1.2vw, 14px)', // Responsive: 12px on mobile, up to 14px on desktop
                }}
              >
                DECENTRALIZED & VERIFIED
              </span>
            </div>

            {/* Main Heading */}
            <h1 
              className="font-bold leading-[1.1] text-white"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                // letterSpacing: '-0.02em',
                lineHeight: '1.1',
                fontSize: 'clamp(38px, 4vw, 72px)', // Responsive: 32px on mobile, scales up to 72px on large screens
              }}
            >
              The Marketplace
              <br />
              for Verified, Secure
              <br />
              Data.
            </h1>

            {/* Description */}
            <p 
              className="text-gray-300 max-w-2xl leading-relaxed"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                color: '#D1D5DB',
                fontSize: 'clamp(16px, 1.5vw, 18px)', // Responsive: 16px on mobile, scales up to 18px on large screens
              }}
            >
              Buy and sell high-quality datasets with transparent verification, decentralized storage, and full ownership.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              {/* Explore Marketplace Button - Solid */}
              <Link
                href="/marketplace"
                className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-3.5 rounded-lg font-medium text-white transition-all duration-300 active:opacity-80 whitespace-nowrap"
                style={{
                  background: '#6BB6FF',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 'clamp(14px, 1.5vw, 16px)', // Responsive: 14px on mobile, up to 16px on desktop
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#5AA5E6'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#6BB6FF'
                }}
              >
                Explore Marketplace
              </Link>

              {/* Connect Wallet Button - Outlined */}
              <button
                className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-3.5 rounded-lg font-medium transition-all duration-300 active:opacity-80 whitespace-nowrap"
                style={{
                  border: `1px solid #6BB6FF`,
                  background: 'transparent',
                  color: '#6BB6FF',
                  cursor: 'pointer',
                  fontSize: 'clamp(14px, 1.5vw, 16px)', // Responsive: 14px on mobile, up to 16px on desktop
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
            </div>
          </div>

          {/* Right Section - Laptop Image */}
          <div className="flex items-center justify-center order-1 lg:order-2 relative">
            <div 
              className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
              style={{
                perspective: '1000px',
              }}
            >
              <div 
                className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] transition-transform duration-300 ease-out"
                style={{
                  transformStyle: 'preserve-3d',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(-15deg) rotateX(5deg)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
                }}
              >
                <Image
                  src="/images/hero_img.png"
                  alt="Dataverse Platform Interface"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

