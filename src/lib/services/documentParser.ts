import mammoth from 'mammoth';
import * as fs from 'fs/promises';

export interface ParsedDocument {
  content: string;
  type: 'docx' | 'text' | 'pdf';
  wordCount: number;
  pages?: number;
}

export class DocumentParser {
  static async parseDocument(filePath: string, mimeType: string): Promise<ParsedDocument> {
    try {
      switch (mimeType) {
        case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
          return await this.parseDocx(filePath);
        case 'text/plain':
          return await this.parseText(filePath);
        case 'application/pdf':
          return await this.parsePdf(filePath);
        default:
          throw new Error('Unsupported file type');
      }
    } catch (error) {
      throw new Error(`Document parsing failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
  
  private static async parseDocx(filePath: string): Promise<ParsedDocument> {
    const fileBuffer = await fs.readFile(filePath);
    const result = await mammoth.extractRawText({ buffer: fileBuffer });
    return {
      content: result.value,
      type: 'docx',
      wordCount: result.value.split(/\s+/).filter((word: string) => word.length > 0).length
    };
  }
  
  private static async parseText(filePath: string): Promise<ParsedDocument> {
    const content = await fs.readFile(filePath, 'utf8');
    return {
      content,
      type: 'text',
      wordCount: content.split(/\s+/).filter((word: string) => word.length > 0).length
    };
  }
  
  private static async parsePdf(filePath: string): Promise<ParsedDocument> {
    // Dynamic import to avoid build issues with pdf-parse
    // @ts-expect-error - pdf-parse doesn't have proper types
    const pdfParse = (await import('pdf-parse')).default;
    
    const fileBuffer = await fs.readFile(filePath);
    const pdfData = await pdfParse(fileBuffer);
    return {
      content: pdfData.text,
      type: 'pdf',
      wordCount: pdfData.text.split(/\s+/).filter((word: string) => word.length > 0).length,
      pages: pdfData.numpages
    };
  }
}