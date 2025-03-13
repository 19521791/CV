/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwindcss/tailwind.css";

gsap.registerPlugin(ScrollTrigger);

const CoverLetter = () => {
  const sections = useRef([]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    sections.current.forEach((section, _) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="max-container flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">My Cover Letter</h1>
      <div className="max-w-2xl space-y-12">
        {["Dear Hiring Manager,", "I am excited to apply for the role...", "With my experience in...", "I look forward to hearing from you!", ";lkajsdf;lkajsdfl;kjas;dlkfja;lskdjf;lkasdjf"].map((text, index) => (
          <p
            key={index}
            ref={(el) => (sections.current[index] = el)}
            className="text-lg opacity-0"
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CoverLetter