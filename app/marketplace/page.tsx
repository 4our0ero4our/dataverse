'use client'

import { useState } from 'react'
import { MarketplaceNavbar } from '@/app/components/layout/MarketplaceNavbar'
import { MarketplaceSearchFilters } from '@/app/components/layout/MarketplaceSearchFilters'
import { MarketplaceGrid } from '@/app/components/layout/MarketplaceGrid'
import { WhyDataVerse } from '@/app/components/layout/WhyDataVerse'

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Category')
  const [selectedFileType, setSelectedFileType] = useState('File Type')
  const [selectedSort, setSelectedSort] = useState('Sort')
  const [isVerifiedOnly, setIsVerifiedOnly] = useState(false)

  return (
    <div 
      className="min-h-screen w-full"
      style={{ 
        background: '#000000'
      }}
    >
      <MarketplaceNavbar />
      <MarketplaceSearchFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedFileType={selectedFileType}
        setSelectedFileType={setSelectedFileType}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        isVerifiedOnly={isVerifiedOnly}
        setIsVerifiedOnly={setIsVerifiedOnly}
      />
      <MarketplaceGrid
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        selectedFileType={selectedFileType}
        selectedSort={selectedSort}
        isVerifiedOnly={isVerifiedOnly}
      />
      <WhyDataVerse />
    </div>
  )
}

