import { Country } from './types'

export function sortAndAddAlpha3Code(countries: Country[]) {
  return addAlpha3Code(sortCountriesByName([...countries]))
}

function addAlpha3Code(countries: Country[]) {
  return countries.map((country) => ({
    ...country,
    alpha3Code: country.cca3,
  }))
}

export function sortCountriesByName(countries: Country[]) {
  return countries.sort((a: Country, b: Country) => {
    const nameA = a.name?.common?.toLowerCase() || ''
    const nameB = b.name?.common?.toLowerCase() || ''
    if (nameA < nameB) return -1
    if (nameA > nameB) return 1
    return 0
  })
}
