'use client'
import { useEffect, useState } from 'react'
import LoadingIconDiv from './components/LoadingIconDiv'
import ErrorCard from './components/ErrorCard'
import { Country } from './utils/types'
import FilterDiv from './components/FilterDiv'
import CountryCard from './components/CountryCard'

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
          <div className='flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20'>
            {filteredCountries.map((country: Country) => (
              <CountryCard key={country.name.common} country={country} />
            ))}
          </div>
        ))}
    </main>
  )
}
