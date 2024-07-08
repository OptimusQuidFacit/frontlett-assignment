"use client"

// Carousel.js
import React from 'react';
import Slider, { Settings } from "react-slick";
import { Box } from '@mui/material';

// Import Slick Carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//custom css
import "./styles/carousel.css"
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const settings = {
    dots: true,
    fade:true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };
  const gradient={
    background: "linear-gradient(to right, rgba(33, 33, 33, 1), rgba(33, 33, 33, 0.5) 45%, rgba(166, 166, 166, 0.5) 75%, rgba(166, 166, 166, 0.2))"
  }

  return (
    <Box sx={{ width: '100%', }}>
      <Slider {...settings} className="w-full">
          <Box sx={{ width: '100%', }}>
            {/* <img src={item.image} alt={item.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} /> */}
            <div className='flex items-center'>
              <div className='w-1/2 p-20'>
                <h1 className='font-bold text-5xl leading-relaxed'>
                  SINC Partners is a service incubation company 
                </h1>
                <p className='text-2xl leading-relaxed'>
                Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).
                
                </p>
                <div className='mt-10'>
                <Link href={'#'}>
                  <span className='p-5 bg-primary rounded-full text-lg text-white'>
                    SINC with us
                  </span>
                </Link>
                </div>
              </div>
              <div className='h-[620px] w-1/2 relative'>
                <Image className='object-cover' src={`/incubation.jpeg`} fill alt='A man'/>
              </div>
            </div>
            
          </Box>
            {/* second carousel Item */}
          <Box>
            {/* <img src={item.image} alt={item.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} /> */}
            <div className='flex items-center'>
              <div className='w-2/5 p-20'>
                <h1 className='font-bold text-4xl leading-relaxed'>
                  Come with an Idea Leave with a company
                </h1>
                <p className='text-2xl leading-relaxed'>
                  You alongside seasoned service providers ands investors, expedite the growth and market entry of your Start Up

                </p>
                <div className='mt-10'>
                <Link href={'#'}>
                  <span className='p-5 bg-primary rounded-full text-lg text-white'>
                    SINC with us
                  </span>
                </Link>
                </div>
              </div>
              <div className='h-[620px] w-3/5 relative'>
                <Image className='object-contain h-full' src={`/idea.png`} fill alt='A man'/>
              </div>
            </div>
          </Box>
            {/* Third carousel Item */}
          <Box>
            {/* <img src={item.image} alt={item.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} /> */}
            <div className='flex items-center'>
              <div className='w-1/2 p-20'>
                <h1 className='font-bold text-4xl leading-relaxed'>
                  We are big on these 3 things;                
                </h1>
                <div className='text-2xl leading-relaxed'>
                  <p>
                    <span className='font-bold me-4'>
                      ✓ 
                    </span>
                    Service Incubation & Ecosystem Advocacy 
                  </p>
                  <p>
                    <span className='font-bold me-4'>
                      ✓ 
                    </span>
                    Building SAAS & Marketing Tech Platforms
                  </p>
                  <p>
                    <span className='font-bold me-4'>
                      ✓ 
                    </span>
                    Institutional Innovations
                  </p>
                </div>
                <div className='mt-10'>
                <Link href={'#'}>
                  <span className='p-5 bg-primary rounded-full text-lg text-white'>
                    SINC with us
                  </span>
                </Link>
                </div>
              </div>
              <div className='h-[620px] w-1/2 relative'>
                <Image className='object-cover' src={`/three.png`} fill alt='A man'/>
                <div className=" absolute top-1/2 left-0 h-[620px] -translate-y-1/2 -translate-x-1/2 flex flex-col justify-center gap-[8px]">
                  <div style={gradient} className="text-center px-8 py-5 bg-primary text-white rounded-full">
                    <p className="text-2xl font-semibold">
                      SIP 1.0
                    </p>
                    <p>
                      2024 Cohort
                    </p>
                  </div>
                  <div style={gradient} className="text-center px-8 py-5 bg-primary text-white rounded-full">
                    <p className="text-2xl font-semibold">
                      40+ 
                    </p>
                    <p>
                      2024 Cohort
                    </p>
                  </div>
                  <div style={gradient} className="text-center px-8 py-5 bg-primary text-white rounded-full">
                    <p className="text-2xl font-semibold">
                      $1M+
                    </p>
                    <p>
                      To Be Invested
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Box>
      
      </Slider>
    </Box>
  );
};


export default Hero;