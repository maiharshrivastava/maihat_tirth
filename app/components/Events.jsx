import React from 'react';
import Image from 'next/image';

const Puja = () => {
  return (
    <div className="bg-[#FFF0E9] mx-auto p-4 md:p-8 lg:p-12">
      <div className="text-[#000] font-manrope text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
      Events Ongoing  <span className="text-[#E14503]">In Rishikesh</span>
      </div>

      <p>Enter your preferred pilgrimage destination or embark on an exploratory voyage through our interactive map. Unveil the hidden gems of every region, from the tranquil ghats of Varanasi to the majestic temples of South India. Begin your spiritual exploration today.</p>

      <div className="flex flex-wrap justify-center">
        <div className="w-[50%] lg:w-[33.33%] p-2">
          <Image 
            src="/img01.png"
            alt="Puja Image 01"
            width={334.36}
            height={350}
          />
        </div>
        <div className="w-[50%] lg:w-[33.33%] p-2">
          <Image 
            src="/img02.png"
            alt="Puja Image 02"
            width={334.36}
            height={350}
          />
        </div>
        <div className="w-[50%] lg:w-[33.33%] p-2">
          <Image 
            src="/img02.png"
            alt="Puja Image 03"
            width={334.36}
            height={350}
          />
        </div>
      </div>
    </div>
  );
}

export default Puja;
