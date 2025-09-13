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
          border-2 border-dashed rounded-2xl p-16 text-center cursor-pointer transition-all duration-300 bg-white
          ${isDragActive 
            ? 'border-primary bg-primary/5 shadow-lg' 
            : 'border-border hover:border-primary/50 hover:bg-background-muted hover:shadow-md'
          }
          ${uploading ? 'pointer-events-none opacity-75' : ''}
        `}
      >
        <input {...getInputProps()} />
        
        <div className="space-y-4">
          <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-4xl">📄</span>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-2xl font-light text-foreground">
              {isDragActive ? 'Drop your document here' : 'Upload your document'}
            </h3>
            <p className="text-lg text-foreground-muted font-light">
              {isDragActive ? 'Release to upload' : 'Drag & drop or click to select'}
            </p>
          </div>
          
          <div className="space-y-1 pt-4">
            <p className="text-sm text-foreground-muted font-light">
              Supported formats: .docx, .txt, .pdf
            </p>
            <p className="text-xs text-foreground-subtle font-light">
              Maximum file size: 10MB
            </p>
          </div>
          
          {uploading && (
            <div className="mt-6">
              <div className="inline-flex items-center gap-2 text-primary">
                <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full"></div>
                <span className="text-sm font-light">Processing document...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};