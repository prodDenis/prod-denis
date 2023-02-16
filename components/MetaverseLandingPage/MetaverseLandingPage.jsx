import { Footer, Navbar } from './components'
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from './sections'

export default function LandingPage() {
  return (
    <div className='flex flex-col items-center' id='metaverse'>
      <span className='containerSpan py-5 dark:border-t border-softGray'>
        Metaverse Landing Page
      </span>
      <div className='overflow-hidden font-metaverse'>
        <Navbar />
        <Hero />
        <div className='relative'>
          <About />
          <div className='gradient-03 z-0' />
          <Explore />
        </div>
        <div className='relative'>
          <GetStarted />
          <div className='gradient-04 z-0' />
          <WhatsNew />
        </div>
        <World />
        <div className='relative'>
          <Insights />
          <div className='gradient-04 z-0' />
          <Feedback />
        </div>
        <Footer />
      </div>
    </div>
  )
}
