import React from 'react';
import Image from 'next/image';
import Img1 from '../public/img/adoption/img1.png'

const Adoption = () => {
  return(
    <div className='bg-adoption bg-cover bg-center bg-no-repeat min-h-[760px] py-8 flex'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center justify-center gap-x-16'>
        {/* image */}
        <div className='flex-1 mb-6 lg:mb-0'>
          <Image src={Img1} width={542} height={560} alt=''/>
        </div>
        {/* text */}
        <div className='flex-1 text-cream text-center max-w-md lg:text-left lg:max-w-none'>
          <h2 className='h2 mb-6'>Making pet parenting easy for everyone</h2>
          <p className='mb-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <ul className='mb-[38px] flex flex-col gap-y-4 lg:list-disc lg:pl-4'>
            <li>Adoption</li>
            <li>Frozen Raw Food</li>
            <li>Next Day Delivery</li>
          </ul>
          <button className='btn btn-primary mx-auto lg:mx-0'>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Adoption;