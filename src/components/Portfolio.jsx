import React from 'react'
import arrayDestruct from '../assets/arrayDestruct.jpg'
import installNode from '../assets/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactsmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'


const Portfolio = () => {
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">

      <div className="max-w-screen-lg p-4">
        <p>Portfolio</p>
        <p>Check out some of my work right here</p>
      </div>

      <div>
        <img src={reactWeather} alt="" />
        <div>
            <button>Demo</button>
            <button>Code</button>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
