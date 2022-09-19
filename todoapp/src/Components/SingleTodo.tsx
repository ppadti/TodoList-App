import React, { FormEvent, useState } from 'react'
import { Todo } from './Model'
import '../index.css'

type Props = {
  todo: Todo
  handleEdit: (id: number, todo: string) => void
  handleDone: (id: number) => void
  handleDelete: (id: number) => void
}

const SingleTodo = ({
  todo,

  handleEdit,
  handleDone,
  handleDelete,
}: Props) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const handleEditOption = (e: FormEvent, id: number) => {
    e.preventDefault()
    handleEdit(id, editTodo)
    setEdit(false)
  }
  return (
    <form
      className="todo__single"
      onSubmit={(e) => {
        handleEditOption(e, todo.id)
      }}
    >
      {edit ? (
        <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
      ) : todo.isDone ? (
        <s className="todo__single--text">{todo.todo}</s>
      ) : (
        <span className="todo__single--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="option"
          onClick={() => {
            if (!edit && !todo.isDone) setEdit(!edit)
          }}
        >
          Edit
        </span>
        <span
          className="option"
          onClick={() => {
            handleDelete(todo.id)
          }}
        >
          Delete
        </span>
        <span
          className="option"
          onClick={() => {
            handleDone(todo.id)
          }}
        >
          Done
        </span>
      </div>
    </form>
  )
}

export default SingleTodo
