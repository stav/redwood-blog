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
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const ageChange = (e) => { setAge(e.target.value) }
  const heightChange = (e) => { setHeight(e.target.value) }
  const weightChange = (e) => { setWeight(e.target.value) }

  return (
    <>
      <h1>Health Score</h1>
      <Form
      >
        <Label name="age" className="field"> Age (years): </Label>
        <TextField
          name="age"
          value={age}
          onChange={ageChange}
          className="input text-age"
        />
        <RangeField
          name="ageRange"
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

        <Label name="hgt" className="field"> Height (cm): </Label>
        <TextField
          name="hgt"
          value={height}
          onChange={heightChange}
          className="input text-height"
        />
        <RangeField
          name="heightRange"
          value={height}
          min="85"
          max="215"
          onChange={heightChange}
          className="input"
        />

        <Label name="wgt" className="field"> Weight (kg): </Label>
        <TextField
          name="hgt"
          value={weight}
          onChange={weightChange}
          className="input text-weight"
        />
        <RangeField
          name="weightRange"
          value={weight}
          min="35"
          max="165"
          onChange={weightChange}
          className="input"
        />

      </Form>
    </>
  )
}

export default HealthScorePage
