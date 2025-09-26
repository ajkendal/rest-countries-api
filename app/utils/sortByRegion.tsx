import { sortCountriesByName } from './sortCountries'
import { Country } from './types'

export const sortByRegion = (countries: Country[], regions: string[] = []) => {
  const filtered =
    regions.length === 0
      ? countries
      : countries.filter((country) =>
          regions.includes(country.region || 'Unknown')
        )
  return sortCountriesByName(filtered)
}
