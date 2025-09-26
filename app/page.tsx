'use client'
import { useEffect, useState } from 'react'
import LoadingIconDiv from './components/LoadingIconDiv'
import ErrorCard from './components/ErrorCard'

export default function Home() {
  const [countries, setCountries] = useState([])
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
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <main className='max-w-screen-xl mx-auto my-10'>
      <LoadingIconDiv loading={loading} />
      <ErrorCard error={error} />

      {!loading && !error && (
        <ul>
          {countries.map((country: any) => (
            <li key={country.name.common}>{country.name.common}</li>
          ))}
        </ul>
      )}
    </main>
  )
}
