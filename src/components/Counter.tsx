'use client'

import { useAtom } from 'jotai'
import { countAtom } from '@/store/atoms'
import { cn } from '@/lib/utils'

export function Counter() {
  const [count, setCount] = useAtom(countAtom)

  return (
    <div className="card-earth">
      <div className="flex items-center justify-center space-x-6">
        <button
          onClick={() => setCount(count - 1)}
          className={cn(
            "w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover transition-all duration-200 hover:-translate-y-0.5 hover:shadow-earth flex items-center justify-center text-xl font-semibold"
          )}
        >
          −
        </button>
        <div className="min-w-[4rem] text-center">
          <span className="text-3xl font-bold text-foreground">
            {count}
          </span>
          <p className="text-sm text-foreground-muted mt-1">Count</p>
        </div>
        <button
          onClick={() => setCount(count + 1)}
          className={cn(
            "w-12 h-12 rounded-full bg-accent text-accent-foreground hover:bg-accent-hover hover:text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-earth flex items-center justify-center text-xl font-semibold"
          )}
        >
          +
        </button>
      </div>
    </div>
  )
}