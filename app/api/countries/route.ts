import { NextResponse } from 'next/server';
import { getAllCountries } from '@/app/utils/getAllCountries';

export async function GET() {
  try {
    const countries = await getAllCountries();
    return NextResponse.json(countries);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch countries' }, { status: 500 });
  }
}
