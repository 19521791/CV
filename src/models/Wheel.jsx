import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/all";

gsap.registerPlugin(CSSPlugin);

const Wheel = () => {
  const cogLeftRef = useRef(null);
  const cogRightRef = useRef(null);

  useEffect(() => {
    const t1 = gsap.timeline();
    t1.to(cogLeftRef.current, {
      transformOrigin: "50% 50%",
      rotation: "+=360",
      repeat: -1,
      ease: "none",
      duration: 8,
    });

    const t2 = gsap.timeline();
    t2.to(cogRightRef.current, {
      transformOrigin: "50% 50%",
      rotation: "-=360",
      repeat: -1,
      ease: "none",
      duration: 8,
    });
  }, []);

  return (
    <div className='container'>
      <div className='cog-wheel-left' ref={cogLeftRef}>
        <div className='cog-left'>
          <div className="top"></div>
          <div className="down"></div>
          <div className="left-top"></div>
          <div className="left-down"></div>
          <div className="right-top"></div>
          <div className="right-down"></div>
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>

      <div className='cog-wheel-right' ref={cogRightRef}>
        <div className='cog-right'>
          <div className="top"></div>
          <div className="down"></div>
          <div className="left-top"></div>
          <div className="left-down"></div>
          <div className="right-top"></div>
          <div className="right-down"></div>
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  )
}

export default Wheel