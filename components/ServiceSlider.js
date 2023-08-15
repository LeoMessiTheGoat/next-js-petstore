import React from 'react';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper'
import 'swiper/css/navigation';
import 'swiper/css';
import Service1Icon from '../public/img/services/service-icon1.svg';
import Service2Icon from '../public/img/services/service-icon2.svg';
import Service3Icon from '../public/img/services/service-icon3.svg';

const services = [
  {
    image: Service1Icon,
    name: 'Pharmacy',
    description: `Welcome to Pet-First, where your pet's health and well-being take center stage. Our dedicated Pharmacy Section is your one-stop destination for comprehensive pharmaceutical solutions tailored to meet the unique needs of your beloved furry companions.`,
    btnText: 'Explore'
  },
  {
    image: Service2Icon,
    name: 'Breed-specific Haircuts',
    description: 'At Pet-First, we understand that every breed is unique, and their grooming needs are as diverse as their personalities. Our Breed-Specific Haircuts service is designed to celebrate the distinct characteristics and charm of each breed while enhancing their comfort and style.',
    btnText: 'Explore'
  },
  {
    image: Service3Icon,
    name: 'Clothes',
    description: 'Welcome to Pet-First, where fashion meets fur! Our curated collection of pet clothing is designed to transform your furry friend into a trendsetting sensation. We believe that pets deserve to strut their stuff in style, which is why we offer a diverse range of clothing that is as comfortable as it is fashionable.',
    btnText: 'Explore'
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
     slidesPerView={1} 
     spaceBetween={30} 
     navigation={true} 
     modules={[Navigation]} 
     breakpoints={{
      768: {
        slidesPerView: 2,
      }
    }}
      className='serviceSlider min-h-[680px]'
    >
      {services.map((service, index) => {
        return (
          <>
          <SwiperSlide className='border border-primary/20 bg-cream min-h-[560px] rounded-[66px] py-16 px-8' key={index}>
            <Image className='mb-9' src={service.image} alt=''/>
            <div className='text-[26px] font-medium mb-4'>{service.name}</div>
            <div className='text-[20px] mb-8'>{service.description}</div>
            <button className='btn btn-primary'>{service.btnText}</button>
          </SwiperSlide>
          </>
        )
      })}
    </Swiper>
  );
};

export default ServiceSlider;
