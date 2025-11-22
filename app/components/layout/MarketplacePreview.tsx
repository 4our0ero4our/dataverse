'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { MdVerified } from "react-icons/md";

interface Dataset {
  id: number
  icon: string
  title: string
  description: string
  category: string
  size: string
  price: string
}

const datasets: Dataset[] = [
  {
    id: 1,
    icon: '/images/global_climate_patterns.png',
    title: 'Global Climate Patterns',
    description: 'Comprehensive data on temperature, precipitation, and sea levels across continents.',
    category: 'Environmental',
    size: '2.5 GB',
    price: '2.4 SUI',
  },
  {
    id: 2,
    icon: '/images/financial_market_trends.png',
    title: 'Financial Market Trends 2025',
    description: 'Daily stock prices, trading volumes, and macroeconomic indicators for the last year.',
    category: 'Finance',
    size: '1.8 GB',
    price: '4.5 SUI',
  },
  {
    id: 3,
    icon: '/images/ai_training_image_pack.png',
    title: 'AI Training Image Pack',
    description: 'A collection of high-resolution images categorized for machine learning object detection.',
    category: 'AI Data',
    size: '7.1 GB',
    price: '7.0 SUI',
  },
  {
    id: 4,
    icon: '/images/global_population_demographics.png',
    title: 'Global Population Demographics',
    description: 'Detailed demographic data including age, gender, and regional distribution by country.',
    category: 'Demographics',
    size: '2.5 GB',
    price: '2.4 SUI',
  },
]

export function MarketplacePreview() {
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
      setCurrentIndex(Math.min(newIndex, datasets.length - 1))
    }
  }

  return (
    <section
      className="w-full relative"
      style={{
        background: '#2a2a2a', // Dark gray background
        paddingTop: 'clamp(60px, 8vw, 120px)',
        paddingBottom: 'clamp(60px, 8vw, 120px)',
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
        {/* Heading Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2
            className="font-bold text-white mb-4 md:mb-6"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: 'clamp(28px, 4vw, 48px)',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
            }}
          >
            Discover high-quality, verified datasets.
          </h2>
          <p
            className="text-gray-300"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: 'clamp(16px, 1.8vw, 20px)',
              color: '#FFFFFF',
              lineHeight: '1.5',
            }}
          >
            Browse data assets uploaded by trusted creators.
          </p>
        </div>

        {/* Desktop Grid - 4 columns */}
        <div className="hidden lg:grid grid-cols-4 gap-4 xl:gap-6">
          {datasets.map((dataset) => (
            <div
              key={dataset.id}
              className="rounded-xl transition-all duration-300 hover:transform hover:scale-[1.02]"
              style={{
                background: '#000000',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1)',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Icon */}
              <div
                className="relative mb-4"
                style={{
                  width: '100%',
                  height: '80px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '30px',
                }}
              >
                <div className="relative" style={{
                  backgroundColor: '#404040',
                  borderRadius: '8px',
                  padding: '10px 20px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '80px',
                  minWidth: '80px',
                }}>
                  <Image
                    src={dataset.icon}
                    alt={dataset.title}
                    width={80}
                    height={80}
                    className="object-contain"
                    style={{
                      borderRadius: '4px',
                    }}
                  />
                </div>
              </div>

              {/* Title */}
              <h3
                className="font-bold text-white mb-2"
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontSize: '18px',
                  lineHeight: '1.3',
                }}
              >
                {dataset.title}
              </h3>

              {/* Description */}
              <p
                className="mb-4"
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  color: 'rgba(255, 255, 255, 0.7)',
                  flexGrow: 1,
                }}
              >
                {dataset.description}
              </p>

              {/* Category, Size and Verification - All on same line */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    background: 'rgba(59, 130, 246, 0.15)',
                    color: '#60a5fa',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                  }}
                >
                  {dataset.category}
                </span>
                <div className="flex items-center gap-2">
                  <span
                    style={{
                      fontSize: '14px',
                      color: '#FFFFFF',
                    }}
                  >
                    {dataset.size}
                  </span>
                  <MdVerified color='#FFFFFF' size={16} />
                </div>
              </div>

              {/* Price */}
              <div className="mb-4" style={{ marginTop: 'auto' }}>
                <span
                  className="font-bold"
                  style={{
                    fontSize: '20px',
                    color: '#FFFFFF',
                  }}
                >
                  {dataset.price}
                </span>
              </div>

              {/* View Dataset Button */}
              <button
                className="w-full py-2.5 rounded-lg font-medium transition-all duration-300"
                style={{
                  background: 'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)',
                  border: 'none',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(59, 130, 246, 0.25)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.35)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)'
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(59, 130, 246, 0.25)'
                }}
              >
                View Dataset
              </button>
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
            {datasets.map((dataset, index) => {
              const isActive = index === currentIndex
              return (
                <div
                  key={dataset.id}
                  className="flex-shrink-0 snap-center"
                  style={{
                    width: 'calc(100vw - 80px)',
                    maxWidth: '320px',
                    marginRight: index < datasets.length - 1 ? '-60px' : '0',
                    zIndex: isActive ? 10 : Math.max(1, 5 - index),
                    transform: isActive ? 'scale(1)' : 'scale(0.95)',
                    transition: 'transform 0.3s ease-out',
                  }}
                >
                  <div
                    className="rounded-xl w-full transition-all duration-300"
                    style={{
                      background: '#000000',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: isActive
                        ? '0 10px 30px rgba(255, 255, 255, 0.2)'
                        : '0 4px 15px rgba(255, 255, 255, 0.1)',
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      opacity: isActive ? 1 : 0.7,
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="relative mb-4"
                      style={{
                        width: '100%',
                        height: '80px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <div className="relative" style={{ width: '64px', height: '64px' }}>
                        <Image
                          src={dataset.icon}
                          alt={dataset.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className="font-bold text-white mb-2"
                      style={{
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        fontSize: '18px',
                        lineHeight: '1.3',
                      }}
                    >
                      {dataset.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="mb-4"
                      style={{
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        fontSize: '14px',
                        lineHeight: '1.5',
                        color: 'rgba(255, 255, 255, 0.7)',
                        minHeight: '60px',
                      }}
                    >
                      {dataset.description}
                    </p>

                    {/* Category, Size and Verification - All on same line */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                        style={{
                          background: 'rgba(57, 198, 244, 0.15)',
                          color: '#FFFFFF',
                          border: '1px solid #FFFFFF',
                        }}
                      >
                        {dataset.category}
                      </span>
                      <div className="flex items-center gap-2">
                        <span
                          style={{
                            fontSize: '14px',
                            color: '#FFFFFF',
                          }}
                        >
                          {dataset.size}
                        </span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3333 4L6 11.3333L2.66667 8"
                            stroke="#FFFFFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-4" style={{ marginTop: 'auto' }}>
                      <span
                        className="font-bold"
                        style={{
                          fontSize: '20px',
                          color: '#FFFFFF',
                        }}
                      >
                        {dataset.price}
                      </span>
                    </div>

                    {/* View Dataset Button */}
                    <button
                      className="w-full py-2.5 rounded-lg font-medium transition-all duration-300"
                      style={{
                        background: '#000000',
                        border: '1px solid #FFFFFF',
                        color: '#FFFFFF',
                        fontSize: '14px',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#FFFFFF'
                        e.currentTarget.style.color = '#000000'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#000000'
                        e.currentTarget.style.color = '#FFFFFF'
                      }}
                    >
                      View Dataset
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {datasets.map((_, index) => (
              <button
                key={index}
                className="rounded-full transition-all duration-300"
                style={{
                  width: index === currentIndex ? '12px' : '8px',
                  height: '8px',
                  background: index === currentIndex ? '#FFFFFF' : 'rgba(255, 255, 255, 0.4)',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const containerWidth = scrollContainerRef.current.offsetWidth
                    const cardWidth = Math.min(containerWidth - 80, 320)
                    const overlap = 60
                    const scrollDistance = cardWidth - overlap
                    scrollContainerRef.current.scrollTo({
                      left: index * scrollDistance,
                      behavior: 'smooth',
                    })
                  }
                  setCurrentIndex(index)
                }}
                aria-label={`Go to dataset ${index + 1}`}
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

