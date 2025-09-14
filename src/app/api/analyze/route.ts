import { NextRequest, NextResponse } from 'next/server'
import { OpenAIService } from '@/lib/ai/openaiService'

export async function POST(request: NextRequest) {
  try {
    const { content, documentId } = await request.json()

    if (!content) {
      return NextResponse.json({ error: 'Content is required' }, { status: 400 })
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

    // Analyze document with AI
    const analysis = await OpenAIService.analyzeDocument(content)

    // In a real app, you might want to store this analysis in a database
    // For now, we'll just return it directly
    return NextResponse.json({
      success: true,
      documentId,
      analysis,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('AI analysis error:', error)
    
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
      error: 'AI analysis failed. Please try again.' 
    }, { status: 500 })
  }
}