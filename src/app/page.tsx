import { Hero } from '@/components/features/landing/Hero'
import { FeatureGrid } from '@/components/features/landing/FeatureGrid'
import { CallToAction } from '@/components/features/landing/CallToAction'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <main>
        <FeatureGrid />
        <CallToAction />
      </main>
    </div>
  )
}
