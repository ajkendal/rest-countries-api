import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../app/components/Header'

describe('Header', () => {
  it('renders the site title', () => {
    render(<Header />)
    expect(screen.getByText(/where in the world/i)).toBeInTheDocument()
  })
})
