import React from 'react';

const Emergency = () => {
  return (
    <div className="bg-[#ecf0f3] mx-auto p-4 md:p-8 lg:p-12">
      <div className="text-[#E14503] font-manrope text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
        Emergency Contacts
      </div>

      <div className="flex flex-col md:flex-row justify-between space-y-12 md:space-y-0 md:space-x-8">
        {/* Add your emergency contact information here */}
        <div className="flex-1">
          <div className="border border-[#E14503] p-6 md:p-18 rounded-md">
            <h3 className="text-[#000] font-manrope text-xl font-bold mb-2">Police</h3>
            <p className="text-[#000] font-manrope text-base mb-4 text-justify">
             AIIMS, Rishikesh
             : Virbhadra Road, Rishikesh, Uttarakhand
            </p>
          </div>

          <div className="border border-[#E14503] p-6 md:p-18 rounded-md">
            <h3 className="text-[#000] font-manrope text-xl font-bold mb-2">Fire</h3>
            <p className="text-[#000] font-manrope text-base mb-4 text-justify">
              Dial 101
            </p>
          </div>
        </div>

        <div className="flex-1">
          <div className="border border-[#E14503] p-6 md:p-18 rounded-md">
            <h3 className="text-[#000] font-manrope text-xl font-bold mb-2">Medical</h3>
            <p className="text-[#000] font-manrope text-base mb-4 text-justify">
              Dial 102
            </p>
          </div>

          <div className="border border-[#E14503] p-6 md:p-18 rounded-md">
            <h3 className="text-[#000] font-manrope text-xl font-bold mb-2">Emergency Services</h3>
            <p className="text-[#000] font-manrope text-base mb-4 text-justify">
              Dial 108
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emergency;
