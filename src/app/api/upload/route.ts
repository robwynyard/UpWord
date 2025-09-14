import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import { DocumentParser } from '@/lib/services/documentParser';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = [
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain',
  'application/pdf'
];

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('document') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: 'File too large. Maximum size is 10MB.' }, { status: 400 });
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({ 
        error: 'Unsupported file type. Please upload .docx, .txt, or .pdf files.' 
      }, { status: 400 });
    }

    // Create unique filename
    const timestamp = Date.now();
    const uniqueName = `${timestamp}-${file.name}`;
    const filePath = path.join(process.cwd(), 'uploads', uniqueName);

    // Save file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filePath, buffer);

    try {
      // Parse document
      const parsedDoc = await DocumentParser.parseDocument(filePath, file.type);

      return NextResponse.json({
        success: true,
        document: {
          id: uniqueName,
          originalName: file.name,
          size: file.size,
          mimeType: file.type,
          uploadedAt: new Date().toISOString(),
          ...parsedDoc
        }
      });
    } catch (parseError) {
      return NextResponse.json({ 
        error: `Failed to parse document: ${parseError instanceof Error ? parseError.message : 'Unknown parsing error'}` 
      }, { status: 500 });
    }

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ 
      error: 'Upload failed. Please try again.' 
    }, { status: 500 });
  }
}