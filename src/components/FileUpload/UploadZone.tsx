'use client'

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface UploadZoneProps {
  onFileUpload: (file: File) => Promise<void>;
}

export const UploadZone: React.FC<UploadZoneProps> = ({ onFileUpload }) => {
  const [uploading, setUploading] = useState(false);
  
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;
    
    setUploading(true);
    try {
      await onFileUpload(file);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  }, [onFileUpload]);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'text/plain': ['.txt'],
      'application/pdf': ['.pdf']
    },
    maxFiles: 1
  });
  
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div 
        {...getRootProps()} 
        className={`
          border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-300
          ${isDragActive 
            ? 'border-accent bg-accent/10 transform scale-105' 
            : 'border-border hover:border-accent hover:bg-accent/5'
          }
          ${uploading ? 'pointer-events-none opacity-75' : ''}
        `}
      >
        <input {...getInputProps()} />
        
        <div className="space-y-4">
          <div className="mx-auto w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
            <span className="text-3xl">📄</span>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground">
              {isDragActive ? 'Drop your document here' : 'Upload your document'}
            </h3>
            <p className="text-foreground-muted">
              {isDragActive ? 'Release to upload' : 'Drag & drop or click to select'}
            </p>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-foreground-subtle">
              Supported formats: .docx, .txt, .pdf
            </p>
            <p className="text-xs text-foreground-subtle">
              Maximum file size: 10MB
            </p>
          </div>
          
          {uploading && (
            <div className="mt-4">
              <div className="inline-flex items-center gap-2 text-accent">
                <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full"></div>
                <span className="text-sm font-medium">Processing document...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};