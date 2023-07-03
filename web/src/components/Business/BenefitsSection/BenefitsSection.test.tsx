import { render } from '@redwoodjs/testing/web'

import BenefitsSection from './BenefitsSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Benefits', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BenefitsSection />)
    }).not.toThrow()
  })
})
