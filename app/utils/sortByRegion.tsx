import { sortCountriesByName } from './sortCountries'
type Country = {
  name: { common: string }
  [key: string]: any
}

export const sortByRegion = (countries: Country[], regions: string[] = []) => {
  const filtered =
    regions.length === 0
      ? countries
      : countries.filter((country) =>
          regions.includes(country.region || 'Unknown')
        )
  return sortCountriesByName(filtered)
}
