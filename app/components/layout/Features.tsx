'use client'

import { useEffect, useRef, useState } from 'react'
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
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-scroll functionality for mobile
  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollIntervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const next = (prev + 1) % features.length
          // Scroll to the next card
          if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            const cardWidth = container.offsetWidth
            const scrollLeft = next * cardWidth
            
            container.scrollTo({
              left: scrollLeft,
              behavior: 'smooth',
            })
          }
          return next
        })
      }, 3000) // Change card every 3 seconds
    }

    // Only auto-scroll on mobile
    const checkAndStart = () => {
      const isMobile = window.innerWidth < 1024
      if (isMobile && scrollContainerRef.current) {
        // Reset scroll position
        scrollContainerRef.current.scrollLeft = 0
        setCurrentIndex(0)
        startAutoScroll()
      }
    }

    // Initial check
    checkAndStart()

    // Handle window resize
    const handleResize = () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
        autoScrollIntervalRef.current = null
      }
      checkAndStart()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft
      const cardWidth = scrollContainerRef.current.offsetWidth
      const newIndex = Math.round(scrollLeft / cardWidth)
      setCurrentIndex(newIndex)
      
      // Pause auto-scroll when user manually scrolls
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
        autoScrollIntervalRef.current = null
        
        // Resume auto-scroll after 5 seconds of no manual scrolling
        setTimeout(() => {
          if (window.innerWidth < 1024 && scrollContainerRef.current) {
            autoScrollIntervalRef.current = setInterval(() => {
              setCurrentIndex((prev) => {
                const next = (prev + 1) % features.length
                if (scrollContainerRef.current) {
                  const container = scrollContainerRef.current
                  const cardWidth = container.offsetWidth
                  const scrollLeft = next * cardWidth
                  
                  container.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth',
                  })
                }
                return next
              })
            }, 3000)
          }
        }, 5000)
      }
    }
  }

  return (
    <section 
      className="w-full relative"
      style={{
        background: '#1e2c40',
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
              className="rounded-xl"
              style={{
                background: '#303d4f',
                paddingTop: '70px',
                paddingBottom: '70px',
                paddingLeft: '24px',
                paddingRight: '24px',
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

        {/* Mobile Carousel - Same design as desktop */}
        <div className="lg:hidden relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            onScroll={handleScroll}
          >
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex-shrink-0 w-full px-3 snap-center"
              >
                <div
                  className="rounded-xl mx-auto"
                  style={{
                    background: '#303d4f',
                    maxWidth: '320px',
                    paddingTop: '32px',
                    paddingBottom: '32px',
                    paddingLeft: '24px',
                    paddingRight: '24px',
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
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {features.map((_, index) => (
              <button
                key={index}
                className="rounded-full transition-all duration-300"
                style={{
                  width: index === currentIndex ? '12px' : '8px',
                  height: '8px',
                  background: index === currentIndex ? 'white' : 'rgba(255, 255, 255, 0.4)',
                }}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const cardWidth = scrollContainerRef.current.offsetWidth
                    scrollContainerRef.current.scrollTo({
                      left: index * cardWidth,
                      behavior: 'smooth',
                    })
                  }
                  setCurrentIndex(index)
                }}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
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

