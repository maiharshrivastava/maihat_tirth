import React from 'react';
import Image from 'next/image';

const Accomodations = () => {
  return (
    <div className="bg-[#ecf0f3] mx-auto p-4 md:p-8 lg:p-12">
      <div className="text-[#000] font-manrope text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
        <span className="text-[#E14503]"> Accommodation</span>
      </div>

      <h3 className="text-[#000] font-manrope text-xl font-bold mb-2">Top Dharamshala In Rishikesh</h3>

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
                src="/img03.png"
                alt="Sthal Image 03"
                width={334.36}
                height={350}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-[#000] font-manrope text-xl font-bold mb-2">Top Ashrams In Rishikesh</h3>
        <p>Add information about the top ashrams in Rishikesh here.</p>

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
                  src="/img03.png"
                  alt="Sthal Image 03"
                  width={334.36}
                  height={350}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accomodations;
