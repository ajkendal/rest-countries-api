import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import FilterDiv from '../app/components/FilterDiv'

const mockCountries = [
  { name: { common: 'Canada', official: 'Canada' }, region: 'Americas' },
  { name: { common: 'France', official: 'France' }, region: 'Europe' },
]

describe('FilterDiv', () => {
  it('renders search input', () => {
    render(<FilterDiv countries={mockCountries} onFilter={() => {}} />)
    expect(
      screen.getByPlaceholderText(/search for a country/i)
    ).toBeInTheDocument()
  })

  it('filters countries by search term', () => {
    const handleFilter = jest.fn()
    render(<FilterDiv countries={mockCountries} onFilter={handleFilter} />)
    fireEvent.change(screen.getByPlaceholderText(/search for a country/i), {
      target: { value: 'can' },
    })
    expect(handleFilter).toHaveBeenCalledWith([
      { name: { common: 'Canada', official: 'Canada' }, region: 'Americas' },
    ])
  })
})
