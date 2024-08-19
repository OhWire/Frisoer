import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Slider from "react-slick";
import GalleryImage1 from "../../assets/img/Gallery1.png";
import GalleryImage2 from "../../assets/img/gallery2.png";
import GalleryImage3 from "../../assets/img/Gallery1.png";
import GalleryImage4 from "../../assets/img/gallery2.png";
import GalleryImage5 from "../../assets/img/gallery3.png";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const galleryRef = useRef(null);
  const manGalleryRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      galleryRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: galleryRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      manGalleryRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: manGalleryRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='h-full w-full'>
      <div className="flex flex-col w-full bg-gradient-to-t from-black to-gray-400"> {/* Gallery Section Woman */}
        <div className="flex flex-col w-full" ref={galleryRef}>
          <div className="flex justify-center items-center my-6 text-2xl md:text-3xl font-italiana text-white w-full h-16 bg-gray-200 bg-opacity-25 shadow-md shadow-gray-500">
            GALLERIE
          </div>
          <div className="flex flex-col w-full h-[100vh] md:h-[90vh] items-center justify-center ">
            <div className="flex justify-center md:justify-start w-screen h-16 px-8 md:px-[15vw] mb-2 text-3xl md:text-5xl font-italiana text-white tracking-wider">
              <h3 className='h-24' >Frauen</h3>
            </div>
            <div className="flex w-full h-[90vh] items-center justify-center overflow-hidden my-4">
              <Slider {...settings} className="flex justify-center items-center w-[90%] md:w-[85%] px-4 md:px-16">
                <div className='px-2 md:px-4 h-full'>
                  <img src={GalleryImage1} alt="Gallery 1" className='h-full w-full object-cover' />
                </div>
                <div className='px-2 md:px-4 h-full'>
                  <img src={GalleryImage2} alt="Gallery 2" className='h-full w-full object-cover' />
                </div>
                <div className='px-2 md:px-4 h-full'>
                  <img src={GalleryImage3} alt="Gallery 3" className='h-full w-full object-cover' />
                </div>
                <div className='px-2 md:px-4 h-full'>
                  <img src={GalleryImage4} alt="Gallery 4" className='h-full w-full object-cover' />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full bg-gradient-to-t from-gray-400 to-black pt-16"> {/* Gallery Man Section */}
        <div className="flex flex-col w-full" ref={manGalleryRef}>
          <div className="flex flex-col w-full h-[90vh] items-center justify-center overflow-hidden">
            <div className="flex justify-center md:justify-start w-screen h-16 px-8 md:px-[15vw] py-4 text-3xl md:text-5xl font-italiana text-white tracking-wider">
              <h3 className=''>Männer</h3>
            </div>
            <div className="flex w-full h-[90vh] items-center justify-center overflow-hidden my-4">
              <Slider {...settings} className="flex justify-center items-center w-[90%] md:w-[85%] px-4 md:px-16">
                <div className='px-2 md:px-4 h-full'>
                  <img src={GalleryImage5} alt="Gallery 1" className='h-full w-full object-cover' />
                </div>
                <div className='px-2 md:px-4 h-full'>
                  <img src={GalleryImage5} alt="Gallery 2" className='h-full w-full object-cover' />
                </div>
                <div className='px-2 md:px-4 h-full'>
                  <img src={GalleryImage5} alt="Gallery 3" className='h-full w-full object-cover' />
                </div>
                <div className='px-2 md:px-4 h-full'>
                  <img src={GalleryImage5} alt="Gallery 4" className='h-full w-full object-cover' />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery;
