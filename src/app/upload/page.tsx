'use client'

import React, { useState } from 'react';
import { UploadZone } from '@/components/FileUpload/UploadZone';
import Link from 'next/link';

interface ParsedDocument {
  id: string;
  originalName: string;
  size: number;
  mimeType: string;
  type: 'docx' | 'text' | 'pdf';
  content: string;
  wordCount: number;
  pages?: number;
  uploadedAt: string;
}

export default function UploadPage() {
  const [document, setDocument] = useState<ParsedDocument | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (file: File) => {
    setError(null);
    setUploading(true);
    
    const formData = new FormData();
    formData.append('document', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Upload failed');
      }

      setDocument(result.document);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
      console.error('Upload error:', err);
    } finally {
      setUploading(false);
    }
  };

  const resetApp = () => {
    setDocument(null);
    setError(null);
  };

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
              <Link href="/about" className="text-foreground-muted hover:text-foreground">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-16">
        {!document && !uploading && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-semibold text-foreground mb-4">Upload Your Document</h1>
              <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                Start by uploading a document. Our AI will analyze the content and create a beautiful, professional layout.
              </p>
            </div>
            
            <UploadZone onFileUpload={handleFileUpload} />
            
            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-red-600">⚠️</span>
                  <span className="text-red-800 font-medium">Upload Error</span>
                </div>
                <p className="text-red-700 mt-1 font-light">{error}</p>
              </div>
            )}
          </div>
        )}

        {uploading && (
          <div className="text-center py-20">
            <div className="inline-flex items-center gap-3 text-accent mb-4">
              <div className="animate-spin w-6 h-6 border-2 border-current border-t-transparent rounded-full"></div>
              <span className="text-xl font-medium">Processing Document...</span>
            </div>
            <p className="text-foreground-muted">
              Analyzing content and preparing for AI enhancement
            </p>
          </div>
        )}

        {document && !uploading && (
          <div className="space-y-8">
            <div className="card-earth">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-xl">📄</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Document Uploaded Successfully</h3>
                  <p className="text-foreground-muted">Ready for AI beautification</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-background-muted rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{document.originalName}</div>
                  <div className="text-sm text-foreground-muted">Filename</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{document.type.toUpperCase()}</div>
                  <div className="text-sm text-foreground-muted">File Type</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{document.wordCount.toLocaleString()}</div>
                  <div className="text-sm text-foreground-muted">Words</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">
                    {(document.size / 1024).toFixed(1)} KB
                  </div>
                  <div className="text-sm text-foreground-muted">File Size</div>
                </div>
              </div>
            </div>

            <div className="card-earth">
              <h4 className="text-lg font-semibold text-foreground mb-4">Document Preview</h4>
              <div className="bg-background-muted rounded-lg p-6 max-h-96 overflow-y-auto">
                <pre className="whitespace-pre-wrap text-sm text-foreground-muted leading-relaxed">
                  {document.content.substring(0, 1000)}
                  {document.content.length > 1000 && '...'}
                </pre>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button 
                onClick={resetApp}
                className="btn-secondary"
              >
                Upload New Document
              </button>
              <Link 
                href={`/process/${document.id}`}
                className="btn-primary"
              >
                Process with AI
              </Link>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-green-600">
                <span>✨</span>
                <span>Ready for AI beautification!</span>
              </div>
              <p className="text-sm text-foreground-subtle mt-2">
                Click "Process with AI" to transform your document with intelligent formatting and design.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}