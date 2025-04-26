/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react'
import gsap from 'gsap'
import { AnimationContext } from '@/contexts/AnimationContext'

const LoaderProgress = () => {
  const { setIsPreloadDone } = useContext(AnimationContext)

  const handleContentLoaded = () => {
    const t1 = gsap.timeline()

    const speed = 1.2
    const phases = [
      { n2: [2, 3, 4], n3: [1, 5] },
      { n2: [5, 6], n3: [7, 8, 9] },
      { n2: [9], n3: [9] }
    ]

    phases.forEach(({ n2, n3 }, index) => {
      let secondDigit = gsap.utils.random(n2)
      let thirdDigit = gsap.utils.random(n3)

      t1.to(
        '.number-2 .number-wrap',
        {
          duration: speed,
          yPercent: (secondDigit - 1) * -10
        },
        '>'
      )
      t1.to(
        '.number-3 .number-wrap',
        {
          duration: speed,
          yPercent: (thirdDigit - 1) * -10
        },
        '<'
      )

      t1.to(
        `.pre-welcome .line:nth-child(${index + 1}) p`,
        {
          duration: speed / 2,
          y: 0
        },
        '<'
      )

      t1.to(
        '.progress-bar',
        {
          duration: speed,
          height: `${secondDigit * 10 + thirdDigit}%`
        },
        '<'
      )
    })

    t1.to(
      ['.number-2 .number-wrap', '.number-3 .number-wrap'],
      {
        duration: speed,
        yPercent: -90
      },
      '>'
    )

    t1.to(
      '.progress-bar',
      {
        duration: speed,
        height: '100%'
      },
      '<'
    )

    t1.to('.number-1 .number-wrap', { duration: speed, y: 0 }, '<' )
      .to(
        ['.number-wrap', '.loading-screen .numbers'],
        {
          duration: speed,
          yPercent: -100
        },
        '>'
      )
      .to(
        '.percentage',
        {
          duration: speed,
          yPercent: -100
        },
        '<'
      )
      .to('.pre-welcome .line p', {
        duration: speed / 2,
        yPercent: -100,
        stagger: 0.2,
        onComplete: () => setIsPreloadDone(true)
      },
      '<'
      )
  }

  useEffect(() => {
    handleContentLoaded()
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-[100dvh] text-[#F5F5F5] bg-[#101010] font-[Sora]">
      <div className="loading-screen">
        <div className="progress-bar absolute left-0 bottom-0 w-[6px] h-0 bg-[#DCD0C2] z-progress-bar" />

        <div className="pre-welcome absolute top-[30%] left-[25%] sm:top-1/3 sm:left-1/3 sm:-translate-x-1/2">
          <div className='line h-[24px] sm:h-[32px] text-[20px] sm:text-[30px] my-[8px] overflow-hidden'>
            <p className='-translate-y-full'>Hi</p>
          </div>
          <div className='line h-[24px] sm:h-[40px] text-[20px] sm:text-[30px] my-[8px] overflow-hidden'>
            <p className='-translate-y-full'>Nice to meet you.</p>
          </div>
        </div>

        <div className="numbers flex items-center h-[80px] absolute bottom-[35%] left-[8%] sm:bottom-[15%] sm:left-[10%] overflow-hidden">
          <div className='number number-1'>
            <div className='number-wrap'>
              <span>1</span>
            </div>
          </div>
          <div className='number number-2'>
            <div className='number-wrap'>
              <span>1</span><span>2</span><span>3</span><span>4</span>
              <span>5</span> <span>6</span><span>7</span><span>8</span>
              <span>9</span><span>0</span>
            </div>
          </div>
          <div className='number number-3'>
            <div className='number-wrap'>
              <span>1</span><span>2</span><span>3</span><span>4</span>
              <span>5</span> <span>6</span><span>7</span><span>8</span>
              <span>9</span><span>0</span>
            </div>
          </div>
          <div className='percentage'>%</div>
        </div>
      </div>
    </div>
  )
}

export default LoaderProgress
