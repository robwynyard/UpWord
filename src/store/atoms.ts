import { atom } from 'jotai'

// Example atoms for state management
export const countAtom = atom(0)
export const nameAtom = atom('World')
export const todoListAtom = atom([
  { id: 1, text: 'Learn Jotai', completed: false },
  { id: 2, text: 'Build something awesome', completed: false },
])

// Derived atom example
export const completedTodosAtom = atom((get) => {
  const todos = get(todoListAtom)
  return todos.filter((todo) => todo.completed)
})

// Write-only atom example
export const addTodoAtom = atom(
  null,
  (get, set, text: string) => {
    const todos = get(todoListAtom)
    const newTodo = {
      id: Math.max(...todos.map(t => t.id), 0) + 1,
      text,
      completed: false,
    }
    set(todoListAtom, [...todos, newTodo])
  }
)