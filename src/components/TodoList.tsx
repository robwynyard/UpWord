'use client'

import { useAtom, useSetAtom } from 'jotai'
import { useState } from 'react'
import { todoListAtom, addTodoAtom, completedTodosAtom } from '@/store/atoms'
import { cn } from '@/lib/utils'

export function TodoList() {
  const [todos, setTodos] = useAtom(todoListAtom)
  const [completedTodos] = useAtom(completedTodosAtom)
  const addTodo = useSetAtom(addTodoAtom)
  const [newTodoText, setNewTodoText] = useState('')

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTodoText.trim()) {
      addTodo(newTodoText.trim())
      setNewTodoText('')
    }
  }

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Todo List</h2>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            Add
          </button>
        </div>
      </form>

      <div className="space-y-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={cn(
              "flex items-center space-x-2 p-2 border rounded",
              todo.completed && "bg-gray-50 opacity-75"
            )}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="rounded"
            />
            <span
              className={cn(
                "flex-1",
                todo.completed && "line-through text-gray-500"
              )}
            >
              {todo.text}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 text-sm text-gray-600">
        Completed: {completedTodos.length} / {todos.length}
      </div>
    </div>
  )
}