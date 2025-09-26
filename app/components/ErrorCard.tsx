import { ErrorIcon } from '../icons/icons'

const ErrorCard = ({ error }: { error: string | null }) => {
  return (
    <>
      {error && (
        <div className='flex items-center justify-center min-h-[90vh] w-full'>
          <div
            className='bg-red-100 border border-red-400 px-4 py-3 rounded  w-1/2'
            role='alert'
          >
            <ErrorIcon />
            <p className='text-center text-preset-1 text-red-500'>{error}</p>
          </div>
        </div>
      )}
    </>
  )
}
export default ErrorCard
