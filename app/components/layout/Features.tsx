'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

interface Feature {
  id: number
  title: string
  description: string
  image: string
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Verified Ownership',
    description: 'Every data asset is cryptographically authenticated and tamper-proof',
    image: '/images/verified_ownership_image.png',
  },
  {
    id: 2,
    title: 'Secure Marketplace',
    description: 'Transactions are protected end-to-end for safe buying and selling.',
    image: '/images/secure_marketplace_image.png',
  },
  {
    id: 3,
    title: 'Decentralized Storage',
    description: 'Datasets are stored securely and redundantly on decentralized systems.',
    image: '/images/decentralized_storage_image.png',
  },
  {
    id: 4,
    title: 'Creator Dashboard',
    description: 'Track your dataset performance, earnings, and community ratings.',
    image: '/images/creator_dashboard_image.png',
  },
]

export function Features() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft
      const containerWidth = scrollContainerRef.current.offsetWidth
      const cardWidth = Math.min(containerWidth - 80, 320)
      const overlap = 60
      const scrollDistance = cardWidth - overlap
      const newIndex = Math.round(scrollLeft / scrollDistance)
      setCurrentIndex(Math.min(newIndex, features.length - 1))
    }
  }

  return (
    <section
      className="w-full relative"
      style={{
        background: '#2a2a2a',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: '1440px',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
        }}
      >
        {/* Heading */}
        <h2
          className="text-center font-bold text-white"
          style={{
            fontSize: 'clamp(24px, 3vw, 40px)',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            lineHeight: '1.2',
            marginBottom: '60px',
          }}
        >
          Powerful tools for buying and
          <br />
          selling trusted data.
        </h2>

        {/* Desktop Grid - 4 columns */}
        <div className="hidden lg:grid grid-cols-4 gap-4 xl:gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-xl transition-all duration-300 hover:scale-105"
              style={{
                background: '#1a1a1a',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                paddingTop: '70px',
                paddingBottom: '70px',
                paddingLeft: '24px',
                paddingRight: '24px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)'
              }}
            >
              {/* Icon - Centered at top */}
              <div className="flex justify-center relative" style={{ width: '100%', height: '80px', marginBottom: '24px' }}>
                <div className="relative" style={{ width: '64px', height: '64px' }}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              {/* Title */}
              <h3
                className="font-bold text-white text-center"
                style={{
                  fontSize: '18px',
                  lineHeight: '1.3',
                  marginBottom: '12px',
                }}
              >
                {feature.title}
              </h3>
              {/* Description */}
              <p
                className="text-center"
                style={{
                  fontSize: '14px',
                  lineHeight: '1.5',
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel - Overlapping Cards */}
        <div className="lg:hidden relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              paddingLeft: '24px',
              paddingRight: '24px',
              scrollPaddingLeft: '24px',
              scrollPaddingRight: '24px',
            }}
            onScroll={handleScroll}
          >
            {features.map((feature, index) => {
              const isActive = index === currentIndex
              return (
                <div
                  key={feature.id}
                  className="flex-shrink-0 snap-center"
                  style={{
                    width: 'calc(100vw - 80px)',
                    maxWidth: '320px',
                    marginRight: index < features.length - 1 ? '-60px' : '0',
                    zIndex: isActive ? 10 : Math.max(1, 5 - index),
                    transform: isActive ? 'scale(1)' : 'scale(0.95)',
                    transition: 'transform 0.3s ease-out',
                  }}
                >
                  <div
                    className="rounded-xl w-full transition-all duration-300"
                    style={{
                      background: '#1a1a1a',
                      border: `1px solid ${isActive ? 'rgba(59, 130, 246, 0.5)' : 'rgba(59, 130, 246, 0.2)'}`,
                      paddingTop: '32px',
                      paddingBottom: '32px',
                      paddingLeft: '24px',
                      paddingRight: '24px',
                      opacity: isActive ? 1 : 0.7,
                      boxShadow: isActive
                        ? '0 10px 30px rgba(59, 130, 246, 0.2)'
                        : '0 4px 15px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    {/* Icon - Centered at top, same as desktop */}
                    <div className="flex justify-center relative" style={{ width: '100%', height: '80px', marginBottom: '24px' }}>
                      <div className="relative" style={{ width: '64px', height: '64px' }}>
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    {/* Title */}
                    <h3
                      className="font-bold text-white text-center"
                      style={{
                        fontSize: '18px',
                        lineHeight: '1.3',
                        marginBottom: '12px',
                      }}
                    >
                      {feature.title}
                    </h3>
                    {/* Description */}
                    <p
                      className="text-center"
                      style={{
                        fontSize: '14px',
                        lineHeight: '1.5',
                        color: 'rgba(255, 255, 255, 0.7)',
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

