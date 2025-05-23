/* eslint-disable react/prop-types */
import { useContext, useState, useRef, useEffect } from 'react'
import { githubLink, linkedinLink } from '@/constants'
import { ImageContext } from '@/contexts/ImageContext'
import Footer from '@/components/Footer'
import {
  Mail,
  Phone,
  Clock,
  Github,
  X,
  MapPin,
  Linkedin
} from 'lucide-react'

const TechIcon = ({ icon, name }) => (
  <div className="tooltip" data-tip={name}>
    <div className="bg-white p-2 rounded-full shadow-md">
      <img src={icon} className="w-6 h-6" alt={name} />
    </div>
  </div>
)

const TechCard = ({ icon, name, category, delay }) => (
  <div
    className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 animate-fadeIn"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
      <img src={icon} className="w-8 h-8" alt={name} />
    </div>
    <h3 className="font-bold text-gray-800 mb-1">{name}</h3>
    <span className="text-xs text-amber-600 font-medium">{category}</span>
  </div>
)

const TimelineItem = ({ date, title, description, icon, side, delay }) => (
  <div
    className={`relative mb-12 w-full ${side === 'left' ? 'pr-24 pl-4' : 'pl-24 pr-4'} animate-fadeIn`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className={`bg-white p-6 rounded-xl shadow-md relative ${side === 'left' ? 'text-right' : 'text-left'}`}>
      <div className={`absolute top-6 ${side === 'left' ? '-right-12' : '-left-12'} w-10 h-10 rounded-full bg-amber-400 border-4 border-white flex items-center justify-center shadow-md`}>
        <img src={icon} className="w-5 h-5" alt={title} />
      </div>
      <div className={`absolute top-6 ${side === 'left' ? '-right-4' : '-left-4'} w-4 h-4 transform rotate-45 bg-white`}></div>
      <span className="text-sm text-amber-600 font-medium">{date}</span>
      <h3 className="text-xl font-bold text-gray-800 mt-1">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  </div>
)

const ContactItem = ({ icon, title, value, href }) => (
  <div className="flex items-start">
    <div className="bg-latte-100 p-2 rounded-lg mr-4 text-latte-600">
      {icon}
    </div>
    <div>
      <p className="text-sm text-latte-500">{title}</p>
      {href ? (
        <a
          href={href}
          className="text-latte-700 hover:text-accent-copper transition-colors"
          target="_blank"
          rel="noopener"
        >
          {value}
        </a>
      ) : (
        <p className="text-latte-700">{value}</p>
      )}
    </div>
  </div>
)

const About = () => {
  const { images } = useContext(ImageContext)
  const [showContact, setShowContact] = useState(false)
  const [closing, setClosing] = useState(false)
  const modalRef = useRef()

  const techStack = [
    { icon: images['ruby'], name: 'Ruby', category: 'Backend' },
    { icon: images['rails'], name: 'Rails', category: 'Framework' },
    { icon: images['postgres'], name: 'PostgreSQL', category: 'Database' },
    { icon: images['redis'], name: 'Redis', category: 'Cache' },
    { icon: images['nodejs'], name: 'Node.js', category: 'Runtime' },
    { icon: images['express'], name: 'Express', category: 'Framework' },
    { icon: images['docker'], name: 'Docker', category: 'DevOps' },
    { icon: images['nginx'], name: 'NGINX', category: 'Server' },
    { icon: images['reactjs'], name: 'React', category: 'Frontend' },
    { icon: images['javascript'], name: 'JavaScript', category: 'Language' },
    { icon: images['mongodb'], name: 'MongoDB', category: 'Database' },
    { icon: images['git'], name: 'Git', category: 'Version Control' },
    { icon: images['tailwind'], name: 'Tailwind', category: 'CSS' },
    { icon: images['html'], name: 'HTML5', category: 'Markup' },
    { icon: images['css'], name: 'CSS3', category: 'Styling' }
  ]

  const timelineItems = [
    {
      date: '2019 - 2025',
      title: 'University of Information Technology',
      description: 'Bachelor of Computer Science, GPA: 7.4/10',
      icon: images['university']
    },
    {
      date: '2022',
      title: 'First Backend Project',
      description: 'Built a REST API using Node.js and Express',
      icon: images['nodejs']
    },
    {
      date: '2023',
      title: 'Ruby on Rails Discovery',
      description: 'Fell in love with Ruby ecosystem',
      icon: images['rails']
    },
    {
      date: '2023 - 2024',
      title: 'Backend Developer',
      description: 'Building scalable systems for production',
      icon: images['ruby']
    }
  ]

  const getTimeByTimeZone = (timeZone) => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).format(new Date())
  }

  const handleClose = () => {
    setClosing(true)
    setTimeout(() => {
      setShowContact(false)
      setClosing(false)
    }, 200) // Khớp với thời gian animation
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowContact(false)
      }
    }

    // Đóng modal khi ấn ESC
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowContact(false)
      }
    }

    if (showContact) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [showContact])

  useEffect(() => {
    if (showContact && modalRef.current) {
      modalRef.current.focus()
    }
  }, [showContact])

  useEffect(() => {
    if (showContact) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [showContact])

  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-amber-50">

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-24 min-h-screen">

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center  mb-14 sm:mb-28">
          <div className="relative group perspective-1000">

            <div className="relative transform-style-preserve-3d group-hover:rotate-y-15 transition-transform duration-700 ease-out">
              <div className="backface-hidden bg-white rounded-2xl shadow-2xl overflow-hidden border-8 border-white">
                <img
                  src={images['myself']}
                  alt="Nguyen Phi Long"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-gray-800 to-amber-700 rounded-2xl shadow-2xl transform rotate-y-180 flex items-center justify-center p-8 text-white">
                <div className="text-center">
                  <p className="text-lg mb-2">&quot;Building digital backbones</p>
                  <p className="text-2xl font-bold">for the modern web&quot;</p>
                  <div className="mt-4 flex justify-center space-x-4">
                    <TechIcon icon={images['ruby']} name="Ruby" />
                    <TechIcon icon={images['rails']} name="Rails" />
                    <TechIcon icon={images['nodejs']} name="Node" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-gray-800">
                Backend Architect
              </span>
              <br />
              <span className="text-gray-700">& Problem Solver</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              I craft <span className="font-semibold text-amber-600">scalable systems</span> and
              <span className="font-semibold text-gray-800"> efficient APIs</span> that power
              modern applications. With expertise in database optimization and system architecture,
              I turn complex problems into elegant solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center"
                onClick={() => setShowContact(true)}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </a>

              {showContact && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                  <div ref={modalRef} className={`relative bg-white rounded-xl max-w-md w-full p-8 shadow-2xl ${
                    closing ? 'animate-fadeOut' : 'animate-fadeIn'
                  }`}>
                    <button
                      onClick={handleClose}
                      className="absolute top-2 right-2 sm:top-4 sm:right-4 text-latte-500 hover:text-latte-700"
                    >
                      <X className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    <h3 className="text-2xl font-bold text-latte-700 mb-6 flex items-center">
                      <Mail className="w-6 h-6 mr-2 text-accent-copper" />
                      Contact Information
                    </h3>

                    <div className="space-y-4">
                      <ContactItem
                        icon={<Mail className="w-5 h-5" />}
                        title="Email"
                        value="toannguyenvan145@gmail.com"
                        href="mailto:toannguyenvan145@gmail.com"
                      />

                      <ContactItem
                        icon={<Phone className="w-5 h-5" />}
                        title="Phone"
                        value="+84 393 277 584"
                        href="tel:+84393277584"
                      />

                      <ContactItem
                        icon={<MapPin className="w-5 h-5" />}
                        title="Location"
                        value="Hiep Binh Phuoc, Thu Duc, Ho Chi Minh City"
                      />

                      <ContactItem
                        icon={<Clock className="w-5 h-5" />}
                        title="Local Time"
                        value={getTimeByTimeZone('Asia/Ho_Chi_Minh')}
                      />
                    </div>

                    <div className="mt-8 pt-6 border-t border-latte-200">
                      <h4 className="font-medium text-latte-600 mb-3">Connect via:</h4>
                      <div className="flex space-x-4">
                        <a
                          href={githubLink}
                          className="w-10 h-10 rounded-full bg-latte-100 flex items-center justify-center hover:bg-latte-200 transition-colors"
                          target="_blank"
                        >
                          <Github className="w-5 h-5 text-latte-700" />
                        </a>
                        <a
                          href={linkedinLink}
                          className="w-10 h-10 rounded-full bg-latte-100 flex items-center justify-center hover:bg-latte-200 transition-colors"
                          target="_blank"
                        >
                          <Linkedin className="w-5 h-5 text-latte-700" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <a href={githubLink} className="px-8 py-3 bg-gray-800 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C20.614 20.115 22 16.379 22 12.018 22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </section>

        <section className=" mb-14 sm:mb-28">
          <h2 className="text-4xl font-bold mb-12 text-center relative">
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-amber-600 px-4">
              Technical Expertise
            </span>
            <span className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent z-0"></span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {techStack.map((tech, index) => (
              <TechCard
                key={index}
                icon={tech.icon}
                name={tech.name}
                category={tech.category}
                delay={index * 100}
              />
            ))}
          </div>
        </section>

        <section className=" mb-14 sm:mb-28">
          <h2 className="text-4xl font-bold mb-12 text-center">
            My Journey
          </h2>

          <div className="relative">

            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-400 to-gray-200"></div>

            {timelineItems.map((item, index) => (
              <TimelineItem
                key={index}
                date={item.date}
                title={item.title}
                description={item.description}
                icon={item.icon}
                side={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 150}
              />
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-14 sm:mb-28">
          <div className="grid md:grid-cols-2">
            <div className="p-12">
              <h2 className="text-4xl font-bold mb-6">Beyond The Code</h2>
              <p className="text-lg text-gray-600 mb-8">
                When I&apos;m not optimizing database queries or designing APIs, I&apos;m an avid traveler
                who explores Vietnam&apos;s hidden gems on my motorbike. These adventures fuel my
                creativity and teach me valuable lessons about resilience and adaptability.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Current Focus</h3>
                    <p className="text-gray-600">Building monolith architectures with containerization</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Local Time</h3>
                    <p className="text-2xl font-mono text-gray-800">
                      {getTimeByTimeZone('Asia/Ho_Chi_Minh')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-80">
              <img
                src={images['myself']}
                alt="Motorbike Adventure"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent flex items-end p-8">
                <p className="text-white text-lg italic">
                &quot;The open road teaches you things no textbook ever could.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}

export default About
