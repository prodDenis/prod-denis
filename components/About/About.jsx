import { motion } from 'framer-motion'
import { fadeIn, slideIn } from '../../utils/motion'

import Skill from './Skill'

export default function AboutMe() {
  const htmlcssjstext = `I've started learning
            html, css and some js. I enjoyed my first steps in web developing,
            but I only needed it for my high school project so when it was done
            I quickly forgot about the fun of front-end development. However
            eventually I remembered the feeling, tried again and fell in love
            for the rest of my life.`
  const reactnexttext = `I found out about React and I loved it. It made front-end development seem way more fun and easy. After learning React I moved to Next.js as it provides way more possibilites for projects with it's built-in routing and SSR.`
  const tailwindstyledtext = `I started finding other ways to style my projects, rather then just using css. I started with styled components and quite frankly I didn't really like them, I learnt all there is about them though. When my friend showed me tailwindcss however, I immediately knew that's what I needed. I style all of my projects, even this one, with tailwindcss.`
  const framermotiontext = `I've stumbled across framer motion. It's an insane library! I'm having a lot of fun with the animations you can make with it and I didn't forget to go crazy on this project too!`
  return (
    <div className='flex flex-col items-center gap-20'>
      <div className='flex items-center gap-5 mb-10 w-full justify-center mt-[100px] sm:mt-[-40px] sm:h-[100vh]'>
        <div className='flex flex-col text-center items-start justify-center p-5'>
          <div className=''>
            <motion.span
              variants={fadeIn('up', 'tween', 0, 1)}
              initial='hidden'
              whileInView='show'
              className='largeText dark:font-bold font-medium'
            >
              Denis-Feshchenko.
            </motion.span>
            <motion.span
              variants={fadeIn('up', 'tween', 1, 1)}
              initial='hidden'
              whileInView='show'
              className='mediumText'
            >
              isMyName
            </motion.span>
            <motion.span
              variants={fadeIn('up', 'tween', 2, 1)}
              initial='hidden'
              whileInView='show'
              className='bigText dark:font-bold'
            >
              {' '}
              &&
            </motion.span>
          </div>
          <div className=''>
            <motion.span
              variants={fadeIn('up', 'tween', 3, 1)}
              initial='hidden'
              whileInView='show'
              className='largeText dark:font-bold font-medium'
            >
              Front-End-Development.
            </motion.span>
            <motion.span
              variants={fadeIn('up', 'tween', 4, 1)}
              initial='hidden'
              whileInView='show'
              className='mediumText'
            >
              isMyGame
            </motion.span>
          </div>
        </div>
      </div>
      <motion.div
        variants={slideIn('left', 'tween', 0, 1)}
        initial='hidden'
        whileInView='show'
        className='w-full flex flex-col items-center mobileContainer sm:container'
        id='aboutme'
      >
        <span className='bigText dark:font-bold font-medium dark:w-fit dark:border-b border-white containerSpan'>
          About Me
        </span>
        <div className='flex flex-col gap-5 smallText items-center w-full p-5 dark:border-t border-softGray'>
          <span className='self-start'>{'{'}</span>
          <div className='flex flex-col gap-5'>
            <span>age: 20,</span>
            <span>languages: [ 'russian', 'english', 'czech' ]</span>
            <span>jobOfInterest: 'Front-End Developer',</span>
            <span>level: 'Junior',</span>
            <span>education: 'High School Diploma in IT',</span>
            <span>jobExperience: 'Yet To Come',</span>
            <span>excitedToWork: true,</span>
            <span>sideHustle: 'Music Production'</span>
          </div>
          <span className='self-start'>{'}'}</span>
        </div>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0, 1)}
        initial='hidden'
        whileInView='show'
        className='w-full flex flex-col items-center mobileContainer sm:container'
        id='skills'
      >
        <span className='bigText dark:font-bold font-medium dark:w-fit border-b border-white containerSpan'>
          Skills
        </span>
        <div
          className='flex flex-col gap-5 items-center w-full p-5 dark:border-t
        border-softGray h-fit'
        >
          <Skill
            skillName='HTML/CSS/JS'
            skillExperience='2 years'
            skillText={htmlcssjstext}
          />
          <Skill
            skillName='React.js/Next.js'
            skillExperience='1 year'
            skillText={reactnexttext}
          />
          <Skill
            skillName='TailwindCSS/Styled Components'
            skillExperience='Half a year'
            skillText={tailwindstyledtext}
          />
          <Skill
            skillName='Framer Motion'
            skillExperience='A month'
            skillText={framermotiontext}
          />
        </div>
      </motion.div>
      <div className='w-full flex flex-col items-center pb-20'>
        <span className='bigText font-bold w-fit border-b dark:border-white border-black'>
          Mini Projects
        </span>
        <span className='flex flex-col gap-5 smallText items-center w-full p-5 text-center'>
          Here is a collection of mini projects I've made to show off my skills.
        </span>
      </div>
    </div>
  )
}
