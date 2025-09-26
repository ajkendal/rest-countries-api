'use client'
import { useEffect, useState } from 'react'
import LoadingIconDiv from './components/LoadingIconDiv'
import ErrorCard from './components/ErrorCard'
import { Country } from './utils/types'
import FilterDiv from './components/FilterDiv'

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([])
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/countries')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch countries')
        return res.json()
      })
      .then((data) => {
        setCountries(data)
        setFilteredCountries(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <main className='max-w-screen-xl mx-auto my-10 w-11/12'>
      <FilterDiv countries={countries} onFilter={setFilteredCountries} />
      <LoadingIconDiv loading={loading} />
      <ErrorCard error={error} />

      {!loading &&
        !error &&
        (filteredCountries.length === 0 ? (
          <div className='flex items-center justify-center min-h-[40vh] w-full'>
            <p className='text-preset-1 italic text-center'>
              No countries found.
            </p>
          </div>
        ) : (
          <ul>
            {filteredCountries.map((country: Country) => (
              <li key={country.name.common}>{country.name.common}</li>
            ))}
          </ul>
        ))}
    </main>
  )
}
