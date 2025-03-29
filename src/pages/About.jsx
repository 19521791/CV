/* eslint-disable react/prop-types */
import { githubLink, linkedinLink, svgs } from '@/constants'
// import Astronaut from '@/models/Astronaut'

const Item = ({ src, text }) => {
  return (
    <div className='flex items-center gap-2'>
      <div className='rounded-lg w-6 h-6'>
        <img src={src} className='w-full h-full object-contain' />
      </div>
      <div>{ text }</div>
    </div>
  )
}

const About = () => {
  const getTimeByTimeZone = (timeZone) => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).format(new Date())
  }

  return (
    <main className="relative max-container max-w-7xl flex items-center justify-center">
      <div className='info-container flex flex-col w-full'>
        <div className='flex flex-row gap-10 pb-[80px] w-full'>
          <div className='w-full flex justify-center'>
            <img src={svgs['myself']} alt='My Self' className='h-[450px] w-[400px] rounded-md object-cover' />
          </div>

          <div className='pt-5 flex flex-col gap-10'>
            <div className='paragraph mr-[80px]'>
              <h1 className='text-5xl mb-3 font-semibold'>Who I Am, Briefly</h1>
              <div className='text-lg'>Hi, My name is Nguyen Phi Long. I&apos;m from Dak Lak and work as a backend developer.
                I&apos;m passionate about building robust backend systems and exploring new technologies.
                When I&apos;m not coding, if I&apos;m not hanging out with friends, I often hop on my motorbike and go on a trip to clear my mind.</div>
            </div>

            <div className='contact info-details pt-8'>
              <div className='flex flex-row gap-20'>
                <div className='info-contact flex flex-col gap-3'>
                  <Item src={svgs['envelope']} text={'toannguyenvan145@gmail.com'} />
                  <Item src={svgs['phone']} text={'+84 393 277 584'} />
                  <Item src={svgs['location']} text={'Hiep Binh Phuoc, Thu Duc, Ho Chi Minh City'} />
                </div>

                <div className='info-contact flex flex-col gap-3'>
                  <div>
                    <a href={githubLink}>
                      <Item src={svgs['github']} text={'Github'} />
                    </a>
                  </div>
                  <div>
                    <a href={linkedinLink}>
                      <Item src={svgs['linkedin']} text={'LinkedIn'} />
                    </a>
                  </div>

                  <Item src={svgs['time']} text={getTimeByTimeZone('Asia/Ho_Chi_Minh')} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <p>Tech Stack</p>
        <div className='info flex flex-row justify-between info-contact'>
          <div className='ml-20 flex flex-col gap-3 rounded-lg border-2 border-cyan-500 p-3'>
            <Item src={svgs['ruby']} text={'Ruby'} />
            <Item src={svgs['rails']} text={'Ruby on Rails'} />
            <Item src={svgs['postgresql']} text={'Postgresql'} />
            <Item src={svgs['redis']} text={'Redis'} />
            <Item src={svgs['capistrano']} text={'Capistrano'} />
            <Item src={svgs['git']} text={'GIT'} />
          </div>

          <div className='flex flex-col gap-3 py-3'>
            <Item src={svgs['python']} text={'Python'} />
            <Item src={svgs['nodejs']} text={'NodeJS'}/>
            <Item src={svgs['express']} text={'ExpressJS'} />
            <Item src={svgs['mongodb']} text={'MongoDB'} />
            <Item src={svgs['typescript']} text={'Typescript'} />
          </div>

          <div className='flex flex-col gap-3 py-3'>
            <Item src={svgs['ansible']} text={'Ansible'} />
            <Item src={svgs['nginx']} text={'Nginx'} />
            <Item src={svgs['actions']} text={'Github Actions'} />
            <Item src={svgs['docker']} text={'Docker'} />
            <Item src={svgs['compose']} text={'Docker Compose'} />
          </div>

          <div className='mr-20 flex flex-col gap-3 py-3'>
            <Item src={svgs['react']} text={'ReactJS'} />
            <Item src={svgs['javascript']} text={'Javascript'} />
            <Item src={svgs['html']} text={'HTML'} />
            <Item src={svgs['css']} text={'CSS'} />
            <Item src={svgs['material']} text={'MUI'} />
            <Item src={svgs['tailwind']} text={'Tailwind'} />
          </div>
        </div>

        <p>University</p>
        <div className='info info-contact flex flex-col gap-3'>
          <div>
            <Item src={svgs['university']} text={'University Information of Technology'} />
          </div>
          <div>
            <Item src={svgs['major']} text={'Major: Computer Science'} />
          </div>
          <div>
            <Item src={svgs['score']} text={'GPA: 7.4'} />
          </div>
          <div>
            <Item src={svgs['degree']} text={'Status: Completed courses (Awaiting graduation)'} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default About

{/* <div className="absolute bottom-20 -right-1/4 hidden lg:block justify-center w-[400px] h-[400px]">
        <Astronaut />
      </div> */}

{/* <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between gap-4">
          <div className="flex items-center">
            <p className="font-extrabold text-2xl">Let&aposs build something together!</p>
          </div>
          <div
            className="w-[400px] h-[130px] bg-cover bg-center bg-no-repeat sm:w-[320px] sm:h-[110px]"
            style={{ backgroundImage: `url(${images['pencil']})` }}
          >
            <div className="w-full h-full flex justify-center items-center relative">
              <div className="absolute text-gray-600 text-lg">
                toannguyenvan145@gmail.com
              </div>
            </div>
          </div>
        </div> */}