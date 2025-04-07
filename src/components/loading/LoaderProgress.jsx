import { useEffect } from 'react'
import gsap from 'gsap'

const LoaderProgress = () => {
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
          width: `${secondDigit * 10 + thirdDigit}%`
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
        width: '100%'
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
        stagger: 0.2
      },
      '<'
      )
      .to('.progress-bar', {
        duration: speed / 1.5,
        height: '100%'
      })
  }

  useEffect(() => {
    handleContentLoaded()
  }, [])

  return (
    <div className="loading-container">
      <div className="loading-screen">
        <div className="progress-bar"></div>

        <div className='pre-welcome font-[Sora]'>
          <div className='line'>
            <p>Hi</p>
          </div>
          <div className='line'>
            <p>Nice to meet you.</p>
          </div>
        </div>

        <div className="numbers">
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
