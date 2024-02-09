import React from 'react';

const Temples = () => {
  return (
    <div className="bg-[#FFF0E9] mx-auto p-4 md:p-8 lg:p-12">
       <div className="text-[#000] font-manrope text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
        How to Reach <span className="text-[#E14503]">In Rishikesh</span>
      </div>
      <div className="flex flex-col md:flex-row justify-between space-y-12 md:space-y-0 md:space-x-8">
        {/* Add information about temples in Rishikesh */}
        <div className="flex-1">
          <div className="border border-[#000] p-6 md:p-18 rounded-md">
            <h3 className="text-[#000] font-manrope text-xl font-bold mb-2">Triveni Ghat</h3>
            <p className="text-[#000] font-manrope text-base mb-4 text-justify">
              Triveni Ghat is a famous bathing ghat in Rishikesh, known for its spiritual significance and the evening Ganga Aarti.
            </p>
          </div>

          <div className="border border-[#000] p-6 md:p-18 rounded-md">
            <h3 className="text-[#000] font-manrope text-xl font-bold mb-2">Bharat Mandir</h3>
            <p className="text-[#000] font-manrope text-base mb-4 text-justify">
              Bharat Mandir is the oldest temple in Rishikesh, dedicated to Lord Vishnu. It is an important pilgrimage site.
            </p>
          </div>
        </div>

        <div className="flex-1">
          <div className="border border-[#000] p-6 md:p-18 rounded-md">
            <h3 className="text-[#000] font-manrope text-xl font-bold mb-2">Neelkanth Mahadev Temple</h3>
            <p className="text-[#000] font-manrope text-base mb-4 text-justify">
              Neelkanth Mahadev Temple is a revered shrine dedicated to Lord Shiva, situated amidst the lush green mountains.
            </p>
          </div>

          <div className="border border-[#000] p-6 md:p-18 rounded-md">
            <h3 className="text-[#000] font-manrope text-xl font-bold mb-2">Kunjapuri Temple</h3>
            <p className="text-[#000] font-manrope text-base mb-4 text-justify">
              Kunjapuri Temple offers panoramic views of the Himalayas and is dedicated to Goddess Parvati.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Temples;
