'use client'

import { motion } from 'framer-motion'
import { socials } from '../constants'
import styles from '../../../styles'
import { footerVariants } from '../../../utils/motion'

function Footer() {
  return (
    <motion.footer
      variants={footerVariants}
      initial='hidden'
      whileInView='show'
      className={`${styles.paddings} py-8 relative`}
    >
      <div className='footer-gradient' />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className='flex items-center justify-between flex-wrap gap-5'>
          <h4 className='font-bold md:text-[64px] text-[44px]'>
            Enter the Metaverse
          </h4>
          <button
            type='button'
            className='flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]'
          >
            <img
              src='/metaverse/headset.svg'
              alt='headset'
              className='w-[24px] h-[24px] object-contain'
            />
            <span className='font-normal text-[16px] text-white'>
              ENTER METAVERSE
            </span>
          </button>
        </div>
        <div className='flex flex-col'>
          <div className='mb-[40px] h-[2px] dark:bg-white bg-black opacity-10' />
          <div className='flex items-center justify-between flex-wrap gap-4'>
            <h4 className='font-extrabold text-[32px]'>Metaversus</h4>
            <p className='font-normal text-[14px] opacity-50'>
              Copyright © 2021 - 2022 Metaversus. All rights reserved.
            </p>
            <div className='flex gap-4'>
              {socials.map((social) => (
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className='w-[24px] h-[24px] p-1 hover:p-0.5 active:p-1 sm:w-[56px] sm:h-[56px] sm:p-3 object-contain cursor-pointer bg-black rounded-full sm:hover:p-2.5 sm:active:p-3 transition duration-500 z-10'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
