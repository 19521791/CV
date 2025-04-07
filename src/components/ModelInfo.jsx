/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ImageContext } from '@/contexts/ImageContext'

const InfoBox = ({ text, link, btnText }) => {
  const { images } = useContext(ImageContext)

  return (
    <div className="info-box font-sans">
      <p className="font-medium sm:text-xl text-center">
        {text}
      </p>
      <Link to={link} className="neo-brutalism-white neo-btn" >
        {btnText}
        <img src={images['arrow']} className="w-4 h-4 object-contain" />
      </Link>
    </div>
  )
}

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 font-sans">
      Hi, I am <span className="font-semibold">Douglus Nguyen</span>
      <span className='text-orange-300 mx-2'>ʕ•́ᴥ•̀ʔっ</span>
      <br />
      A Backend Software Engineer from DakLak
    </h1>
  ),
  2: (
    <InfoBox
      text="Passionate about solving problems and delivering high-quality solutions"
      link="/profile"
      btnText="About Me"
    />
  ),
  3: (
    <InfoBox
      text="Curious to see what I've done? Check out my projects!"
      link="/work"
      btnText="Explore"
    />
  ),
  4: (
    <InfoBox
      text="Want to know how I can add value to your team?"
      link="/cover-letter"
      btnText="My Cover Letter"
    />
  )
}

const ModelInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null
}

export default ModelInfo