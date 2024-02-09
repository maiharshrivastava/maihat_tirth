import React from 'react';
import Image from 'next/image';

const ReachRishikesh = () => {
  return (
    <div className="bg-[#FFF0E9] mx-auto p-4 md:p-8 lg:p-12">
      <div className="text-[#000] font-manrope text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
        Temple In <span className="text-[#E14503]">Rishikesh</span>
      </div>
      <div/>
      <div className="flex flex-wrap justify-center -mx-2">
        <div className="w-full md:w-1/3 px-2 mb-4">
          <div className="flex justify-center">
            <div className="w-48 lg:w-40 p-2">
              <Image 
                src="/img01.png"
                alt="Sthal Image 01"
                width={334.36}
                height={350}
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-2 mb-4">
          <div className="flex justify-center">
            <div className="w-48 lg:w-40 p-2">
              <Image 
                src="/img02.png"
                alt="Sthal Image 02"
                width={334.36}
                height={350}
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-2 mb-4">
          <div className="flex justify-center">
            <div className="w-48 lg:w-40 p-2">
              <Image 
                src="/img02.png"
                alt="Sthal Image 03"
                width={334.36}
                height={350}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReachRishikesh;
