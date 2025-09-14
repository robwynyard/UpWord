'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ProcessingStatus } from '@/components/processing/ProcessingStatus'
import { StatusMessages } from '@/components/processing/StatusMessages'
import { DocumentAnalysis, VisualSpecs } from '@/lib/ai/openaiService'

interface StatusMessage {
  id: string
  message: string
  status: 'pending' | 'active' | 'completed' | 'error'
  timestamp?: Date
}

interface ProcessPageProps {
  params: {
    documentId: string
  }
}

export default function ProcessPage({ params }: ProcessPageProps) {
  const { documentId } = params
  const [currentStep, setCurrentStep] = useState(1)
  const [progress, setProgress] = useState(0)
  const [stepName, setStepName] = useState('Loading document...')
  const [messages, setMessages] = useState<StatusMessage[]>([])
  const [error, setError] = useState<string | null>(null)
  const [analysis, setAnalysis] = useState<DocumentAnalysis | null>(null)
  const [visualSpecs, setVisualSpecs] = useState<VisualSpecs | null>(null)
  const [isComplete, setIsComplete] = useState(false)
  const [estimatedTimeRemaining, setEstimatedTimeRemaining] = useState(45)

  // Add status message helper
  const addMessage = (message: string, status: StatusMessage['status'] = 'pending') => {
    const newMessage: StatusMessage = {
      id: Date.now().toString(),
      message,
      status,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
    return newMessage.id
  }

  // Update message status helper
  const updateMessage = (id: string, status: StatusMessage['status']) => {
    setMessages(prev => 
      prev.map(msg => 
        msg.id === id ? { ...msg, status } : msg
      )
    )
  }

  // Simulate AI processing workflow
  useEffect(() => {
    const processDocument = async () => {
      try {
        // Step 1: Analyzing document content
        setCurrentStep(2)
        setStepName('Analyzing document content...')
        setProgress(20)
        
        const analyzingId = addMessage('Starting AI content analysis...', 'active')
        
        // In a real app, you'd get the document content from storage/database
        const mockContent = `This is a sample document that would be analyzed by AI. 
        It contains business content with professional tone and structured information.
        The document includes multiple sections with headings and paragraphs.`

        const analysisResponse = await fetch('/api/analyze', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: mockContent,
            documentId
          })
        })

        if (!analysisResponse.ok) {
          throw new Error('Analysis failed')
        }

        const analysisResult = await analysisResponse.json()
        setAnalysis(analysisResult.analysis)
        
        updateMessage(analyzingId, 'completed')
        setProgress(50)
        setEstimatedTimeRemaining(25)

        // Step 2: Generate visual specifications
        setCurrentStep(3)
        setStepName('Generating visual design...')
        
        const designingId = addMessage('Creating color palette and typography...', 'active')
        
        await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate processing time

        const visualResponse = await fetch('/api/visual-specs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            analysis: analysisResult.analysis,
            documentId
          })
        })

        if (!visualResponse.ok) {
          throw new Error('Visual generation failed')
        }

        const visualResult = await visualResponse.json()
        setVisualSpecs(visualResult.visualSpecs)
        
        updateMessage(designingId, 'completed')
        addMessage('Visual specifications generated successfully', 'completed')
        setProgress(80)
        setEstimatedTimeRemaining(10)

        // Step 3: Formatting document
        setCurrentStep(4)
        setStepName('Applying formatting...')
        
        const formattingId = addMessage('Applying AI-generated styles to document...', 'active')
        
        await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate processing time
        
        updateMessage(formattingId, 'completed')
        setProgress(100)
        setEstimatedTimeRemaining(0)

        // Complete
        setCurrentStep(5)
        setStepName('Processing complete!')
        addMessage('Document beautification completed successfully!', 'completed')
        setIsComplete(true)

      } catch (err) {
        console.error('Processing error:', err)
        setError(err instanceof Error ? err.message : 'Processing failed')
        addMessage('An error occurred during processing', 'error')
      }
    }

    // Start processing after a short delay
    const timer = setTimeout(() => {
      processDocument()
    }, 1000)

    return () => clearTimeout(timer)
  }, [documentId])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b">
        <div className="max-w-4xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-semibold text-primary">
              AI Document Beautifier
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/" className="text-foreground-muted hover:text-foreground">
                Home
              </Link>
              <Link href="/upload" className="text-foreground-muted hover:text-foreground">
                Upload
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-foreground mb-4">
            Processing Your Document
          </h1>
          <p className="text-lg text-foreground-muted">
            Our AI is analyzing your content and creating a beautiful design
          </p>
        </div>

        {error && (
          <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-red-600 text-xl">⚠️</span>
              <h3 className="text-red-800 font-semibold">Processing Error</h3>
            </div>
            <p className="text-red-700 mb-4">{error}</p>
            <div className="flex gap-4">
              <Link href="/upload" className="btn-secondary">
                Upload New Document
              </Link>
              <button 
                onClick={() => window.location.reload()} 
                className="btn-primary"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {!error && (
          <div className="space-y-12">
            <div className="card-earth">
              <ProcessingStatus
                currentStep={currentStep}
                totalSteps={5}
                stepName={stepName}
                progress={progress}
                estimatedTimeRemaining={estimatedTimeRemaining}
              />
            </div>

            {messages.length > 0 && (
              <div className="card-earth">
                <h3 className="text-lg font-semibold text-foreground mb-4">Processing Details</h3>
                <StatusMessages messages={messages} />
              </div>
            )}

            {analysis && (
              <div className="card-earth">
                <h3 className="text-lg font-semibold text-foreground mb-4">Document Analysis</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-foreground-muted">Document Type</p>
                    <p className="font-medium text-foreground capitalize">{analysis.documentType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground-muted">Tone</p>
                    <p className="font-medium text-foreground capitalize">{analysis.tone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground-muted">Target Audience</p>
                    <p className="font-medium text-foreground capitalize">{analysis.targetAudience}</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground-muted">Key Themes</p>
                    <p className="font-medium text-foreground">{analysis.keyThemes.join(', ')}</p>
                  </div>
                </div>
              </div>
            )}

            {visualSpecs && (
              <div className="card-earth">
                <h3 className="text-lg font-semibold text-foreground mb-4">Generated Design</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Color Palette</h4>
                    <div className="flex gap-2">
                      {Object.entries(visualSpecs.colorPalette).map(([name, color]) => (
                        <div key={name} className="text-center">
                          <div 
                            className="w-12 h-12 rounded border border-foreground/20 mb-1"
                            style={{ backgroundColor: color }}
                          />
                          <p className="text-xs text-foreground-muted capitalize">{name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Typography</h4>
                    <div className="space-y-2">
                      <p className="text-sm">
                        <span className="text-foreground-muted">Headings:</span> {visualSpecs.typography.headingFont}
                      </p>
                      <p className="text-sm">
                        <span className="text-foreground-muted">Body:</span> {visualSpecs.typography.bodyFont}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {isComplete && (
              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-green-600 mb-6">
                  <span className="text-2xl">✅</span>
                  <span className="text-xl font-semibold">Processing Complete!</span>
                </div>
                <div className="flex gap-4 justify-center">
                  <Link href={`/preview/${documentId}`} className="btn-primary">
                    Preview Document
                  </Link>
                  <Link href="/upload" className="btn-secondary">
                    Process Another Document
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}