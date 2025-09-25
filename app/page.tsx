'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>('error')

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
      <h1>Welcome to the Home Page</h1>
      {loading && <p>Loading countries...</p>}
      {error && <p className='text-red-500'>{error}</p>}
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
