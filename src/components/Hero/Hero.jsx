import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from '../../assets/img/logo.png';
import Navbar from '../../components/Navbar/Navbar';
import Woman from '../../assets/img/woman.png';

gsap.registerPlugin(ScrollTrigger);

const  Hero = () => {
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const buttonRef = useRef(null);
  const womanRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      subHeadingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: subHeadingRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 3.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: buttonRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      womanRef.current,
      { opacity: 0, scale: 0.6 },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: womanRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col w-full h-full bg-gradient-to-b from-black to-gray-400" ref={containerRef}> {/* Hero Section */}
      <div className="flex justify-center items-center md:h-[20vh] h-[20vh] overflow-hidden">
        <img src={Logo} alt="Logo" className="h-[15vh] max-w-full sm:w-156" />
      </div>
      <div className="flex flex-col h-full w-full relative">
        <div className="flex w-full h-12 md:h-16"> {/* Navbar */}
          <Navbar />
        </div>
        <div className="flex w-full h-[80vh] flex-col md:flex-row">
          <div className="flex w-full md:w-[50%] md:h-full h-0 overflow-hidden"> {/* woman image */}
            <img ref={womanRef} src={Woman} alt="Woman" className="z-2 md:h-full md:object-contain" />
          </div>
          <div className="flex w-full md:w-[50%] h-full"> {/* right side content */}
            <div className="flex flex-col text-white w-full h-full justify-start items-start md:justify-start pt-16 ">
              <div className="flex flex-col pl-6 border-l-2  md:px-16 border-l-amber-100 ">
                <h3
                  ref={headingRef}
                  className="text-3xl md:text-6xl font-italiana tracking-wide font-thin"
                >
                  PREMIUM <br /> FRISUREN <br /> FÜR JEDEN ANLASS
                </h3>
                <h5
                  ref={subHeadingRef}
                  className="text-lg md:text-xl font-roboto font-thin pt-4 md:pt-8 w-full md:w-[55%]"
                >
                  Hier sind zwei Bilder von wunderschönen Hochzeitsfrisuren. Lass mich wissen, ob du weitere Anpassungen oder spezielle Wünsche hast!
                </h5>
                <div
                  ref={buttonRef}
                  className="flex w-full h-20 pt-4 justify-center md:justify-start items-center"
                >
                  <button className="bg-black text-lg md:text-3xl text-gray-200 font-roboto font-thin italic w-48 md:w-64 h-12 rounded-full bg-opacity-40 hover:tracking-wider transition duration-300 hover:bg-opacity-80 hover:text-white">
                    HIER BUCHEN
                  </button>
                </div>
                
              </div>
              <div className="flex w-full md:w-[50%] pt-14 md:h-full justify-center"> {/* woman image */}
                <img ref={womanRef} src={Woman} alt="Woman" className="z-2 h-72 md:h-0 pb-2 md:object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
