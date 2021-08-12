import { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import {
  Form,
  TextField,
  RadioField,
  RangeField,
  TextAreaField,
  Submit,
  FieldError,
  Label,
  FormError,
} from '@redwoodjs/forms'

import './HealthScorePage.css'

const HealthScorePage = () => {
  const [age, setAge] = useState(65)

  function ageChange (e) {
    setAge(e.target.value)
  }

  return (
    <>
      <h1>Health Score</h1>
      <Form
      >
        <Label name="age" className="field"> Age: </Label>
        <TextField
          name="age"
          value={age}
          onChange={ageChange}
          className="input text-age"
        />
        <RangeField
          name="range"
          value={age}
          min="17"
          max="90"
          onChange={ageChange}
          className="input"
        />

        <Label name="sex" className="field"> Sex: </Label>
        <Label name="sex" className="label"> Male </Label>
        <RadioField name="sex" value={1} className="input" />
        <Label name="playbackRate" className="label"> Female </Label>
        <RadioField name="sex" value={0} className="input" />
      </Form>
    </>
  )
}

export default HealthScorePage
