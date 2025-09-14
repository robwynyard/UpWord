import { NextRequest, NextResponse } from 'next/server'
import { OpenAIService, DocumentAnalysis } from '@/lib/ai/openaiService'
import { CSSGenerator } from '@/lib/visual/cssGenerator'

export async function POST(request: NextRequest) {
  try {
    const { analysis, documentId } = await request.json()

    if (!analysis) {
      return NextResponse.json({ error: 'Document analysis is required' }, { status: 400 })
    }

    if (!documentId) {
      return NextResponse.json({ error: 'Document ID is required' }, { status: 400 })
    }

    // Check for OpenAI API key
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ 
        error: 'OpenAI API key not configured' 
      }, { status: 500 })
    }

    // Generate visual specifications based on analysis
    const visualSpecs = await OpenAIService.generateVisualSpecs(analysis as DocumentAnalysis)

    // Generate CSS styles from the visual specs
    const cssStyles = CSSGenerator.generateCSS(visualSpecs)
    const inlineStyles = CSSGenerator.generateInlineStyles(visualSpecs)

    return NextResponse.json({
      success: true,
      documentId,
      visualSpecs,
      cssStyles,
      inlineStyles,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Visual specs generation error:', error)
    
    // Return more specific error messages
    if (error instanceof Error && error.message.includes('API key')) {
      return NextResponse.json({ 
        error: 'OpenAI API configuration error' 
      }, { status: 500 })
    }

    if (error instanceof Error && error.message.includes('quota')) {
      return NextResponse.json({ 
        error: 'AI service quota exceeded. Please try again later.' 
      }, { status: 429 })
    }

    return NextResponse.json({ 
      error: 'Visual specification generation failed. Please try again.' 
    }, { status: 500 })
  }
}