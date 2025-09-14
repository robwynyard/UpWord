import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export interface DocumentAnalysis {
  documentType: 'business-report' | 'creative-brief' | 'technical-doc' | 'academic-paper' | 'marketing-material' | 'general'
  tone: 'professional' | 'creative' | 'technical' | 'academic' | 'friendly' | 'formal'
  mood: 'serious' | 'optimistic' | 'neutral' | 'urgent' | 'inspirational' | 'informative'
  keyThemes: string[]
  targetAudience: 'business' | 'academic' | 'general' | 'technical' | 'creative'
  primaryColors: string[]
  structure: {
    hasHeadings: boolean
    hasList: boolean
    hasTables: boolean
    sections: number
  }
}

export interface VisualSpecs {
  colorPalette: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
  }
  typography: {
    headingFont: string
    bodyFont: string
    headingSize: string
    bodySize: string
  }
  layout: {
    maxWidth: string
    spacing: string
    borderRadius: string
  }
  background: {
    type: 'solid' | 'gradient' | 'pattern'
    value: string
  }
}

export class OpenAIService {
  static async analyzeDocument(content: string): Promise<DocumentAnalysis> {
    try {
      const prompt = `Analyze this document content and return a JSON object with the following structure:

{
  "documentType": one of ["business-report", "creative-brief", "technical-doc", "academic-paper", "marketing-material", "general"],
  "tone": one of ["professional", "creative", "technical", "academic", "friendly", "formal"],
  "mood": one of ["serious", "optimistic", "neutral", "urgent", "inspirational", "informative"],
  "keyThemes": array of 3-5 main themes/topics,
  "targetAudience": one of ["business", "academic", "general", "technical", "creative"],
  "primaryColors": array of 2-3 hex color codes that would suit this content,
  "structure": {
    "hasHeadings": boolean,
    "hasList": boolean,
    "hasTables": boolean,
    "sections": estimated number of main sections
  }
}

Document content:
${content.substring(0, 2000)}...`

      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are an expert document analyzer. Analyze the content and return only valid JSON with no additional text or explanations.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.3,
        max_tokens: 500
      })

      const result = response.choices[0]?.message?.content
      if (!result) {
        throw new Error('No response from OpenAI')
      }

      return JSON.parse(result) as DocumentAnalysis
    } catch (error) {
      console.error('OpenAI analysis error:', error)
      // Return default analysis as fallback
      return {
        documentType: 'general',
        tone: 'professional',
        mood: 'neutral',
        keyThemes: ['Document Content'],
        targetAudience: 'general',
        primaryColors: ['#7C8B5A', '#A0825C'],
        structure: {
          hasHeadings: true,
          hasList: false,
          hasTables: false,
          sections: 3
        }
      }
    }
  }

  static async generateVisualSpecs(analysis: DocumentAnalysis): Promise<VisualSpecs> {
    try {
      const prompt = `Based on this document analysis, generate visual design specifications as JSON:

Document Analysis:
- Type: ${analysis.documentType}
- Tone: ${analysis.tone}
- Mood: ${analysis.mood}
- Themes: ${analysis.keyThemes.join(', ')}
- Audience: ${analysis.targetAudience}

Return JSON with this structure:
{
  "colorPalette": {
    "primary": hex color for headers and key elements,
    "secondary": hex color for secondary elements,
    "accent": hex color for highlights,
    "background": hex color for page background,
    "text": hex color for body text
  },
  "typography": {
    "headingFont": web-safe font family for headings,
    "bodyFont": web-safe font family for body text,
    "headingSize": CSS size for h1 elements,
    "bodySize": CSS size for body text
  },
  "layout": {
    "maxWidth": CSS max-width for content,
    "spacing": CSS spacing unit,
    "borderRadius": CSS border radius
  },
  "background": {
    "type": one of ["solid", "gradient", "pattern"],
    "value": CSS background value
  }
}`

      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are an expert visual designer. Generate beautiful, professional design specifications based on document analysis. Return only valid JSON.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.4,
        max_tokens: 600
      })

      const result = response.choices[0]?.message?.content
      if (!result) {
        throw new Error('No response from OpenAI')
      }

      return JSON.parse(result) as VisualSpecs
    } catch (error) {
      console.error('OpenAI visual specs generation error:', error)
      // Return default specs as fallback
      return {
        colorPalette: {
          primary: '#7C8B5A',
          secondary: '#A0825C',
          accent: '#9B8C5A',
          background: '#F8F6F2',
          text: '#3D3B36'
        },
        typography: {
          headingFont: '"Times New Roman", serif',
          bodyFont: '"Georgia", serif',
          headingSize: '2rem',
          bodySize: '1rem'
        },
        layout: {
          maxWidth: '800px',
          spacing: '1.5rem',
          borderRadius: '8px'
        },
        background: {
          type: 'solid',
          value: '#F8F6F2'
        }
      }
    }
  }
}