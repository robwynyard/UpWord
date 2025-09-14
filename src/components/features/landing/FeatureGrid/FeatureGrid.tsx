'use client'

import React from 'react'

export const FeatureGrid: React.FC = () => {
  return (
    <div className="section-muted">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold text-foreground mb-4">How It Works</h3>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Our AI-powered document beautifier transforms your plain documents into visually stunning layouts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-earth text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl mx-auto mb-4">
              📤
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">Upload Document</h4>
            <p className="text-foreground-muted">Drop your .docx, .txt, or .pdf file and we&apos;ll extract the content</p>
          </div>
          
          <div className="card-earth text-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-2xl mx-auto mb-4">
              🤖
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">AI Analysis</h4>
            <p className="text-foreground-muted">Our AI analyzes content, tone, and structure to determine the best design approach</p>
          </div>
          
          <div className="card-earth text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-dark-brown rounded-full flex items-center justify-center text-primary-foreground text-2xl mx-auto mb-4">
              ✨
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">Beautiful Output</h4>
            <p className="text-foreground-muted">Download your professionally styled document in PDF, Word, or HTML format</p>
          </div>
        </div>
      </div>
    </div>
  )
}