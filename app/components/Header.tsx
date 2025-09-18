'use client'
import { useTheme } from 'next-themes'

import { DarkIcon, LightIcon } from '../icons/icons'

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <header className='py-4 shadow transition-colors bg-white dark:bg-blue-900'>
      <div className='max-w-screen-xl mx-auto flex justify-between items-center w-11/12'>
        <a href='/' className='text-preset-2'>
          Where in the world?
        </a>

        <button
          aria-label='Toggle Theme Mode'
          className='theme-toggle text-preset-6-semi-bold cursor-pointer group'
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          <span className='group-hover:text-gray-400 group-hover:dark:text-gray-300 flex items-center gap-2'>
            {resolvedTheme === 'dark' ? (
              <>
                <LightIcon aria-hidden='true' />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <DarkIcon aria-hidden='true' />
                <span>Dark Mode</span>
              </>
            )}
          </span>
        </button>
      </div>
    </header>
  )
}

export default Header
