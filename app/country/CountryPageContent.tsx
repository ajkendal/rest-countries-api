'use client'
import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import LoadingIconDiv from '../components/LoadingIconDiv'
import ErrorCard from '../components/ErrorCard'
import { Country } from '../utils/types'
import { Arrow } from '../icons/icons'

const CountryPageContent = () => {
  const [allCountries, setAllCountries] = useState<Country[]>([])
  // Fetch all countries for border name lookup
  useEffect(() => {
    fetch('/api/countries')
      .then((res) => res.json())
      .then((data) => setAllCountries(data))
      .catch(() => setAllCountries([]))
  }, [])
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
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

  if (!mounted || loading) return <LoadingIconDiv loading={true} />
  return (
    <main className='max-w-screen-xl mx-auto my-10 w-11/12'>
      <ErrorCard error={error} />

      {country && (
        <div className='flex flex-col items-center justify-center min-h-[60vh] w-full gap-20'>
          <a href='/' className='btn-arrow w-fit self-start'>
            <Arrow /> Back
          </a>

          <div className='flex flex-col items-center justify-center w-full gap-10 md:flex-row'>
            <img
              src={country.flags?.svg || country.flags?.png}
              alt={`${country.name?.common} flag`}
              className='w-full md:w-1/2 lg:w-1/2 h-auto object-contain rounded'
            />
            <div className='w-full md:w-1/2 lg:w-1/2 flex flex-col gap-10'>
              <h1 className='text-preset-1'>{country.name?.common}</h1>
              <div className='flex flex-col gap-2 sm:flex-row md:gap-10 lg:gap-10'>
                <div className='flex flex-col gap-2 w-full md:w-1/2'>
                  <p className='text-preset-4-light'>
                    <span className='text-preset-4-semi-bold'>
                      Native Name:
                    </span>{' '}
                    {
                      country.name?.nativeName
                        ? country.name?.nativeName[
                            Object.keys(country.name.nativeName)[0]
                          ]?.common
                        : ''
                    }
                  </p>
                  <p className='text-preset-4-light'>
                    <span className='text-preset-4-semi-bold'>Population:</span>{' '}
                    {country.population?.toLocaleString()}
                  </p>
                  <p className='text-preset-4-light'>
                    <span className='text-preset-4-semi-bold'>Region:</span>{' '}
                    {country.region}
                  </p>
                  <p className='text-preset-4-light'>
                    <span className='text-preset-4-semi-bold'>Subregion:</span>{' '}
                    {country.subregion}
                  </p>
                  <p className='text-preset-4-light'>
                    <span className='text-preset-4-semi-bold'>Capital:</span>{' '}
                    {country.capital}
                  </p>
                </div>
                <div className='flex flex-col gap-2 w-full md:w-1/2'>
                  <p className='text-preset-4-light'>
                    <span className='text-preset-4-semi-bold'>
                      Top Level Domain:
                    </span>{' '}
                    {country.tld?.[0]}
                  </p>
                  <p className='text-preset-4-light'>
                    <span className='text-preset-4-semi-bold'>Currencies:</span>{' '}
                    {country.currencies &&
                      Object.values(country.currencies)
                        .map((cur: any) => cur.name)
                        .join(', ')}
                  </p>
                  <p className='text-preset-4-light'>
                    <span className='text-preset-4-semi-bold'>Languages:</span>{' '}
                    {country.languages &&
                      Object.values(country.languages)
                        .map((lang: any) => lang)
                        .join(', ')}
                  </p>
                </div>
              </div>
              <div className='flex flex-row items-start gap-4'>
                <h2 className='text-preset-4-semi-bold w-min-content whitespace-nowrap self-center'>
                  Border Countries:
                </h2>
                <div className='flex flex-wrap gap-2 mt-2 md:mt-0'>
                  {country.borders && country.borders.length > 0 ? (
                    country.borders.map((borderCode: string) => {
                      const borderCountry = allCountries.find(
                        (c) => c.alpha3Code === borderCode
                      )
                      return borderCountry ? (
                        <a
                          href={`/country?code=${borderCode}`}
                          key={borderCode}
                          className='btn-country-code  text-preset-5-light'
                        >
                          {borderCountry.name?.common}
                        </a>
                      ) : null
                    })
                  ) : (
                    <span className='text-preset-4-light italic'>
                      No border countries
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default CountryPageContent
