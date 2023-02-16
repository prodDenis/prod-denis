import About from './About/About'
import Calculator from './Calculator/Calculator'
import Weather from './Weather'

export default function Main() {
  return (
    <main className='flex flex-col sm:w-8/12 max-w-[1280px] sm:gap-5 max-sm:mt-[60px] mx-auto dark:text-white text-black'>
      <About />
      <div className='flex max-xl:flex-wrap sm:gap-5 xl:min-h-[600px]'>
        <Weather />
        <Calculator />
      </div>
    </main>
  )
}
