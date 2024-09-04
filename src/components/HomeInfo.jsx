import { Link } from "react-router-dom"
import arrow from '../assets/icons/arrow.svg'

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">
        {text}
      </p>
      <Link to={link} className="neo-brutalism-white neo-btn" >
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
  )
}

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Douglus Nguyen</span>
      <span className='text-orange-300 mx-2'>ʕ•́ᴥ•̀ʔっ</span>
      <br />
      A Backend Software Engineer from DakLak
    </h1>
  ),
  2: (
    <InfoBox
      text="I may not know it all, but I'll give it my all!"
      link="/about"
      btnText="Let's Go!"
    />
  ),
  3: (
    <InfoBox
      text="Curious to see what I've done? Check out my projects!"
      link="/projects"
      btnText="Explore"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      link="/contact"
      btnText="Let's Talk"
    />
  )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null
}

export default HomeInfo