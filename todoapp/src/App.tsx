import '@patternfly/react-core/dist/styles/base.css'
import './fonts.css'

import React, { useState } from 'react'
import AddToForm from './Components/AddToForm'
import { Todo } from './Components/Model'
import SingleTodo from './Components/SingleTodo'
import { TextContent, Text, TextVariants } from '@patternfly/react-core'

type AddTodo = (text: string) => void

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd: AddTodo = (todo: string) => {
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
    }
  }

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    )
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleEdit = (id: Number, editTodo: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodo } : todo,
      ),
    )
  }

  return (
    <>
      <TextContent
        style={{ textAlign: 'center', fontWeight: 'bold', padding: '2rem' }}
      >
        <Text component={TextVariants.h2}>TODO LIST</Text>
      </TextContent>
      <AddToForm handleAdd={handleAdd} />
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          handleEdit={handleEdit}
          handleDone={handleDone}
          handleDelete={handleDelete}
        />
      ))}
    </>
  )
}

export default App
