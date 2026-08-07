import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'

test('renders the CI/CD test heading', () => {
  render(<Home />)
  // getByRole throws if the <h1> isn't found, so this asserts it rendered
  expect(screen.getByRole('heading', { level: 1, name: /CI\/CD test/ })).toBeTruthy()
})

test('shows which pod served the page', () => {
  render(<Home />)
  expect(screen.getByText(/Served by pod:/)).toBeTruthy()
})
