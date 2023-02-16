import axios from 'axios'
import { useState } from 'react'
import { InformationCircleIcon, SearchIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'

export default function Weather() {
  const [data, setData] = useState()
  const [location, setLocation] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const searchLocation = async () => {
    if (location) {
      const geocodeUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=e0cf0dd55e5741e3ac78731ea2ea3432`
      const geocodeRes = await axios
        .get(geocodeUrl)
        .then((res) => res.data[0])
        .catch()
      if (geocodeRes) {
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${geocodeRes.lat}&lon=${geocodeRes.lon}&units=metric&appid=e0cf0dd55e5741e3ac78731ea2ea3432`
        await axios.get(weatherUrl).then((res) => setData(res.data))
        setLocation('')
      }
    }
  }

  const background = () => {
    if (Math.round(data.main.temp) <= 0) {
      return 'bg-[url("/weather-app/cold.webp")]'
    } else if (Math.round(data.main.temp) <= 10) {
      return 'bg-[url("/weather-app/semi-cold.jpg")]'
    } else if (Math.round(data.main.temp) <= 25) {
      return 'bg-[url("/weather-app/warm.jpg")]'
    } else {
      return 'bg-[url("/weather-app/hot.webp")]'
    }
  }

  return (
    <motion.div
      variants={slideIn('left', 'tween', 0, 1)}
      initial='hidden'
      whileInView='show'
      className='flex-col max-sm:mobileContainer sm:w-full max-xl:min-h-[600px] xl:flex-1 sm:container'
      id='weatherapp'
    >
      <div className='containerSpan flex items-center justify-center relative'>
        <div className='absolute left-[20px]'>
          <div
            className='w-6 h-6 rounded-full dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white hover:rotate-[360deg] transition duration-500 cursor-pointer flex items-center justify-center'
            onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
          >
            <InformationCircleIcon className='w-5' />
          </div>
        </div>
        <span>Weather App</span>
      </div>
      {!isOpen ? (
        <>
          <div className='flex min-h-[68px] overflow-hidden items-center border-b dark:border-softGray'>
            <input
              type='text'
              className='w-full outline-none max-md:text-lg text-xl dark:bg-black bg-white max-md:py-3 py-5 pl-5 dark:placeholder:text-transparentWhite placeholder:text-softGray placeholder:font-light'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && searchLocation()}
              placeholder='Search City'
            />
            <div
              className='p-6 hover:p-5 active:p-6 md:p-5 h-full cursor-pointer border-l dark:border-softGray dark:text-transparentWhite text-softGray md:hover:p-4 md:active:p-5'
              onClick={searchLocation}
            >
              <SearchIcon className='h-full' />
            </div>
          </div>
          {data ? (
            <div
              className={`w-full h-full bg-cover bg-center
          ${background()}`}
            >
              <div className='max-sm:p-3 p-5 flex flex-col h-full bg-black text-white bg-opacity-50 text-2xl xs:text-3xl'>
                <h1 className='font-bold text-3xl xs:text-5xl fontShadow'>
                  {data.name.toUpperCase()}
                </h1>
                <div className='h-full text-right flex flex-col justify-center'>
                  <h1 className='font-bold fontShadow'>
                    {Math.round(data.main.temp)}°C
                  </h1>
                  <p className='text-lg xs:text-xl font-thin fontShadow'>
                    feels like {Math.round(data.main.feels_like)}°C
                  </p>
                </div>
                <div className='flex flex-col'>
                  <div className='w-full flex flex-col'>
                    <p className='font-thin fontShadow'>
                      {data.weather[0].main}
                    </p>
                    <p className='text-lg xs:text-xl font-bold fontShadow'>
                      WEATHER
                    </p>
                  </div>
                </div>
                <div className='w-full flex flex-col'>
                  <p className='font-thin fontShadow'>{data.main.humidity}%</p>
                  <p className='text-lg xs:text-xl font-bold fontShadow'>
                    HUMIDITY
                  </p>
                </div>
                <div className='w-full flex flex-col'>
                  <p className='font-thin fontShadow'>
                    {Math.round(data.wind.speed)}m/s
                  </p>
                  <p className='text-lg xs:text-xl font-bold fontShadow'>
                    WIND
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <h1 className='max-md:text-lg text-xl max-md:p-3 p-5 m-auto dark:text-transparentWhite text-softGray font-light text-center'>
              Search a city to see its current weather
            </h1>
          )}
        </>
      ) : (
        <div className='w-full h-full p-5 flex items-center justify-center'>
          <span className='w-[75%] text-left'>
            This weather app was made with OpenWeatherAPI and it shows current
            weather in a city of your choice. I've made it with async axios API
            requests.
          </span>
        </div>
      )}
    </motion.div>
  )
}
