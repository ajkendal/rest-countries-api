import React from 'react'
import { render, screen } from '@testing-library/react'
import HomePage from '../app/page'

describe('HomePage', () => {
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve([]),
        text: () => Promise.resolve(''),
        headers: new Headers(),
        redirected: false,
        statusText: 'OK',
        type: 'basic',
        url: '',
        clone: () => ({} as Response),
        body: null,
        bodyUsed: false,
      } as Response)
    )
  })

  it('renders homepage content', () => {
    render(<HomePage />)
    expect(
      screen.getByPlaceholderText(/search for a country/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/filter by region/i)).toBeInTheDocument()
  })
})
