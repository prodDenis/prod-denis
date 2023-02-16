'use client'

import { motion } from 'framer-motion'

import styles from '../../../styles'
import { navVariants } from '../../../utils/motion'

function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className='absolute w-[50%] inset-0 gradient-01' />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <img
          src='/metaverse/search.svg'
          alt='search'
          className='w-[24px] h-[24px] p-1 sm:w-[56px] sm:h-[56px] object-contain cursor-pointer hover:rotate-[360deg] transition duration-500 sm:p-3 dark:bg-transparent bg-black rounded-full z-10'
        />
        <h2 className='font-extrabold text-[24px] leading-[24px] sm:text-[56px] sm:leading-[56px] dark:z-auto z-10'>
          METAVERSUS
        </h2>
        <img
          src='/metaverse/menu.svg'
          alt='menu'
          className='w-[24px] h-[24px] p-1 sm:w-[56px] sm:h-[56px] object-contain cursor-pointer hover:rotate-[360deg] transition duration-500 sm:p-3 dark:bg-transparent bg-black rounded-full'
        />
      </div>
    </motion.nav>
  )
}

export default Navbar
