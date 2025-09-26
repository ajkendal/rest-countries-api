import { LoadingIcon } from '../icons/icons'

const LoadingIconDiv = ({ loading }: { loading: boolean }) => {
  return (
    <>
      {loading && (
        <div className='flex items-center justify-center min-h-[90vh] w-full'>
          <LoadingIcon />
        </div>
      )}
    </>
  )
}

export default LoadingIconDiv
