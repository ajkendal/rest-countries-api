'use client'
import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import LoadingIconDiv from '../components/LoadingIconDiv'
import ErrorCard from '../components/ErrorCard'
import { Country } from '../utils/types'

const CountryPageContent = () => {
  const searchParams = useSearchParams()
  const code = searchParams.get('code')
  const router = useRouter()
  const [country, setCountry] = useState<Country | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!code) {
      router.replace('/')
      return
    }
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
  }, [code, router])

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

export default CountryPageContent
