import Link from 'next/link'

export default function PricingPage() {
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
              <Link href="/upload" className="text-foreground-muted hover:text-foreground">
                Upload
              </Link>
              <Link href="/about" className="text-foreground-muted hover:text-foreground">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-foreground mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Choose the plan that fits your document beautification needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="card-earth relative">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-foreground mb-2">Free</h3>
              <div className="text-4xl font-bold text-primary mb-2">$0</div>
              <p className="text-foreground-muted">Forever</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-foreground-muted">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</span>
                Up to 5 documents per month
              </li>
              <li className="flex items-center gap-3 text-foreground-muted">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</span>
                Basic AI formatting
              </li>
              <li className="flex items-center gap-3 text-foreground-muted">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</span>
                PDF export
              </li>
              <li className="flex items-center gap-3 text-foreground-muted">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</span>
                Standard templates
              </li>
            </ul>

            <Link href="/upload" className="btn-secondary w-full text-center block">
              Get Started Free
            </Link>
          </div>

          {/* Pro Tier */}
          <div className="card-earth relative border-2 border-primary">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-foreground mb-2">Pro</h3>
              <div className="text-4xl font-bold text-primary mb-2">$9</div>
              <p className="text-foreground-muted">per month</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-foreground-muted">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</span>
                Unlimited documents
              </li>
              <li className="flex items-center gap-3 text-foreground-muted">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</span>
                Advanced AI formatting
              </li>
              <li className="flex items-center gap-3 text-foreground-muted">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</span>
                All export formats (PDF, Word, HTML)
              </li>
              <li className="flex items-center gap-3 text-foreground-muted">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</span>
                Custom branding
              </li>
              <li className="flex items-center gap-3 text-foreground-muted">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</span>
                Priority support
              </li>
            </ul>

            <button className="btn-primary w-full" disabled>
              Coming Soon
            </button>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-foreground-muted mb-4">
            Have questions about our pricing? We'd be happy to help.
          </p>
          <Link href="/about" className="text-primary hover:text-primary/80 font-medium">
            Learn More About Our Features
          </Link>
        </div>
      </main>
    </div>
  )
}