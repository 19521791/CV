/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { githubLink, linkedinLink } from '@/constants'
import { ImageContext } from '@/contexts/ImageContext'
import Footer from '@/components/Footer'
import { useIsMobile, useIsDesktop } from '@/hooks/useIsMobile'

const Item = ({ src, text }) => {
  return (
    <div className='text-base font-medium sm:font-normal sm:text-base md:text-lg lg:text-xl flex flex-row items-center justify-start'>
      <img src={src} className='hidden sm:inline-block w-6 h-6 mr-2' />
      <div className='inline-block sm:hidden w-1 h-1 rounded-full bg-slate-400 mr-2'></div>
      <span>{text}</span>
    </div>
  )
}

const About = () => {
  const { images } = useContext(ImageContext)

  const smallerLgScreen = useIsMobile(1024)
  const biggerLgScreen = useIsDesktop(1024)
  const smallerSmScreen = useIsMobile(680)

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
    <main className="mx-auto p-4 sm:py-8 sm:px-4 pb-12 !pt-[100px] min-h-[calc(100vh-80px)] max-w-[1500px]">
      <div className='info-container flex flex-col'>
        <div className='flex flex-col xd:flex-row gap-6 sm:gap-10 xd:gap-4 xm:gap-5 lg:gap-6 xl:gap-10  xl:pb-[80px]'>
          <div className='w-full flex justify-center'>
            <img
              src={images['myself']}
              alt='My Self'
              className='h-[60vh] w-[90vw] sm:h-[600px] sm:w-[600px] md:h-[480px] md:w-[480px] xm:h-[500px] xm:w-[500px] lg:h-[550px] lg:w-[450px]
            xl:h-[600px] xl:w-[600px] max-w-none rounded-md object-cover'
              loading='eager'
            />
          </div>

          <div className='xl:pt-5 lg:flex lg:flex-col xl:mb-10'>
            <div className='paragraph lg:mr-[20px]'>
              <h1 className='text-4xl sm:text-5xl xm:text-6xl mb-4 font-medium font-[Sora]'>Who I Am, Briefly</h1>
              <div className='text-base md:text-lg lg:text-xl md:leading-snug lg:leading-normal xl:leading-loose text-slate-600 lg:mb-7 xl:mb-8'>Hi, My name is Nguyen Phi Long. I&apos;m from Dak Lak and work as a backend developer.
                I&apos;m passionate about building robust backend systems and exploring new technologies.
                When I&apos;m not coding, if I&apos;m not hanging out with friends, I often hop on my motorbike and go on a trip to clear my mind.</div>
            </div>

            {biggerLgScreen && (
              <div className='info'>
                <div className='flex flex-col gap-5 mt-3'>
                  <div className='info-contact flex flex-col lg:gap-3 xl:gap-4'>
                    <Item src={images['mail']} text={'toannguyenvan145@gmail.com'} />
                    <Item src={images['phone']} text={'+84 393 277 584'} />
                    <Item src={images['location']} text={'Hiep Binh Phuoc, Thu Duc, Ho Chi Minh City'} />
                  </div>

                  <div className='info-contact flex flex-row gap-10'>
                    <div>
                      <a href={githubLink}>
                        <Item src={images['github']} text={'Github'} />
                      </a>
                    </div>
                    <div>
                      <a href={linkedinLink}>
                        <Item src={images['linkedin']} text={'LinkedIn'} />
                      </a>
                    </div>

                    <Item src={images['time']} text={getTimeByTimeZone('Asia/Ho_Chi_Minh')} />
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {smallerLgScreen && (
          <div>
            <p className='mt-10 text-xl pb-1'>Contact Details</p>

            <div className='info'>
              <div className='flex flex-col sm:gap-3 md:flex-row md:justify-around gap-3 md:gap-10 lg:gap-16 xl:gap-20'>
                <div className='info-contact flex flex-col gap-3'>
                  <Item src={images['mail']} text={'toannguyenvan145@gmail.com'} />
                  <Item src={images['phone']} text={'+84 393 277 584'} />
                  <Item src={images['location']} text={'Hiep Binh Phuoc, Thu Duc, Ho Chi Minh City'} />
                </div>

                <div className='info-contact flex flex-col gap-3'>
                  <div>
                    <a href={githubLink}>
                      <Item src={images['github']} text={'Github'} />
                    </a>
                  </div>
                  <div>
                    <a href={linkedinLink}>
                      <Item src={images['linkedin']} text={'LinkedIn'} />
                    </a>
                  </div>

                  <Item src={images['time']} text={getTimeByTimeZone('Asia/Ho_Chi_Minh')} />
                </div>
              </div>
            </div>
          </div>
        )}

        <p className='text-xl pb-1 lg:mt-5 xl:mt-0'>Tech Stack</p>
        <div className='info info-contact'>
          {biggerLgScreen && (
            <div className='flex flex-row justify-between mx-10 xl:mx-20'>
              <div className='flex flex-col gap-3 rounded-lg lg:border-[1px] lg:border-[#B1A994] py-3 lg:p-3'>
                <Item src={images['ruby']} text={'Ruby'} />
                <Item src={images['rails']} text={'Ruby on Rails'} />
                <Item src={images['postgres']} text={'Postgresql'} />
                <Item src={images['redis']} text={'Redis'} />
                <Item src={images['capistrano']} text={'Capistrano'} />
                <Item src={images['git']} text={'GIT'} />
              </div>

              <div className='flex flex-col gap-3 py-3'>
                <Item src={images['reactjs']} text={'ReactJS'} />
                <Item src={images['javascript']} text={'Javascript'} />
                <Item src={images['html']} text={'HTML'} />
                <Item src={images['css']} text={'CSS'} />
                <Item src={images['tailwind']} text={'Tailwind'} />
              </div>

              <div className='flex flex-col gap-3 py-3'>
                {/* <Item src={images['ansible']} text={'Ansible'} /> */}
                <Item src={images['nginx']} text={'Nginx'} />
                <Item src={images['actions']} text={'Github Actions'} />
                <Item src={images['docker']} text={'Docker'} />
                <Item src={images['compose']} text={'Docker Compose'} />
              </div>

              <div className='flex flex-col gap-3 py-3'>
                <Item src={images['nodejs']} text={'NodeJS'} />
                <Item src={images['express']} text={'ExpressJS'} />
                <Item src={images['mongodb']} text={'MongoDB'} />
              </div>
            </div>
          )}

          {smallerLgScreen && (
            <div className='flex flex-row justify-around gap-10'>
              <div className='flex flex-col gap-3 rounded-lg py-3 p-3'>
                <Item src={images['ruby']} text={'Ruby'} />
                <Item src={images['rails']} text={'Ruby on Rails'} />
                <Item src={images['postgres']} text={'Postgresql'} />
                <Item src={images['redis']} text={'Redis'} />
                <Item src={images['capistrano']} text={'Capistrano'} />
                <Item src={images['git']} text={'GIT'} />

                <Item src={images['nodejs']} text={'NodeJS'} />
                <Item src={images['express']} text={'ExpressJS'} />
                <Item src={images['mongodb']} text={'MongoDB'} />
              </div>

              <div className='flex flex-col gap-3 py-3'>
                <Item src={images['reactjs']} text={'ReactJS'} />
                <Item src={images['javascript']} text={'Javascript'} />
                <Item src={images['html']} text={'HTML'} />
                <Item src={images['css']} text={'CSS'} />
                <Item src={images['tailwind']} text={'Tailwind'} />

                <Item src={images['nginx']} text={'Nginx'} />
                <Item src={images['actions']} text={'Github Actions'} />
                <Item src={images['docker']} text={'Docker'} />
                <Item src={images['compose']} text={'Docker Compose'} />
              </div>
            </div>
          )}

        </div>

        <p className='text-xl pb-1'>University</p>
        <div className='info info-contact flex flex-col gap-3 md:!pl-[20px] xl:!pl-[80px]'>
          <div>
            <Item src={images['university']} text={'University Information of Technology'} />
          </div>
          <div>
            <Item src={images['major']} text={'Major: Computer Science'} />
          </div>
          <div>
            <Item src={images['gpa']} text={'GPA: 7.4'} />
          </div>
          <div>
            { smallerSmScreen
              ? (
                <Item src={images['degree']} text={'Status: Awaiting graduation'} />
              )
              : (
                <Item src={images['degree']} text={'Status: Completed courses (Awaiting graduation)'} />
              )
            }
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default About

{/* <div className="absolute bottom-20 -right-1/4 hidden lg:block justify-center w-[400px] h-[400px]">
        <Astronaut />
      </div> */}
