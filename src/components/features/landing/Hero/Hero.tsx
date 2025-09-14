'use client'

import React from 'react'
import Link from 'next/link'

interface HeroProps {
  onReset?: () => void
  hasDocument?: boolean
}

export const Hero: React.FC<HeroProps> = ({ onReset, hasDocument }) => {
  return (
    <div className="hero-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full transform translate-x-16 -translate-y-16"></div>
      <div className="max-w-4xl mx-auto px-8 py-20 text-center relative">
        <h1 className="text-6xl font-semibold mb-6 text-primary-foreground tracking-tight">
          AI Document Beautifier
        </h1>
        <p className="text-xl mb-10 text-primary-foreground/90 max-w-2xl mx-auto">
          Transform your documents with AI-powered visual design. Upload your .docx, .txt, or .pdf files and let AI create beautiful, professional layouts.
        </p>
        {hasDocument && onReset ? (
          <button 
            onClick={onReset}
            className="btn-secondary"
          >
            Upload New Document
          </button>
        ) : (
          <Link href="/upload" className="btn-primary">
            Get Started
          </Link>
        )}
      </div>
    </div>
  )
}