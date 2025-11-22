'use client'

import { useState } from 'react'
import { MarketplaceNavbar } from '@/app/components/layout/MarketplaceNavbar'
import { Footer } from '@/app/components/layout/Footer'

export default function UploadPage() {
    const [dragActive, setDragActive] = useState(false)
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        tags: [] as string[],
        dataFormat: '',
        price: ''
    })
    const [tagInput, setTagInput] = useState('')

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true)
        } else if (e.type === 'dragleave') {
            setDragActive(false)
        }
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setSelectedFile(e.dataTransfer.files[0])
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0])
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleAddTag = () => {
        if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
            setFormData({
                ...formData,
                tags: [...formData.tags, tagInput.trim()]
            })
            setTagInput('')
        }
    }

    const handleRemoveTag = (tagToRemove: string) => {
        setFormData({
            ...formData,
            tags: formData.tags.filter(tag => tag !== tagToRemove)
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', { ...formData, file: selectedFile })
    }

    return (
        <div
            className="min-h-screen w-full flex flex-col"
            style={{
                background: 'linear-gradient(180deg, #000000 0%, #1a1a1a 100%)',
                color: '#FFFFFF'
            }}
        >
            <MarketplaceNavbar />

            <main className="flex-grow relative">
                {/* Background Glow */}
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] opacity-20 pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle at 50% 0%, #3b82f6 0%, transparent 70%)',
                        filter: 'blur(80px)',
                    }}
                />

                <div
                    className="mx-auto px-6 py-16 md:py-24 relative z-10"
                    style={{ maxWidth: '900px' }}
                >
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1
                            className="font-bold mb-4"
                            style={{
                                fontSize: 'clamp(28px, 4vw, 48px)',
                                lineHeight: '1.1',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            Upload a New Dataset
                        </h1>
                        <p
                            className="text-gray-400 max-w-2xl mx-auto"
                            style={{
                                fontSize: 'clamp(14px, 1.5vw, 16px)',
                                lineHeight: '1.6',
                            }}
                        >
                            Share your datasets with the Dataverse marketplace. Fill in the details below to publish your data securely.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {/* File Upload Area */}
                        <div
                            className="rounded-2xl p-8 md:p-12 mb-8 transition-all duration-300"
                            style={{
                                background: '#0A0A0A',
                                border: dragActive
                                    ? '2px dashed #3b82f6'
                                    : '2px dashed rgba(59, 130, 246, 0.3)',
                                boxShadow: dragActive
                                    ? '0 0 30px rgba(59, 130, 246, 0.2)'
                                    : 'none',
                            }}
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                        >
                            <div className="text-center">
                                {/* Upload Icon */}
                                <div className="mb-6 flex justify-center">
                                    <div
                                        className="p-4 rounded-full"
                                        style={{
                                            background: 'rgba(59, 130, 246, 0.1)',
                                        }}
                                    >
                                        <svg
                                            width="48"
                                            height="48"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{ color: '#3b82f6' }}
                                        >
                                            <path
                                                d="M7 18C4.23858 18 2 15.7614 2 13C2 10.2386 4.23858 8 7 8C7.33333 8 7.66667 8.03333 8 8.1C8.66667 5.13333 11.1333 3 14 3C17.3137 3 20 5.68629 20 9C20 9.33333 19.9667 9.66667 19.9 10C21.0609 10.6871 22 11.9543 22 13.5C22 15.7091 20.2091 17.5 18 17.5H16"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12 12V21M12 12L9 15M12 12L15 15"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                {selectedFile ? (
                                    <div className="mb-6">
                                        <p className="text-white font-medium mb-2">Selected File:</p>
                                        <p className="text-blue-400">{selectedFile.name}</p>
                                        <p className="text-gray-500 text-sm mt-1">
                                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                                        </p>
                                    </div>
                                ) : (
                                    <>
                                        <p className="text-white font-medium mb-2">
                                            Drag & drop your dataset here
                                        </p>
                                        <p className="text-gray-400 text-sm mb-6">
                                            Supported formats: CSV, JSON, XML, ZIP
                                        </p>
                                    </>
                                )}

                                <input
                                    type="file"
                                    id="file-upload"
                                    className="hidden"
                                    onChange={handleFileChange}
                                    accept=".csv,.json,.xml,.zip"
                                />
                                <label htmlFor="file-upload">
                                    <button
                                        type="button"
                                        className="px-6 py-3 rounded-lg font-medium transition-all duration-300"
                                        style={{
                                            background: 'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)',
                                            color: '#FFFFFF',
                                            border: 'none',
                                            cursor: 'pointer',
                                            boxShadow: '0 4px 14px rgba(59, 130, 246, 0.25)',
                                        }}
                                        onClick={() => document.getElementById('file-upload')?.click()}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)'
                                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.35)'
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)'
                                            e.currentTarget.style.boxShadow = '0 4px 14px rgba(59, 130, 246, 0.25)'
                                        }}
                                    >
                                        Browse Files
                                    </button>
                                </label>
                            </div>
                        </div>

                        {/* Metadata Inputs */}
                        <div
                            className="rounded-2xl p-8 mb-8"
                            style={{
                                background: '#0A0A0A',
                                border: '1px solid rgba(59, 130, 246, 0.2)',
                            }}
                        >
                            <h2 className="text-xl font-bold mb-6">Metadata Inputs</h2>

                            {/* Dataset Name */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-2">
                                    Dataset Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="e.g., Nigerian E-commerce Transactions 2023"
                                    className="w-full px-4 py-3 rounded-lg transition-all duration-300"
                                    style={{
                                        background: '#1a1a1a',
                                        border: '1px solid rgba(59, 130, 246, 0.2)',
                                        color: '#FFFFFF',
                                        outline: 'none',
                                    }}
                                    onFocus={(e) => {
                                        e.currentTarget.style.borderColor = '#3b82f6'
                                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)'
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)'
                                        e.currentTarget.style.boxShadow = 'none'
                                    }}
                                />
                            </div>

                            {/* Description */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-2">
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder="Describe what the dataset contains and how it can be used..."
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 resize-none"
                                    style={{
                                        background: '#1a1a1a',
                                        border: '1px solid rgba(59, 130, 246, 0.2)',
                                        color: '#FFFFFF',
                                        outline: 'none',
                                    }}
                                    onFocus={(e) => {
                                        e.currentTarget.style.borderColor = '#3b82f6'
                                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)'
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)'
                                        e.currentTarget.style.boxShadow = 'none'
                                    }}
                                />
                            </div>

                            {/* Category */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-2">
                                    Category
                                </label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg transition-all duration-300"
                                    style={{
                                        background: '#1a1a1a',
                                        border: '1px solid rgba(59, 130, 246, 0.2)',
                                        color: '#FFFFFF',
                                        outline: 'none',
                                    }}
                                    onFocus={(e) => {
                                        e.currentTarget.style.borderColor = '#3b82f6'
                                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)'
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)'
                                        e.currentTarget.style.boxShadow = 'none'
                                    }}
                                >
                                    <option value="">Select a category</option>
                                    <option value="Financial Data">Financial Data</option>
                                    <option value="E-commerce">E-commerce</option>
                                    <option value="Healthcare">Healthcare</option>
                                    <option value="Environmental">Environmental</option>
                                    <option value="AI & Machine Learning">AI & Machine Learning</option>
                                </select>
                            </div>

                            {/* Tags */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-2">
                                    Tags
                                </label>
                                <div className="flex gap-2 mb-3">
                                    <input
                                        type="text"
                                        value={tagInput}
                                        onChange={(e) => setTagInput(e.target.value)}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') {
                                                e.preventDefault()
                                                handleAddTag()
                                            }
                                        }}
                                        placeholder="Add a tag..."
                                        className="flex-1 px-4 py-3 rounded-lg transition-all duration-300"
                                        style={{
                                            background: '#1a1a1a',
                                            border: '1px solid rgba(59, 130, 246, 0.2)',
                                            color: '#FFFFFF',
                                            outline: 'none',
                                        }}
                                        onFocus={(e) => {
                                            e.currentTarget.style.borderColor = '#3b82f6'
                                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)'
                                        }}
                                        onBlur={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)'
                                            e.currentTarget.style.boxShadow = 'none'
                                        }}
                                    />
                                    <button
                                        type="button"
                                        onClick={handleAddTag}
                                        className="px-4 py-3 rounded-lg font-medium transition-all duration-300"
                                        style={{
                                            background: 'rgba(59, 130, 246, 0.1)',
                                            border: '1px solid rgba(59, 130, 246, 0.3)',
                                            color: '#3b82f6',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)'
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)'
                                        }}
                                    >
                                        +
                                    </button>
                                </div>
                                {formData.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {formData.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 rounded-full text-sm flex items-center gap-2"
                                                style={{
                                                    background: 'rgba(59, 130, 246, 0.15)',
                                                    color: '#60a5fa',
                                                    border: '1px solid rgba(59, 130, 246, 0.3)',
                                                }}
                                            >
                                                {tag}
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveTag(tag)}
                                                    className="hover:text-red-400 transition-colors"
                                                >
                                                    ×
                                                </button>
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Data Format */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-2">
                                    Data Format
                                </label>
                                <select
                                    name="dataFormat"
                                    value={formData.dataFormat}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg transition-all duration-300"
                                    style={{
                                        background: '#1a1a1a',
                                        border: '1px solid rgba(59, 130, 246, 0.2)',
                                        color: '#FFFFFF',
                                        outline: 'none',
                                    }}
                                    onFocus={(e) => {
                                        e.currentTarget.style.borderColor = '#3b82f6'
                                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)'
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)'
                                        e.currentTarget.style.boxShadow = 'none'
                                    }}
                                >
                                    <option value="">Select format</option>
                                    <option value="CSV">CSV</option>
                                    <option value="JSON">JSON</option>
                                    <option value="XML">XML</option>
                                    <option value="ZIP">ZIP</option>
                                </select>
                            </div>

                            {/* Price */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-2">
                                    Price (USD)
                                </label>
                                <input
                                    type="text"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    placeholder="e.g., 99 or FREE"
                                    className="w-full px-4 py-3 rounded-lg transition-all duration-300"
                                    style={{
                                        background: '#1a1a1a',
                                        border: '1px solid rgba(59, 130, 246, 0.2)',
                                        color: '#FFFFFF',
                                        outline: 'none',
                                    }}
                                    onFocus={(e) => {
                                        e.currentTarget.style.borderColor = '#3b82f6'
                                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)'
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)'
                                        e.currentTarget.style.boxShadow = 'none'
                                    }}
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-4 rounded-lg font-bold text-lg transition-all duration-300"
                            style={{
                                background: 'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)',
                                color: '#FFFFFF',
                                border: 'none',
                                cursor: 'pointer',
                                boxShadow: '0 4px 14px rgba(59, 130, 246, 0.4)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)'
                                e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.5)'
                                e.currentTarget.style.transform = 'translateY(-2px)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)'
                                e.currentTarget.style.boxShadow = '0 4px 14px rgba(59, 130, 246, 0.4)'
                                e.currentTarget.style.transform = 'translateY(0)'
                            }}
                        >
                            Publish Dataset
                        </button>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    )
}
