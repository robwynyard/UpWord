import Link from 'next/link'

export default function AboutPage() {
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
              <Link href="/pricing" className="text-foreground-muted hover:text-foreground">
                Pricing
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-foreground mb-4">About AI Document Beautifier</h1>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Transforming the way you create beautiful documents with the power of artificial intelligence.
          </p>
        </div>

        <div className="space-y-16">
          <section className="card-earth">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
            <p className="text-foreground-muted leading-relaxed">
              We believe that every document deserves to look professional and visually appealing. 
              Our AI-powered platform takes your raw text and transforms it into beautifully formatted documents 
              that capture attention and communicate your ideas effectively.
            </p>
          </section>

          <section className="card-earth">
            <h2 className="text-2xl font-semibold text-foreground mb-4">How It Works</h2>
            <div className="text-foreground-muted leading-relaxed space-y-4">
              <p>
                Our advanced AI analyzes your document's content, structure, and purpose to automatically 
                generate the most appropriate visual design:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Content analysis for tone and purpose detection</li>
                <li>Intelligent color palette generation</li>
                <li>Automatic typography selection</li>
                <li>Smart layout optimization</li>
                <li>Professional formatting application</li>
              </ul>
            </div>
          </section>

          <section className="card-earth">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Technology Stack</h2>
            <p className="text-foreground-muted leading-relaxed">
              Built with cutting-edge AI technology and modern web frameworks to deliver 
              fast, reliable, and beautiful results every time. Our platform supports multiple 
              file formats and export options to fit your workflow.
            </p>
          </section>
        </div>

        <div className="text-center mt-16">
          <Link href="/upload" className="btn-primary text-lg px-8 py-3 inline-block">
            Try It Now
          </Link>
        </div>
      </main>
    </div>
  )
}