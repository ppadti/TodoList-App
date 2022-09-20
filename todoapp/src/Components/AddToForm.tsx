import React, { FormEvent, useState } from 'react'
import {
  ActionGroup,
  Button,
  Form,
  FormGroup,
  TextInput,
} from '@patternfly/react-core'

interface Props {
  handleAdd: (todo: string) => void
}
const AddToForm = ({ handleAdd }: Props) => {
  const [todo, setTodo] = useState<string>('')

  const addTask = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    handleAdd(todo)
    setTodo('')
  }

  const handleChange = (task: string) => {
    setTodo(task)
  }

  return (
    <>
      <Form isHorizontal style={{ justifyContent: 'center' }}>
        <TextInput
          style={{ width: '25rem' }}
          value={todo}
          placeholder="Enter a task"
          isRequired
          type="text"
          id="horizontal-form-name"
          aria-describedby="horizontal-form-name-helper"
          name="horizontal-form-name"
          onChange={handleChange}
        />

        <ActionGroup>
          <Button variant="primary" type="submit" onClick={addTask}>
            Add
          </Button>
        </ActionGroup>
      </Form>
    </>
  )
}

export default AddToForm
