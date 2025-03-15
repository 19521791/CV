import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CoverLetter() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            once: true
          },
        }
      );
    });
  }, []);

  return (
    <div className="max-container bg-gray-100 flex justify-center items-center">
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

        <p ref={(el) => (sectionsRef.current[1] = el)} className=" mt-4 md:indent-6">
          Throughout my software development journey, I have always focused on building{" "}
          secure, scalable, and efficient systems. With experience in{" "}
          Ruby on Rails, PostgreSQL, Sidekiq, and Redis, I have contributed
          to various critical features, including system security, transaction processing, and third-party integrations.
        </p>

        <p ref={(el) => (sectionsRef.current[2] = el)} className=" mt-4">
          I have developed a two-factor authentication (2FA) system, allowing users to verify
          their identity via Google Authenticator or SMS OTP, enhancing platform security.
          Additionally, I have worked on fraud detection and transaction monitoring,
          ensuring transparency and safety within the system.
        </p>

        <p ref={(el) => (sectionsRef.current[3] = el)} className=" mt-4">
          Moreover, I have built payout functionalities for the merchant dashboard,
          optimized fee calculations for payout transactions, and expanded the{" "}
          public API to support various business use cases. My experience also includes{" "}
          integrating suppliers into the system, enhancing service scalability, and{" "}
          implementing Google Captcha v3 to protect against bots and abusive behaviors.
        </p>

        <p ref={(el) => (sectionsRef.current[4] = el)} className=" mt-4">
          With a strong problem-solving mindset and a deep understanding of backend optimization, I am eager
          to contribute to Company by developing robust and high-performance systems. I would love
          the opportunity to discuss how my skills align with your team’s goals.
        </p>

        <p ref={(el) => (sectionsRef.current[5] = el)} className=" mt-4">
          <strong>Best regards,</strong><br /> Nguyen Phi Long
        </p>
      </div>
    </div>
  );
}
