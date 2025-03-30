import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CoverLetter() {
  const sectionsRef = useRef([])

  useEffect(() => {
    gsap.fromTo(
      sectionsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.out' }
    )
  }, [])

  return (
    <div className="mx-auto p-4 sm:p-8 md:p-12 pb-12 !pt-[50px] xm:pt-0 min-h-[calc(100vh-80px)] bg-gray-100 flex justify-center items-center">
      <div
        className="max-w-3xl bg-white shadow-xl p-4 md:p-10 rounded-lg text-lg md:text-xl leading-relaxed text-gray-700 md:text-justify md:leading-7"
      >
        <h1 className="text-6xl font-serif font-bold text-center tracking-wide mb-6">
          COVER LETTER
        </h1>
        <div className="border-t border-gray-300 mb-6"></div>

        <p ref={(el) => (sectionsRef.current[0] = el)} className="md:indent-6">
          <span className="text-5xl font-serif font-bold">D</span>
          ear Hiring Manager,
        </p>

        <p ref={(el) => (sectionsRef.current[1] = el)} className="mt-4 md:indent-6 space-y-4">
          As a backend developer with expertise in <strong>Ruby on Rails, PostgreSQL, Sidekiq, Capistrano and Redis</strong>, I specialize in building secure, high-performance platforms that solve real business challenges. Whether it&apos;s processing sensitive transactions or scaling systems for growth, I focus on delivering both technical excellence and tangible impact.
        </p>

        <p ref={(el) => (sectionsRef.current[2] = el)} className="mt-4 md:indent-6">
          My recent projects demonstrate my ability to design <strong>authentication systems</strong> that balance security and user experience, develop <strong>transaction processing pipelines</strong> with built-in fraud detection, optimize <strong>APIs and third-party integrations</strong> for better interoperability, and implement <strong>scalable solutions</strong> that adapt to business needs.
        </p>

        <p ref={(el) => (sectionsRef.current[3] = el)} className="mt-4 md:indent-6">
          What sets me apart is my <strong>problem-solving approach</strong>: I break down complex requirements into actionable steps, prioritize solutions that deliver both short-term results and long-term scalability, and communicate technical concepts clearly to non-technical stakeholders.
        </p>

        <p ref={(el) => (sectionsRef.current[4] = el)} className="mt-4 md:indent-6">
          I&apos;m particularly drawn to teams that value <strong>Collaboration</strong> between developers and business units, <strong>Iterative improvement</strong> of systems, and <strong>Data-driven decisions</strong>. If this resonates with your engineering culture, I&apos;d love to explore how I can contribute.
        </p>

        <p ref={(el) => (sectionsRef.current[5] = el)} className="mt-4">
          <strong>Best regards,</strong><br />
          Nguyen Phi Long
        </p>
      </div>
    </div>
  )
}