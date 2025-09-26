'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import LoadingIconDiv from '../components/LoadingIconDiv'
import ErrorCard from '../components/ErrorCard'

const CountryPage = () => {
  const { code: paramCode } = useParams<{ code: string }>()
  const code = paramCode || 'USA'
  const [country, setCountry] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(`/api/country?code=${code}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch country')
        return res.json()
      })
      .then((data) => {
        setCountry(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [code])

  return (
    <main className='max-w-screen-xl mx-auto my-10'>
      <LoadingIconDiv loading={loading} />
      <ErrorCard error={error} />

      {country && (
        <div>
          <h2>{country.name?.common}</h2>
          {/* Add more country details here */}
        </div>
      )}
    </main>
  )
}

export default CountryPage
