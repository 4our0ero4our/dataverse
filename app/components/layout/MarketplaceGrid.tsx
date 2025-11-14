'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Dataset {
  id: number
  title: string
  description: string
  price: string
  tags: string[]
  category: string
  fileType: string
  verified: boolean
  image: string
}

const allDatasets: Dataset[] = [
  {
    id: 1,
    title: 'Global Crypto Transactions - Q1 2025',
    description: 'Real-time blockchain transaction metrics and price volatility across major cryptocurrencies.',
    price: '$400',
    tags: ['Finance', 'Crypto', 'CSV'],
    category: 'Financial Data',
    fileType: 'CSV',
    verified: true,
    image: '/images/global_crypto_transactions.png',
  },
  {
    id: 2,
    title: 'City Mobility Trends',
    description: 'Ride-hailing demand, public transport data, and traffic flow analysis',
    price: 'FREE',
    tags: ['Mobility', 'Urban data', 'JSON'],
    category: 'Environmental',
    fileType: 'JSON',
    verified: true,
    image: '/images/city_mobility_trends.png',
  },
  {
    id: 3,
    title: 'E-commerce Ad Performance - Q2 2024',
    description: 'Aggregated campaign-level ad performance across Meta, Google, and TikTok Ads',
    price: '$590',
    tags: ['Marketing', 'Analytics', 'CSV'],
    category: 'E-commerce',
    fileType: 'CSV',
    verified: true,
    image: '/images/ecommerce_ads_performance.png',
  },
  {
    id: 4,
    title: 'Global Nutrition Survey - WHO 2023',
    description: 'Global Nutrition Survey - WHO 2023.',
    price: '$390',
    tags: ['Nutrition', 'Health', 'CSV'],
    category: 'Healthcare',
    fileType: 'CSV',
    verified: true,
    image: '/images/global_nutrition_survey.png',
  },
  {
    id: 5,
    title: 'African Climate Patterns - 2000-2024',
    description: 'Temperature, rainfall, and air quality data aggregated from African regional monitoring stations.',
    price: 'FREE',
    tags: ['Climate', 'Environment', 'JSON'],
    category: 'Environmental',
    fileType: 'JSON',
    verified: true,
    image: '/images/africa_climate_patterns.png',
  },
  {
    id: 6,
    title: 'Customer Sentiment - Annotated Tweets Dataset',
    description: '500K tweets labeled for positive, neutral, and negative sentiment - perfect for NLP models.',
    price: '$290',
    tags: ['AI', 'Machine learning', 'JSON'],
    category: 'AI & Machine Learning',
    fileType: 'JSON',
    verified: true,
    image: '/images/customer_sentiment.png',
  },
  {
    id: 7,
    title: 'Renewable Energy Index - 2018-2024',
    description: 'Power generation and renewable usage rates across emerging markets with year-on-year trends.',
    price: '$450',
    tags: ['Energy', 'Sustainability', 'CSV'],
    category: 'Environmental',
    fileType: 'CSV',
    verified: true,
    image: '/images/renewable_energy_index.png',
  },
  {
    id: 8,
    title: 'Retail Demand Forecast - Global 2025',
    description: 'AI-predicted product demand across key retail sectors using seasonal trend data.',
    price: '$690',
    tags: ['AI', 'Forecasting', 'Datasets'],
    category: 'AI & Machine Learning',
    fileType: 'CSV',
    verified: true,
    image: '/images/retail_demand_forecast.png',
  },
  {
    id: 9,
    title: 'Cybersecurity Threat Index - 2024',
    description: 'Monitored and classified cyber incidents across 50 countries - risk-level insights included.',
    price: '$550',
    tags: ['Security', 'Technology', 'JSON'],
    category: 'AI & Machine Learning',
    fileType: 'JSON',
    verified: true,
    image: '/images/cybersecurity_threat_index.png',
  },
]

interface MarketplaceGridProps {
  searchQuery: string
  selectedCategory: string
  selectedFileType: string
  selectedSort: string
  isVerifiedOnly: boolean
}

export function MarketplaceGrid({
  searchQuery,
  selectedCategory,
  selectedFileType,
  selectedSort,
  isVerifiedOnly,
}: MarketplaceGridProps) {
  const [filteredDatasets, setFilteredDatasets] = useState<Dataset[]>(allDatasets)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(9)

  // Set items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(3)
      } else {
        setItemsPerPage(9)
      }
    }

    updateItemsPerPage()
    window.addEventListener('resize', updateItemsPerPage)
    return () => window.removeEventListener('resize', updateItemsPerPage)
  }, [])

  useEffect(() => {
    let filtered = [...allDatasets]

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (dataset) =>
          dataset.title.toLowerCase().includes(query) ||
          dataset.description.toLowerCase().includes(query) ||
          dataset.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    }

    // Category filter
    if (selectedCategory !== 'Category' && selectedCategory !== 'All Categories') {
      filtered = filtered.filter((dataset) => dataset.category === selectedCategory)
    }

    // File type filter
    if (selectedFileType !== 'File Type' && selectedFileType !== 'All File Types') {
      filtered = filtered.filter((dataset) => dataset.fileType === selectedFileType)
    }

    // Verified filter
    if (isVerifiedOnly) {
      filtered = filtered.filter((dataset) => dataset.verified)
    }

    // Sort
    if (selectedSort !== 'Sort') {
      switch (selectedSort) {
        case 'Price: Low to High':
          filtered.sort((a, b) => {
            const priceA = a.price === 'FREE' ? 0 : parseInt(a.price.replace('$', ''))
            const priceB = b.price === 'FREE' ? 0 : parseInt(b.price.replace('$', ''))
            return priceA - priceB
          })
          break
        case 'Price: High to Low':
          filtered.sort((a, b) => {
            const priceA = a.price === 'FREE' ? 0 : parseInt(a.price.replace('$', ''))
            const priceB = b.price === 'FREE' ? 0 : parseInt(b.price.replace('$', ''))
            return priceB - priceA
          })
          break
        case 'Newest First':
          filtered.sort((a, b) => b.id - a.id)
          break
        case 'Oldest First':
          filtered.sort((a, b) => a.id - b.id)
          break
        case 'Most Popular':
          // For now, just maintain order
          break
        case 'Largest Size':
          // Placeholder - would need size data
          break
        case 'Smallest Size':
          // Placeholder - would need size data
          break
        default:
          // Relevance - maintain original order
          break
      }
    }

    setFilteredDatasets(filtered)
    setCurrentPage(1) // Reset to first page when filters change
  }, [searchQuery, selectedCategory, selectedFileType, selectedSort, isVerifiedOnly])

  return (
    <section 
      className="w-full"
      style={{
        background: '#000000',
        paddingTop: 'clamp(40px, 5vw, 60px)',
        paddingBottom: 'clamp(60px, 8vw, 100px)',
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
        {/* Results Count */}
        <div className="mb-6">
          <p 
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            {filteredDatasets.length} {filteredDatasets.length === 1 ? 'dataset' : 'datasets'} found
          </p>
        </div>

        {/* Grid */}
        {filteredDatasets.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredDatasets
                .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                .map((dataset) => (
              <div
                key={dataset.id}
                className="rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: '#1a1a1a',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '10px',
                }}
              >
                {/* Image */}
                <div 
                  className="relative w-full"
                  style={{
                    aspectRatio: '16/9',
                    background: '#2a2a2a',
                    borderRadius: '10px',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={dataset.image}
                    alt={dataset.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="py-3 flex flex-col flex-1">
                  {/* Title and Verified Badge */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 
                      className="font-bold text-white flex-1"
                      style={{
                        fontSize: 'clamp(16px, 1.8vw, 18px)',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        lineHeight: '1.3',
                      }}
                    >
                      {dataset.title}
                    </h3>
                    {dataset.verified && (
                      <span
                        className="px-2 py-1 rounded text-xs font-medium whitespace-nowrap"
                        style={{
                          background: 'rgba(255, 255, 255, 0.15)',
                          color: '#FFFFFF',
                          fontSize: '12px',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                        }}
                      >
                        Verified
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p 
                    className="mb-4 flex-1"
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: 'clamp(13px, 1.4vw, 14px)',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      lineHeight: '1.5',
                    }}
                  >
                    {dataset.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {dataset.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontSize: '12px',
                          fontFamily: 'system-ui, -apple-system, sans-serif',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                    <span
                      className="font-bold"
                      style={{
                        color: '#FFFFFF',
                        fontSize: 'clamp(18px, 2vw, 20px)',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                      }}
                    >
                      {dataset.price}
                    </span>
                    <button
                      className="px-4 py-2 rounded-lg font-medium transition-all duration-300"
                      style={{
                        background: '#FFFFFF',
                        color: '#000000',
                        border: 'none',
                        fontSize: '14px',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#E5E5E5'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#FFFFFF'
                      }}
                    >
                      View details
                    </button>
                  </div>
                </div>
              </div>
                ))}
            </div>

            {/* Pagination */}
            {filteredDatasets.length > itemsPerPage && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                {/* Results Info */}
                <div>
                  <p 
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: 'clamp(13px, 1.4vw, 14px)',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredDatasets.length)} of {filteredDatasets.length} datasets
                  </p>
                </div>

                {/* Pagination Controls */}
                <div className="flex items-center gap-2">
                  {/* Previous Button */}
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg font-medium transition-all duration-300"
                    style={{
                      background: currentPage === 1 ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      color: currentPage === 1 ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.7)',
                      fontSize: '14px',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      if (currentPage !== 1) {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)'
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentPage !== 1) {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
                      }
                    }}
                  >
                    Previous
                  </button>

                  {/* Page Numbers */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: Math.ceil(filteredDatasets.length / itemsPerPage) }, (_, i) => i + 1)
                      .filter((page) => {
                        const totalPages = Math.ceil(filteredDatasets.length / itemsPerPage)
                        // Show first page, last page, current page, and pages around current
                        return (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        )
                      })
                      .map((page, index, array) => {
                        // Add ellipsis if there's a gap
                        const showEllipsisBefore = index > 0 && array[index] - array[index - 1] > 1
                        return (
                          <div key={page} className="flex items-center gap-1">
                            {showEllipsisBefore && (
                              <span
                                style={{
                                  color: 'rgba(255, 255, 255, 0.5)',
                                  fontSize: '14px',
                                  padding: '0 4px',
                                }}
                              >
                                ...
                              </span>
                            )}
                            <button
                              onClick={() => setCurrentPage(page)}
                              className="px-3 py-2 rounded-lg font-medium transition-all duration-300"
                              style={{
                                background: currentPage === page ? '#FFFFFF' : 'transparent',
                                color: currentPage === page ? '#000000' : 'rgba(255, 255, 255, 0.7)',
                                border: currentPage === page ? 'none' : '1px solid rgba(255, 255, 255, 0.3)',
                                fontSize: '14px',
                                fontFamily: 'system-ui, -apple-system, sans-serif',
                                cursor: 'pointer',
                                minWidth: '40px',
                              }}
                              onMouseEnter={(e) => {
                                if (currentPage !== page) {
                                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)'
                                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (currentPage !== page) {
                                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
                                }
                              }}
                            >
                              {page}
                            </button>
                          </div>
                        )
                      })}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(Math.ceil(filteredDatasets.length / itemsPerPage), prev + 1))}
                    disabled={currentPage === Math.ceil(filteredDatasets.length / itemsPerPage)}
                    className="px-4 py-2 rounded-lg font-medium transition-all duration-300"
                    style={{
                      background: currentPage === Math.ceil(filteredDatasets.length / itemsPerPage) ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      color: currentPage === Math.ceil(filteredDatasets.length / itemsPerPage) ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.7)',
                      fontSize: '14px',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      cursor: currentPage === Math.ceil(filteredDatasets.length / itemsPerPage) ? 'not-allowed' : 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      if (currentPage !== Math.ceil(filteredDatasets.length / itemsPerPage)) {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)'
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentPage !== Math.ceil(filteredDatasets.length / itemsPerPage)) {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
                      }
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <p 
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
            >
              No datasets found matching your filters.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

