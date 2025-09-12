import { Counter } from '@/components/Counter'
import { TodoList } from '@/components/TodoList'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="hero-gradient relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full transform translate-x-16 -translate-y-16"></div>
        <div className="max-w-4xl mx-auto px-8 py-16 text-center relative">
          <h1 className="text-5xl font-bold mb-4 text-primary-foreground">
            UpWord
          </h1>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            A sophisticated Next.js application with earth-tone design, powered by Tailwind CSS 3 and Jotai state management
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn-accent">
              Get Started
            </button>
            <button className="btn-secondary border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Examples
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-8 py-16">
        {/* Examples Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent-gradient rounded-full flex items-center justify-center text-primary-foreground text-xl">
                  🧮
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Counter Example</h2>
                  <p className="text-foreground-muted">
                    Interactive counter with earth-tone styling
                  </p>
                </div>
              </div>
              <Counter />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-earth-gradient rounded-full flex items-center justify-center text-primary-foreground text-xl">
                  ✓
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Todo List Example</h2>
                  <p className="text-foreground-muted">
                    Task management with derived atoms
                  </p>
                </div>
              </div>
              <TodoList />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="section-muted">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Built with Premium Technologies</h3>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              This application showcases a sophisticated earth-tone design system with modern React patterns
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-earth text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl mx-auto mb-4">
                ⚡
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Next.js 15</h4>
              <p className="text-foreground-muted">App Router with React Server Components</p>
            </div>
            
            <div className="card-earth text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-2xl mx-auto mb-4">
                🎨
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Tailwind CSS 3</h4>
              <p className="text-foreground-muted">Earth-tone design system with custom components</p>
            </div>
            
            <div className="card-earth text-center">
              <div className="w-16 h-16 bg-earth-gradient rounded-full flex items-center justify-center text-primary-foreground text-2xl mx-auto mb-4">
                ⚛️
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Jotai State</h4>
              <p className="text-foreground-muted">Atomic state management with derived atoms</p>
            </div>
            
            <div className="card-earth text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl mx-auto mb-4">
                📝
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">TypeScript</h4>
              <p className="text-foreground-muted">Full type safety and developer experience</p>
            </div>
            
            <div className="card-earth text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-2xl mx-auto mb-4">
                🚀
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">React 19</h4>
              <p className="text-foreground-muted">Latest React features and optimizations</p>
            </div>
            
            <div className="card-earth text-center">
              <div className="w-16 h-16 bg-earth-gradient rounded-full flex items-center justify-center text-primary-foreground text-2xl mx-auto mb-4">
                ✨
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Premium Design</h4>
              <p className="text-foreground-muted">Sophisticated earth-tone color palette</p>
            </div>
          </div>
        </div>

        {/* Color Palette Showcase */}
        <div className="card-earth mt-20">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Earth Tone Color Palette</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-charcoal-black rounded-lg mx-auto mb-2 border border-border"></div>
              <p className="text-xs font-medium text-foreground">Charcoal Black</p>
              <p className="text-xs text-foreground-subtle">#0A0908</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-blue rounded-lg mx-auto mb-2 border border-border"></div>
              <p className="text-xs font-medium text-foreground">Slate Blue</p>
              <p className="text-xs text-foreground-subtle">#22333B</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warm-cream rounded-lg mx-auto mb-2 border border-border"></div>
              <p className="text-xs font-medium text-foreground">Warm Cream</p>
              <p className="text-xs text-foreground-subtle">#EAE0D5</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warm-beige rounded-lg mx-auto mb-2 border border-border"></div>
              <p className="text-xs font-medium text-foreground">Warm Beige</p>
              <p className="text-xs text-foreground-subtle">#C6AC8F</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-dark-brown rounded-lg mx-auto mb-2 border border-border"></div>
              <p className="text-xs font-medium text-foreground">Dark Brown</p>
              <p className="text-xs text-foreground-subtle">#5E503F</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg mx-auto mb-2 border border-border"></div>
              <p className="text-xs font-medium text-foreground">Pure White</p>
              <p className="text-xs text-foreground-subtle">#FFFFFF</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
