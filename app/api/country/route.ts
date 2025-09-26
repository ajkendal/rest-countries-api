import { NextResponse } from 'next/server'
import { getIndividualCountry } from '@/app/utils/getIndividualCountry'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const code = searchParams.get('code') || ''
    if (!code) {
      return NextResponse.json({ error: 'No code provided' }, { status: 400 })
    }
    const country = await getIndividualCountry(code)
    return NextResponse.json(country)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch country' },
      { status: 500 }
    )
  }
}
