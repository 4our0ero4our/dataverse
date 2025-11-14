'use client'

import { useState, useRef, useEffect } from 'react'

const categories = [
  'All Categories',
  'AI & Machine Learning',
  'Computer Vision',
  'Natural Language Processing',
  'Financial Data',
  'Environmental',
  'Demographics',
  'Healthcare',
  'E-commerce',
  'Social Media',
]

const fileTypes = [
  'All File Types',
  'CSV',
  'JSON',
  'Parquet',
  'Excel',
  'SQL Database',
  'Images',
  'Video',
  'Audio',
  'Text',
]

const sortOptions = [
  'Relevance',
  'Price: Low to High',
  'Price: High to Low',
  'Newest First',
  'Oldest First',
  'Most Popular',
  'Largest Size',
  'Smallest Size',
]

interface MarketplaceSearchFiltersProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  selectedFileType: string
  setSelectedFileType: (fileType: string) => void
  selectedSort: string
  setSelectedSort: (sort: string) => void
  isVerifiedOnly: boolean
  setIsVerifiedOnly: (verified: boolean) => void
}

export function MarketplaceSearchFilters({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedFileType,
  setSelectedFileType,
  selectedSort,
  setSelectedSort,
  isVerifiedOnly,
  setIsVerifiedOnly,
}: MarketplaceSearchFiltersProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const categoryRef = useRef<HTMLDivElement>(null)
  const fileTypeRef = useRef<HTMLDivElement>(null)
  const sortRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoryRef.current && !categoryRef.current.contains(event.target as Node) &&
        fileTypeRef.current && !fileTypeRef.current.contains(event.target as Node) &&
        sortRef.current && !sortRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    setOpenDropdown(null)
  }

  const handleFileTypeSelect = (fileType: string) => {
    setSelectedFileType(fileType)
    setOpenDropdown(null)
  }

  const handleSortSelect = (sort: string) => {
    setSelectedSort(sort)
    setOpenDropdown(null)
  }

  return (
    <section 
      className="w-full"
      style={{
        background: '#000000',
        paddingTop: 'clamp(32px, 4vw, 48px)',
        paddingBottom: 'clamp(32px, 4vw, 48px)',
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
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
          {/* Search Input - Left Side */}
          <div className="flex-1 relative">
            <div className="relative">
              {/* Magnifying Glass Icon */}
              <div 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 19L14.65 14.65"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              
              {/* Search Input */}
              <input
                type="text"
                placeholder="Search Datasets"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                }}
              />
              <style jsx>{`
                input::placeholder {
                  color: rgba(255, 255, 255, 0.7);
                }
              `}</style>
            </div>
          </div>

          {/* Filter Buttons - Right Side */}
          <div className="flex flex-wrap gap-3 lg:flex-nowrap">
            {/* Category Filter */}
            <div ref={categoryRef} className="relative">
              <button
                className="px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap w-full"
                style={{
                  background: openDropdown === 'category' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  cursor: 'pointer',
                  minWidth: '140px',
                }}
                onClick={() => setOpenDropdown(openDropdown === 'category' ? null : 'category')}
                onMouseEnter={(e) => {
                  if (openDropdown !== 'category') {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)'
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (openDropdown !== 'category') {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
                  }
                }}
              >
                <span>{selectedCategory}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    transform: openDropdown === 'category' ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              
              {/* Category Dropdown */}
              {openDropdown === 'category' && (
                <div
                  className="absolute top-full left-0 mt-2 rounded-lg z-50 overflow-hidden"
                  style={{
                    background: '#1a1a1a',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    minWidth: '200px',
                    maxHeight: '300px',
                    overflowY: 'auto',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="w-full text-left px-4 py-3 transition-all duration-200 hover:bg-white hover:bg-opacity-10"
                      style={{
                        color: selectedCategory === category ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
                        fontSize: '14px',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        cursor: 'pointer',
                        background: selectedCategory === category ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                      }}
                      onClick={() => handleCategorySelect(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* File Type Filter */}
            <div ref={fileTypeRef} className="relative">
              <button
                className="px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap w-full"
                style={{
                  background: openDropdown === 'fileType' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  cursor: 'pointer',
                  minWidth: '140px',
                }}
                onClick={() => setOpenDropdown(openDropdown === 'fileType' ? null : 'fileType')}
                onMouseEnter={(e) => {
                  if (openDropdown !== 'fileType') {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)'
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (openDropdown !== 'fileType') {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
                  }
                }}
              >
                <span>{selectedFileType}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    transform: openDropdown === 'fileType' ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              
              {/* File Type Dropdown */}
              {openDropdown === 'fileType' && (
                <div
                  className="absolute top-full left-0 mt-2 rounded-lg z-50 overflow-hidden"
                  style={{
                    background: '#1a1a1a',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    minWidth: '180px',
                    maxHeight: '300px',
                    overflowY: 'auto',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {fileTypes.map((fileType) => (
                    <button
                      key={fileType}
                      className="w-full text-left px-4 py-3 transition-all duration-200 hover:bg-white hover:bg-opacity-10"
                      style={{
                        color: selectedFileType === fileType ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
                        fontSize: '14px',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        cursor: 'pointer',
                        background: selectedFileType === fileType ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                      }}
                      onClick={() => handleFileTypeSelect(fileType)}
                    >
                      {fileType}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sort Filter */}
            <div ref={sortRef} className="relative">
              <button
                className="px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap w-full"
                style={{
                  background: openDropdown === 'sort' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  cursor: 'pointer',
                  minWidth: '140px',
                }}
                onClick={() => setOpenDropdown(openDropdown === 'sort' ? null : 'sort')}
                onMouseEnter={(e) => {
                  if (openDropdown !== 'sort') {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)'
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (openDropdown !== 'sort') {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
                  }
                }}
              >
                <span>{selectedSort}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    transform: openDropdown === 'sort' ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              
              {/* Sort Dropdown */}
              {openDropdown === 'sort' && (
                <div
                  className="absolute top-full left-0 mt-2 rounded-lg z-50 overflow-hidden"
                  style={{
                    background: '#1a1a1a',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    minWidth: '200px',
                    maxHeight: '300px',
                    overflowY: 'auto',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {sortOptions.map((sort) => (
                    <button
                      key={sort}
                      className="w-full text-left px-4 py-3 transition-all duration-200 hover:bg-white hover:bg-opacity-10"
                      style={{
                        color: selectedSort === sort ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
                        fontSize: '14px',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        cursor: 'pointer',
                        background: selectedSort === sort ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                      }}
                      onClick={() => handleSortSelect(sort)}
                    >
                      {sort}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Verified Only Filter */}
            <button
              className="px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
              style={{
                background: isVerifiedOnly ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: 'clamp(14px, 1.5vw, 16px)',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                cursor: 'pointer',
                minWidth: '130px',
              }}
              onClick={() => setIsVerifiedOnly(!isVerifiedOnly)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)'
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
              }}
            >
              <span>Verified only</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

