import { XIcon } from '@heroicons/react/outline'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='fixed z-50'>
      {!isOpen ? (
        <div
          className='w-10 h-10 p-2 hover:p-3 sm:p-3.5 sm:hover:p-5 sm:w-[70px] sm:h-[70px] flex flex-col justify-between dark:hover:bg-white hover:bg-black rounded-full group cursor-pointer transition opacity-30 hover:opacity-100 hover:rotate-180 duration-500'
          onClick={() => setIsOpen(true)}
        >
          <div className='flex flex-col justify-between h-full w-full rounded-md sm:rounded-lg overflow-hidden items-center'>
            <span className='dark:bg-white bg-black w-full h-1 sm:h-2 rounded-full dark:group-hover:bg-black group-hover:bg-white'></span>
            <span className='dark:bg-white bg-black w-full h-1 sm:h-2 rounded-full dark:group-hover:bg-black group-hover:bg-white'></span>
            <span className='dark:bg-white bg-black w-full h-1 sm:h-2 rounded-full dark:group-hover:bg-black group-hover:bg-white'></span>
          </div>
        </div>
      ) : (
        <>
          <span
            className='w-10 h-10 p-1 flex sm:hidden cursor-pointer hover:rotate-[360deg] transition duration-500 z-50 opacity-30 hover:opacity-100'
            onClick={() => setIsOpen(false)}
          >
            <XIcon />
          </span>
          <div className='p-3 sm:hidden flex flex-col w-full h-fit left-0 top-[60px] fixed dark:bg-black bg-white border-b dark:border-softGray'>
            <div className='w-full h-full flex flex-wrap gap-5'>
              <a href='#aboutme' className='navButton'>
                About Me
              </a>
              <a href='#skills' className='navButton'>
                Skills
              </a>
              <a href='#weatherapp' className='navButton'>
                Weather App
              </a>
              <a href='#calculator' className='navButton'>
                Calculator
              </a>
              <a href='#metaverse' className='navButton'>
                Metaverse Landing Page
              </a>
            </div>
          </div>
          <div className='p-5 w-fit h-fit rounded-[32px] dark:shadow-darkShadow shadow-lightShadow dark:bg-black bg-white hidden sm:flex flex-col gap-5'>
            <span
              className='w-10 h-10 cursor-pointer hover:rotate-[360deg] transition duration-500'
              onClick={() => setIsOpen(false)}
            >
              <XIcon />
            </span>
            <div className='w-full h-full flex flex-col gap-5'>
              <div className='flex w-full gap-5'>
                <a href='#aboutme' className='navButton'>
                  About Me
                </a>
                <a href='#skills' className='navButton'>
                  Skills
                </a>
              </div>
              <div className='flex w-full gap-5'>
                <a href='#weatherapp' className='navButton'>
                  Weather App
                </a>
                <a href='#calculator' className='navButton'>
                  Calculator
                </a>
              </div>
              <a href='#metaverse' className='navButton'>
                Metaverse Landing Page
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
