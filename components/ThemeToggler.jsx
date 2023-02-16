import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'

export default function ThemeToggler() {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div
      className='dark:text-white text-black fixed right-2.5 sm:right-5 lg:right-10 z-50 p-1 sm:p-2 w-10 h-10 sm:w-[70px] sm:h-[70px] rounded-full dark:hover:bg-white hover:bg-black transition duration-500 cursor-pointer dark:hover:text-black hover:text-white hover:rotate-[360deg] opacity-30 hover:opacity-100'
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && currentTheme === 'dark' ? (
        <SunIcon className='w-full h-full' />
      ) : (
        <MoonIcon className='w-full h-full' />
      )}
    </div>
  )
}
