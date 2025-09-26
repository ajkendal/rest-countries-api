import { Country } from '../utils/types'
import { useState, useEffect } from 'react'
import { SearchIcon, DropDownIcon, OpenUpIcon } from '../icons/icons'

type FilterDivProps = {
  countries: Country[]
  onFilter: (filtered: Country[]) => void
}

const FilterDiv = ({ countries, onFilter }: FilterDivProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedRegion, setSelectedRegion] = useState<string[]>([
    'All Regions',
  ])

  useEffect(() => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    )
    onFilter(filtered)
  }, [searchTerm, countries, onFilter])

  const searchInput = () => {
    return (
      <div className='flex items-center gap-2 p-4 rounded shadow bg-white dark:bg-blue-900 w-full md:flex-1 lg:w-[32rem] lg:flex-none'>
        <SearchIcon />

        <input
          className='flex-1 outline-none text-preset-5-regular'
          placeholder='Search for a country...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type='text'
        />
      </div>
    )
  }

  const regionFilter = () => {
    return (
      <div className='relative flex flex-col items-end'>
        <button
          className='btn-arrow ml-auto w-48 p-4 h-14 flex justify-between'
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className='text-left'>Filter by Region</span>
          <span className='ml-2'>
            {isOpen ? <OpenUpIcon /> : <DropDownIcon />}
          </span>
        </button>
        {isOpen && (
          <div className='absolute top-full right-0 mt-2 bg-white dark:bg-blue-900 shadow rounded w-48 z-10'>
            {[
              'All Regions',
              'Africa',
              'Americas',
              'Asia',
              'Europe',
              'Oceania',
            ].map((region) => {
              const isSelected = selectedRegion.includes(region)
              return (
                <div
                  key={region}
                  className='px-4 py-2 flex justify-between hover:bg-gray-100 dark:hover:bg-gray-400 cursor-pointer text-preset-5-regular'
                  onClick={() => {
                    if (region === 'All Regions') {
                      setSelectedRegion(['All Regions'])
                      onFilter(countries)
                    } else {
                      let newSelected
                      if (isSelected) {
                        newSelected = selectedRegion.filter((r) => r !== region)
                      } else {
                        newSelected = selectedRegion
                          .filter((r) => r !== 'All Regions')
                          .concat(region)
                      }
                      setSelectedRegion(newSelected)
                      const filtered = countries.filter((country) =>
                        newSelected.includes(country.region)
                      )
                      onFilter(newSelected.length === 0 ? countries : filtered)
                    }
                    setIsOpen(false)
                  }}
                >
                  <span>{region}</span>
                  {isSelected && (
                    <span className='inline-block ml-2'>&#10003;</span>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className='mb-10 flex justify-between sm:flex-row flex-col gap-6'>
      {searchInput()}
      {regionFilter()}
    </div>
  )
}

export default FilterDiv
