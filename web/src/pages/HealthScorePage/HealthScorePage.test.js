import { render } from '@redwoodjs/testing'

import HealthScorePage from './HealthScorePage'

describe('HealthScorePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HealthScorePage />)
    }).not.toThrow()
  })
})
