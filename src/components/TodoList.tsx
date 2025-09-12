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
    <div className="card-earth max-w-md mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Todo List</h2>
        <div className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
          {completedTodos.length}/{todos.length}
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-3">
          <input
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-1 px-4 py-3 bg-background-paper border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-foreground-subtle"
          />
          <button
            type="submit"
            className="btn-accent px-6"
          >
            Add
          </button>
        </div>
      </form>

      <div className="space-y-3">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={cn(
              "flex items-center space-x-3 p-4 bg-background-paper border border-border-muted rounded-lg transition-all duration-200 hover:shadow-earth",
              todo.completed && "bg-background opacity-75"
            )}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="w-5 h-5 text-primary bg-background-paper border-border rounded focus:ring-primary focus:ring-2"
            />
            <span
              className={cn(
                "flex-1 text-foreground",
                todo.completed && "line-through text-foreground-subtle"
              )}
            >
              {todo.text}
            </span>
          </div>
        ))}
      </div>

      {todos.length === 0 && (
        <div className="text-center py-8 text-foreground-muted">
          <p>No todos yet. Add one above!</p>
        </div>
      )}

      <div className="mt-6 p-4 bg-background rounded-lg border-l-4 border-accent">
        <p className="text-sm text-foreground-muted">
          <span className="font-medium text-foreground">Progress:</span> {completedTodos.length} of {todos.length} tasks completed
          {completedTodos.length === todos.length && todos.length > 0 && (
            <span className="text-accent font-medium"> 🎉 All done!</span>
          )}
        </p>
      </div>
    </div>
  )
}