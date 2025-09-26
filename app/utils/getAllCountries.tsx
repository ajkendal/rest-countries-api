import { promises as fs } from 'fs'
import path from 'path'

import { sortAndAddAlpha3Code } from './sortCountries'

export async function getAllCountries() {
  try {
    const response = await fetch(
      'https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca3'
    )
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const returnedResults = await response.json()
    const countries = sortAndAddAlpha3Code(returnedResults)

    return countries
  } catch (error) {
    console.error('Error fetching countries:', error)
    const filePath = path.join(process.cwd(), 'public', 'json', 'data.json')
    const fileContents = await fs.readFile(filePath, 'utf-8')

    const countries = JSON.parse(fileContents)

    return countries
  }
}
