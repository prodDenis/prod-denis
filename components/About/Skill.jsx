import { InformationCircleIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/motion'

export default function Skill({ skillName, skillExperience, skillText }) {
  return (
    <div className='flex flex-col group items-center gap-5 w-full border dark:border-softGray p-5'>
      <div className='w-full flex items-center justify-center relative'>
        <div className='absolute left-0'>
          <div
            className={`w-6 h-6 lg:w-10 lg:h-10 opacity-30 rounded-full flex items-center justify-center group-hover:rotate-[360deg] transition duration-500 ${
              skillName === 'TailwindCSS/Styled Components' &&
              'invisible xs:visible'
            }`}
          >
            <InformationCircleIcon className='w-6 lg:w-10' />
          </div>
        </div>
        <span className='font-medium mediumText'>{skillName}</span>
      </div>
      <motion.div
        className='hidden invisible group-hover:visible group-hover:flex w-full smallText'
        variants={fadeIn('up', 'spring', 0, 0.5)}
        initial='hidden'
        whileInView='show'
      >
        <div className='flex flex-col gap-5 w-full items-center'>
          <span className='text-left w-[75%]'>
            <span className='font-bold'>{skillExperience} ago</span> {skillText}
          </span>
        </div>
        <div></div>
      </motion.div>
    </div>
  )
}
