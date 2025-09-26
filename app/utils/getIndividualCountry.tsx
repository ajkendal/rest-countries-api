import { promises as fs } from 'fs'
import path from 'path'

export async function getIndividualCountry(code: string) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${code}?fields=name,population,region,subregion,capital,flags,tld,currencies,languages,borders,cca3`
    )
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const returnedResults = await response.json()

    return returnedResults
  } catch (error) {
    console.error('Error fetching country:', error)
    const filePath = path.join(process.cwd(), 'public', 'json', 'data.json')
    const fileContents = await fs.readFile(filePath, 'utf-8')

    const countries = JSON.parse(fileContents)

    const country = countries.find(
      (country: { alpha3Code: string }) => country.alpha3Code === code
    )

    return country ? [country] : []
  }
}
