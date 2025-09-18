'use client'
import { useTheme } from 'next-themes'
import { DarkIcon, LightIcon } from '../icons/icons'

const Header = () => {
  const { theme, setTheme } = useTheme()

  return (
    <header
      className={`py-4 shadow ${theme === 'dark' ? 'bg-blue-900' : 'bg-white'}`}
    >
      <div className='max-w-screen-xl mx-auto flex justify-between items-center w-11/12'>
        <a href='/' className='text-preset-2'>
          Where in the world?
        </a>
        <button
          aria-label='Toggle Theme Mode'
          className='theme-toggle text-preset-6-semi-bold cursor-pointer group'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? (
            <span className='group-hover:text-gray-300 flex items-center gap-2'>
              <LightIcon aria-hidden='true' /> Light Mode
            </span>
          ) : (
            <span className='group-hover:text-gray-300 flex items-center gap-2'>
              <DarkIcon aria-hidden='true' /> Dark Mode
            </span>
          )}
        </button>
      </div>
    </header>
  )
}

export default Header
