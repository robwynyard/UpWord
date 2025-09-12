'use client'

import { useAtom } from 'jotai'
import { countAtom } from '@/store/atoms'
import { cn } from '@/lib/utils'

export function Counter() {
  const [count, setCount] = useAtom(countAtom)

  return (
    <div className="flex items-center space-x-4 p-4 border rounded-lg">
      <button
        onClick={() => setCount(count - 1)}
        className={cn(
          "px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        )}
      >
        -
      </button>
      <span className="text-xl font-semibold min-w-[2rem] text-center">
        {count}
      </span>
      <button
        onClick={() => setCount(count + 1)}
        className={cn(
          "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        )}
      >
        +
      </button>
    </div>
  )
}