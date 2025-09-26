import { Suspense } from 'react'
import CountryPageContent from './CountryPageContent'
import LoadingIconDiv from '../components/LoadingIconDiv'

export default function CountryPage() {
  return (
    <Suspense fallback={<LoadingIconDiv loading={true} />}>
      <CountryPageContent />
    </Suspense>
  )
}
