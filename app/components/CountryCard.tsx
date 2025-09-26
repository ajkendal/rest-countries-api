import { Country } from '../utils/types'
import Link from 'next/link'

const CountryCard = ({ country }: { country: Country }) => {
  return (
    <Link href={`/country?code=${country.alpha3Code}`}>
      <div
        className='bg-white dark:bg-blue-900 rounded shadow w-[18rem] h-[23rem] group hover:bg-gray-50 dark:hover:bg-blue-950'
        key={String(country.alpha3Code)}
      >
        <img
          src={country.flags?.svg || ''}
          alt={`Flag of ${country.name?.common}`}
          className='w-full h-[10rem] object-cover rounded group-hover:opacity-75 transition-opacity'
        />
        <div className='p-5'>
          <h3 className='text-preset-3 mb-3'>{country.name?.official}</h3>
          <p className='text-preset-4-light'>
            <span className='text-preset-4-semi-bold'>Population:</span>{' '}
            {country.population?.toLocaleString()}
          </p>
          <p className='text-preset-4-light'>
            <span className='text-preset-4-semi-bold'>Region:</span>{' '}
            {country.region}
          </p>
          {country.capital && country.capital.length > 0 && (
            <p className='text-preset-4-light'>
              <span className='text-preset-4-semi-bold'>Capital:</span>{' '}
              {country.capital?.join(', ')}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}

export default CountryCard
