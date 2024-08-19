import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    const formElements = formRef.current.querySelectorAll('input, textarea, button');
    
    gsap.fromTo(
      formElements,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      iframeRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: iframeRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col w-full h-full bg-gradient-to-b from-black to-gray-400  "> {/* Contact */}
      <div className="flex justify-center items-center text-2xl md:text-4xl font-italiana mb-12  md:mb-0 text-white w-full h-16 bg-gray-500 bg-opacity-25 shadow-md shadow-gray-500">
        Termin
      </div>
      <div className="flex flex-col md:flex-row h-full w-full items-center justify-center">
        <div className="flex w-full md:w-[50%] h-full justify-center items-center mt-12">
          <form className="bg-transparent w-[90%]" ref={formRef}>
            <div className="mb-4">
              <input
                className="shadow appearance-none bg-transparent border-b-2 text-lg md:text-2xl font-roboto font-thin rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Ihr Name"
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none bg-transparent border-b-2 text-lg md:text-2xl font-roboto font-thin rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Ihre Email"
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none bg-transparent border-b-2 text-lg md:text-2xl font-roboto font-thin rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                placeholder="Ihre Telefonnummer"
              />
            </div>
            <div className="mt-8 md:mt-12 mb-6">
              <textarea
                className="shadow h-32 md:h-64 appearance-none border bg-transparent text-lg md:text-2xl font-roboto font-thin rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="4"
                placeholder="Ihre Nachricht"
              ></textarea>
            </div>
            <div className="flex items-center justify-center pt-6">
              <button
                className="bg-black w-48 md:w-64 h-12 text-lg md:text-2xl text-gray-200 font-roboto font-thin italic py-2 px-4 rounded-full bg-opacity-40 hover:tracking-wider transition duration-300 hover:bg-opacity-80 hover:text-white"
                type="button"
              >
                Absenden
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col w-full md:w-[50%] h-full justify-center items-center mt-8 md:mt-0">
          <h2 className='text-lg md:text-2xl w-[90%] md:w-[70%] font-roboto font-thin text-white text-center'>
            Jetzt online oder telefonisch Termin buchen, ohne Termin ca. 1 Std Wartezeit.
          </h2>
          <div className="flex w-full md:w-[80%] h-[40vh] md:h-[50vh]  justify-center items-center mt-6 border-black border-opacity-40 border-4">
            <iframe
              ref={iframeRef}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1740.1408860701006!2d-21.9482546193342!3d64.14180046163438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d60b31a0b7a429%3A0xa508dee2063d4b1d!2zSMOhc2vDs2xpIMONc2xhbmRz!5e0!3m2!1sde!2spt!4v1719761583131!5m2!1sde!2spt"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
