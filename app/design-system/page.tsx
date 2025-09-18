import {
  DropDownIcon,
  DarkIcon,
  Arrow,
  LightIcon,
  SearchIcon,
} from '../icons/icons'
import Header from '../components/Header'

const typographyPresets = [
  {
    name: 'text-preset-1',
    label: 'Preset 1',
    sample: 'The quick brown fox jumps over the lazy dog.',
  },
  {
    name: 'text-preset-2',
    label: 'Preset 2',
    sample: 'The quick brown fox jumps over the lazy dog.',
  },
  {
    name: 'text-preset-3',
    label: 'Preset 3',
    sample: 'The quick brown fox jumps over the lazy dog.',
  },
  {
    name: 'text-preset-4-semi-bold',
    label: 'Preset 4 Semi Bold',
    sample: 'The quick brown fox jumps over the lazy dog.',
  },
  {
    name: 'text-preset-4-light',
    label: 'Preset 4 Light',
    sample: 'The quick brown fox jumps over the lazy dog.',
  },
  {
    name: 'text-preset-5-regular',
    label: 'Preset 5 Regular',
    sample: 'The quick brown fox jumps over the lazy dog.',
  },
  {
    name: 'text-preset-5-light',
    label: 'Preset 5 Light',
    sample: 'The quick brown fox jumps over the lazy dog.',
  },
  {
    name: 'text-preset-6-semi-bold',
    label: 'Preset 6 Semi Bold',
    sample: 'The quick brown fox jumps over the lazy dog.',
  },
  {
    name: 'text-preset-6-regular',
    label: 'Preset 6 Regular',
    sample: 'The quick brown fox jumps over the lazy dog.',
  },
]

const icons = [
  { name: 'DropDownIcon', component: <DropDownIcon /> },
  { name: 'LightIcon', component: <LightIcon /> },
  { name: 'DarkIcon', component: <DarkIcon /> },
  { name: 'Arrow', component: <Arrow /> },
  { name: 'SearchIcon', component: <SearchIcon /> },
]

const colorPatches = [
  {
    name: 'Gray 950',
    className: 'bg-[#202c37]',
    hex: '#202c37',
    variable: '--color-gray-950',
  },
  {
    name: 'Gray 400',
    className: 'bg-[#7c7c7c]',
    hex: '#7c7c7c',
    variable: '--color-gray-400',
  },
  {
    name: 'Gray 350',
    className: 'bg-[#969696]',
    hex: '#969696',
    variable: '--color-gray-350',
  },
  {
    name: 'Gray 300',
    className: 'bg-[#b3b3b3]',
    hex: '#b3b3b3',
    variable: '--color-gray-300',
  },
  {
    name: 'Gray 250',
    className: 'bg-[#c4c4c4]',
    hex: '#c4c4c4',
    variable: '--color-gray-250',
  },
  {
    name: 'Gray 50',
    className: 'bg-[#fcfcfc] border',
    hex: '#fcfcfc',
    variable: '--color-gray-50',
  },
  {
    name: 'Blue 950',
    className: 'bg-[#2b3945]',
    hex: '#2b3945',
    variable: '--color-blue-950',
  },
  {
    name: 'Blue 900',
    className: 'bg-[#202c37]',
    hex: '#202c37',
    variable: '--color-blue-900',
  },
]

const ExampleHeader = ({ dark }: { dark?: boolean }) => (
  <header
    className={`flex items-center justify-between p-6 rounded shadow ${
      dark ? 'bg-[#2b3945] text-white' : 'bg-white text-gray-950'
    }`}
  >
    <h1 className='text-preset-1'>Where in the world?</h1>
    <button
      className={`flex items-center gap-2 text-preset-4-light ${
        dark ? 'text-white ' : ' text-gray-950 fill-gray-950'
      }`}
    >
      {dark ? <LightIcon /> : <DarkIcon />}
      {dark ? 'Light Mode' : 'Dark Mode'}
    </button>
  </header>
)

const ExampleSearch = ({ dark }: { dark?: boolean }) => (
  <div
    className={`flex items-center gap-2 p-4 rounded shadow ${
      dark ? 'bg-[#2b3945]' : 'bg-white'
    }`}
  >
    <span className={dark ? 'text-gray-300' : 'text-gray-400'}>
      <SearchIcon />
    </span>
    <input
      className={`flex-1 bg-transparent outline-none ${
        dark ? 'text-white ' : 'text-preset-4-light placeholder:text-gray-400'
      }`}
      placeholder='Search for a country...'
      disabled
    />
  </div>
)

const ExampleButton = ({ dark }: { dark?: boolean }) => (
  <button
    className={`flex items-center gap-2 px-4 py-2 rounded shadow text-preset-4-light w-min ${
      dark
        ? 'bg-[#2b3945] text-white'
        : 'bg-white border text-[var(--color-blue-950)]'
    }`}
    disabled
  >
    <Arrow />
    Back
  </button>
)

const ExampleDropdown = ({ dark }: { dark?: boolean }) => (
  <div className='relative w-48'>
    <button
      className={`w-full flex items-center justify-between px-4 py-2 rounded shadow ${
        dark
          ? 'bg-[#2b3945] text-white'
          : 'bg-white border text-[var(--color-blue-950)]'
      }`}
      disabled
    >
      Filter by Region
      <DropDownIcon />
    </button>
    <div
      className={`absolute left-0 mt-2 w-full rounded shadow z-10 ${
        dark ? 'bg-[#2b3945] text-white' : 'bg-white border text-gray-950'
      }`}
    >
      <ul className='py-2'>
        {['Africa', 'America', 'Asia', 'Europe', 'Oceania'].map((region) => (
          <li
            key={region}
            className={`px-4 py-1 ${
              dark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            } cursor-not-allowed`}
          >
            {region}
          </li>
        ))}
      </ul>
    </div>
  </div>
)

const ExampleCard = ({ dark }: { dark?: boolean }) => (
  <div
    className={`rounded-lg overflow-hidden shadow w-56 ${
      dark ? 'bg-[#2b3945] text-white' : 'bg-white text-gray-950'
    }`}
  >
    <div className='h-24'>
      <div className='h-1/3 bg-black' />
      <div className='h-1/3 bg-red-600' />
      <div className='h-1/3 bg-yellow-400' />
    </div>
    <div className='p-4'>
      <h3 className='text-preset-3 mb-2'>Germany</h3>
      <p className='text-preset-5-regular'>
        <b>Population:</b> 81,770,900
        <br />
        <b>Region:</b> Europe
        <br />
        <b>Capital:</b> Berlin
      </p>
    </div>
  </div>
)

const DesignSystem = () => {
  return (
    <>
      <Header />
      <main className='p-8 space-y-12'>
        <h1 className='text-preset-1 mb-6'>Design System</h1>

        {/* Colors */}
        <section>
          <h2 className='text-preset-2 mb-4'>Color Tokens</h2>
          <div className='flex flex-wrap gap-8'>
            {colorPatches.map((color) => (
              <div key={color.name} className='flex flex-col items-center'>
                <div
                  className={`w-16 h-16 rounded ${color.className} border`}
                  title={color.variable}
                />
                <span className='mt-2 text-xs font-medium'>{color.name}</span>
                <span className='text-xs text-gray-500'>{color.hex}</span>
                <span className='text-[10px] text-gray-400'>
                  {color.variable}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className='text-preset-2 mb-4'>Typography Presets</h2>
          <div className='space-y-4'>
            {typographyPresets.map((preset) => (
              <div key={preset.name}>
                <span className={preset.name}>{preset.sample}</span>
                <span className='ml-4 text-xs text-gray-500'>
                  {preset.label} ({preset.name})
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Icons */}
        <section>
          <h2 className='text-preset-2 mb-4'>Icons</h2>
          <div className='flex gap-8 items-center'>
            {icons.map((icon) => (
              <div key={icon.name} className='flex flex-col items-center'>
                <div className='w-8 h-8 flex items-center justify-center'>
                  {icon.component}
                </div>
                <span className='mt-2 text-xs text-gray-500'>{icon.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Components */}
        <section>
          <h2 className='text-preset-2 mb-4'>Components</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Headers */}
            <div className='space-y-4 bg-gray-50 p-4 rounded border'>
              <ExampleHeader />
              <ExampleHeader dark />
            </div>
            {/* Search */}
            <div className='space-y-4 bg-gray-50 p-4 rounded border'>
              <ExampleSearch />
              <ExampleSearch dark />
            </div>
            {/* Buttons */}
            <div className='flex flex-col gap-4 bg-gray-50 p-4 rounded border'>
              <ExampleButton />
              <ExampleButton dark />
            </div>
            {/* Dropdowns */}
            <div className='flex flex-row gap-4 bg-gray-50 p-4 rounded border items-start'>
              <ExampleDropdown />
              <ExampleDropdown dark />
            </div>
            {/* Cards */}
            <div className='flex gap-4 bg-gray-50 p-4 rounded border'>
              <ExampleCard />
              <ExampleCard dark />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default DesignSystem
