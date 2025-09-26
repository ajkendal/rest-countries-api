import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-preset-1 italic'>404</h1>
      <h2 className='text-preset-2'>Page Not Found</h2>
      <p className='text-preset-3'>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href='/' className='btn-primary mt-5 '>
        Go Home
      </Link>
    </div>
  )
}
