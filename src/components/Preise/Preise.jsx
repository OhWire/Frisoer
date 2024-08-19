import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PricesMan from "../../assets/img/pricesman.png";
import PricesWoman from "../../assets/img/priceswoman.png";

gsap.registerPlugin(ScrollTrigger);

const Preise = () => {
  const frauenRef = useRef(null);
  const maennerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      frauenRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: frauenRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      maennerRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: maennerRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div className="relative flex flex-col w-screen h-[200vh] md:h-[100vh] bg-gradient-to-b from-gray-400 to-black"> {/* Prices */}
      <div className="flex justify-center items-center text-2xl md:text-3xl font-italiana text-white w-full h-16 bg-gray-200 bg-opacity-25 shadow-md shadow-gray-500">
        PREISLISTE
      </div>
      <div className="flex flex-col md:flex-row h-full w-screen justify-between relative">
        <div className="absolute md:relative flex h-full items-end justify-start w-full md:w-auto z-0 md:z-auto">
          <img src={PricesWoman} alt="" className='h-[20vh] md:h-[60vh] opacity-60 md:opacity-100' />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center h-full w-full md:w-[30vw] z-10 md:pb-6" ref={frauenRef}>
          <div className="flex flex-col justify-center items-center gap-2 w-full md:w-[80%] h-[90%] md:border-r-2 border-r-gray-500">
            <h2 className='font-italiana text-5xl md:text-5xl tracking-wide p-0 text-white'>Frauen</h2>
            <div className="flex h-[90%] pl-12 md:pl-0 w-full justify-between font-roboto font-thin text-lg md:text-xl text-white">
              <div className="flex flex-col w-[80%]">
                <ul className='py-3 md:py-6'>
                  <li>Beraten, waschen, schneiden & stylen*</li>
                  <li>Beraten, waschen, schneiden</li>
                  <li>Beraten & schneiden</li>
                  <li>Beraten, einlegen / föhnen & stylen*</li>
                  <li>Pony schneiden</li>
                </ul>
                <ul className='py-3 md:py-6'>
                  <li><h1 className='font-bold'>Farbe / Volumen</h1></li>
                  <li>Ansatzfarbe</li>
                  <li>Farbe oder Tönung</li>
                  <li>Strähnen</li>
                  <li>Foliensträhnen</li>
                  <li>Dauerwelle</li>
                </ul>
                <ul className='py-3 md:py-6'>
                  <li><h1 className='font-bold'>Pflege</h1></li>
                  <li>Haarkur</li>
                  <li>Pflegeshot</li>
                  <li>Farbkur</li>
                  <li>Stundenkur</li>
                </ul>
              </div>
              <div className="flex flex-col w-[20%]">
                <ul className='py-3 md:py-6'>
                  <li>44</li>
                  <li>39</li>
                  <li>35</li>
                  <li>27</li>
                  <li>12</li>
                </ul>
                <ul className='py-3 md:py-6'>
                  <li><br /></li>
                  <li>33</li>
                  <li>39</li>
                  <li>39</li>
                  <li>44</li>
                  <li>44</li>
                </ul>
                <ul className='py-3 md:py-6'>
                  <li><br /></li>
                  <li>33</li>
                  <li>39</li>
                  <li>39</li>
                  <li>44</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center h-full w-full md:w-[30vw] z-10 mt-4 md:mt-0" ref={maennerRef}>
          <div className="flex flex-col justify-center items-center textc gap-6 w-full md:w-[80%] h-[90%]">
            <h2 className='font-italiana text-5xl md:text-5xl tracking-wide text-white'>Männer</h2>
            <div className="flex h-[90%] pl-12 md:pl-0  w-full justify-between font-roboto font-thin text-lg md:text-xl text-white">
              <div className="flex flex-col w-[80%]">
                <ul className='py-3 md:py-6'>
                  <li>Beraten, waschen, schneiden & stylen*</li>
                  <li>Beraten, schneiden, stylen</li>
                  <li>Maschinenschnitt</li>
                  <li><br /></li>
                  <li>Beraten & Bartschnitt</li>
                  <li>Nassrasur Nacken oder Konturen</li>
                  <li>Nassrasur</li>
                </ul>
                <ul className='py-3 md:py-6'>
                  <li><h1 className='font-bold'>Kinder bis 12 Jahre</h1></li>
                  <li>Kleinkinder (bis 3 Jahre)</li>
                  <li>Kinder schneiden</li>
                  <li>Kinder schneiden & stylen</li>
                </ul>
              </div>
              <div className="flex flex-col w-[20%]">
                <ul className='py-3 md:py-6'>
                  <li>44</li>
                  <li>39</li>
                  <li>35</li>
                  <li><br /></li>
                  <li>7-17</li>
                  <li>ab 7</li>
                  <li>7-17</li>
                </ul>
                <ul className='py-3 md:py-6'>
                  <li><br /></li>
                  <li>12-17</li>
                  <li>22</li>
                  <li>29</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute md:relative flex h-full items-end justify-end w-full md:w-auto z-0 md:z-auto">
          <img src={PricesMan} alt="" className='h-[45vh] md:h-[70vh] opacity-70  md:opacity-100' />
        </div>
      </div>
    </div>
  );
};

export default Preise;
