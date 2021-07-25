import {
  userExamples,
  userExample,
  createUserExample,
  updateUserExample,
  deleteUserExample,
} from './userExamples'

describe('userExamples', () => {
  scenario('returns all userExamples', async (scenario) => {
    const result = await userExamples()

    expect(result.length).toEqual(Object.keys(scenario.userExample).length)
  })

  scenario('returns a single userExample', async (scenario) => {
    const result = await userExample({ id: scenario.userExample.one.id })

    expect(result).toEqual(scenario.userExample.one)
  })

  scenario('creates a userExample', async () => {
    const result = await createUserExample({
      input: { email: 'String2683798' },
    })

    expect(result.email).toEqual('String2683798')
  })

  scenario('updates a userExample', async (scenario) => {
    const original = await userExample({ id: scenario.userExample.one.id })
    const result = await updateUserExample({
      id: original.id,
      input: { email: 'String61935472' },
    })

    expect(result.email).toEqual('String61935472')
  })

  scenario('deletes a userExample', async (scenario) => {
    const original = await deleteUserExample({
      id: scenario.userExample.one.id,
    })

    const result = await userExample({ id: original.id })

    expect(result).toEqual(null)
  })
})
