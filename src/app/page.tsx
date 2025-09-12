import { Counter } from '@/components/Counter'
import { TodoList } from '@/components/TodoList'

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Next.js + Tailwind + Jotai
          </h1>
          <p className="text-lg text-gray-600">
            A modern React stack with atomic state management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Counter Example</h2>
              <p className="text-gray-600 mb-4">
                Simple counter using Jotai atoms for state management.
              </p>
              <Counter />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Todo List Example</h2>
              <p className="text-gray-600 mb-4">
                Interactive todo list demonstrating derived atoms and write-only atoms.
              </p>
              <TodoList />
            </div>
          </div>
        </div>

        <div className="mt-16 p-6 border rounded-lg bg-gray-50">
          <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Next.js 15 with App Router</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
              <span>Tailwind CSS 3</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span>Jotai for State Management</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>TypeScript</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span>React 19</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>ESLint Configuration</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
