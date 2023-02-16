import Head from 'next/head'
import MetaverseLandingPage from '../components/MetaverseLandingPage/MetaverseLandingPage'
import Main from '../components/Main'
import Navigation from '../components/Navigation'
import ThemeToggler from '../components/ThemeToggler'

export default function Home() {
  return (
    <>
      <Head>
        <title>Denis Feshchenko</title>
        <link rel='icon' href='/browsericon.png' />
      </Head>
      <div className='w-full sm:p-5 lg:p-10 dark:font-light font-normal overflow-hidden'>
        <div className='max-sm:mobileNavigationLayout'>
          <Navigation />
          <ThemeToggler />
        </div>
        <Main />
      </div>
      <MetaverseLandingPage />
    </>
  )
}
