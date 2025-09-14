'use client'

import React from 'react'
import { LoadingSpinner } from '../LoadingSpinner'

interface ProcessingStatusProps {
  currentStep: number
  totalSteps: number
  stepName: string
  progress: number // 0-100
  estimatedTimeRemaining?: number // in seconds
}

export const ProcessingStatus: React.FC<ProcessingStatusProps> = ({
  currentStep,
  totalSteps,
  stepName,
  progress,
  estimatedTimeRemaining
}) => {
  const formatTime = (seconds: number): string => {
    if (seconds < 60) {
      return `${seconds}s`
    }
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}m ${remainingSeconds}s`
  }

  return (
    <div className="space-y-6">
      {/* Current Step */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <LoadingSpinner size="lg" className="text-accent" />
          <div>
            <h3 className="text-xl font-semibold text-foreground">{stepName}</h3>
            <p className="text-foreground-muted">
              Step {currentStep} of {totalSteps}
            </p>
          </div>
        </div>
        
        {estimatedTimeRemaining && estimatedTimeRemaining > 0 && (
          <p className="text-sm text-foreground-subtle">
            Estimated time remaining: {formatTime(estimatedTimeRemaining)}
          </p>
        )}
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-foreground-muted">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-background-muted rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-accent to-primary h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Step Indicators */}
      <div className="flex justify-between items-center">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-200 ${
                index + 1 < currentStep 
                  ? 'bg-green-500 text-white' 
                  : index + 1 === currentStep 
                    ? 'bg-accent text-accent-foreground' 
                    : 'bg-background-muted text-foreground-muted'
              }`}
            >
              {index + 1 < currentStep ? '✓' : index + 1}
            </div>
            <span className={`text-xs text-center ${
              index + 1 <= currentStep ? 'text-foreground' : 'text-foreground-muted'
            }`}>
              {index === 0 && 'Upload'}
              {index === 1 && 'Analyze'}  
              {index === 2 && 'Design'}
              {index === 3 && 'Format'}
              {index === 4 && 'Export'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}