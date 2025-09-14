'use client'

import React from 'react'
import Link from 'next/link'

export const CallToAction: React.FC = () => {
  return (
    <div className="text-center py-20">
      <div className="max-w-2xl mx-auto px-8">
        <h3 className="text-3xl font-semibold text-foreground mb-4">
          Ready to Transform Your Documents?
        </h3>
        <p className="text-lg text-foreground-muted mb-8">
          Join thousands of users who have already discovered the power of AI-driven document design.
        </p>
        <Link 
          href="/upload"
          className="btn-primary text-lg px-8 py-3 inline-block"
        >
          Start Beautifying Now
        </Link>
      </div>
    </div>
  )
}