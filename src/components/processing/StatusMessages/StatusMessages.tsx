'use client'

import React from 'react'

interface StatusMessage {
  id: string
  message: string
  status: 'pending' | 'active' | 'completed' | 'error'
  timestamp?: Date
}

interface StatusMessagesProps {
  messages: StatusMessage[]
}

export const StatusMessages: React.FC<StatusMessagesProps> = ({ messages }) => {
  const getStatusIcon = (status: StatusMessage['status']) => {
    switch (status) {
      case 'completed':
        return <span className="text-green-500">✓</span>
      case 'active':
        return <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      case 'error':
        return <span className="text-red-500">✗</span>
      case 'pending':
      default:
        return <span className="text-foreground-muted">○</span>
    }
  }

  const getStatusColor = (status: StatusMessage['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-600'
      case 'active':
        return 'text-blue-600 font-medium'
      case 'error':
        return 'text-red-600'
      case 'pending':
      default:
        return 'text-foreground-muted'
    }
  }

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div key={message.id} className="flex items-start gap-3">
          <div className="mt-1">
            {getStatusIcon(message.status)}
          </div>
          <div className="flex-1">
            <p className={`${getStatusColor(message.status)} transition-colors duration-200`}>
              {message.message}
            </p>
            {message.timestamp && (
              <p className="text-xs text-foreground-subtle mt-1">
                {message.timestamp.toLocaleTimeString()}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}