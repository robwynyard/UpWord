'use client'

import React, { useState } from 'react';
import { UploadZone } from './FileUpload/UploadZone';

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

export const DocumentApp: React.FC = () => {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="hero-gradient relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full transform translate-x-16 -translate-y-16"></div>
        <div className="max-w-4xl mx-auto px-8 py-20 text-center relative">
          <h1 className="text-6xl font-semibold mb-6 text-primary-foreground tracking-tight">
            AI Document Beautifier
          </h1>
          <p className="text-xl mb-10 text-primary-foreground/90 max-w-2xl mx-auto">
            Transform your documents with AI-powered visual design. Upload your .docx, .txt, or .pdf files and let AI create beautiful, professional layouts.
          </p>
          {document && (
            <button 
              onClick={resetApp}
              className="btn-secondary"
            >
              Upload New Document
            </button>
          )}
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-8 py-16">
        {!document && !uploading && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-foreground mb-4">Upload Your Document</h2>
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

            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-foreground-muted">
                <span>🚧</span>
                <span>AI beautification features coming next!</span>
              </div>
              <p className="text-sm text-foreground-subtle mt-2">
                The next phase will add AI analysis and visual generation capabilities.
              </p>
            </div>
          </div>
        )}

        {/* How it works section */}
        <div className="section-muted mt-20">
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
      </main>
    </div>
  );
};