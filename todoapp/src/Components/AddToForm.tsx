import React, { FormEvent, useState } from 'react'
import { Button } from '@patternfly/react-core'

interface Props {
  handleAdd: (todo: string) => void
}
const AddToForm = ({ handleAdd }: Props) => {
  const [todo, setTodo] = useState<string>('')

  const handleChange = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    handleAdd(todo)
    setTodo('')
  }

  return (
    <>
      <form>
        {/* <TextInput type="text" aria-label="text input example" /> */}
        <input
          className="input"
          type="text"
          value={todo}
          placeholder="Enter a task"
          onChange={(e) => {
            setTodo(e.target.value)
          }}
        />

        <Button variant="primary" type="submit" onClick={handleChange}>
          Add
        </Button>
      </form>
    </>
  )
}

export default AddToForm
