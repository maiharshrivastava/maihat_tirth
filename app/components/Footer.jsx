import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#ecf0f3] p-8 text-center">
      <div className="flex flex-wrap justify-center">
        <div className="w-1/4 p-4">
          <div className="text-[#000] font-manrope text-xl mb-4">Get to Know Us</div>
          {/* Add links for Get to Know Us section */}
        </div>
        <div className="w-1/4 p-4">
          <div className="text-[#000] font-manrope text-xl mb-4">Connect with Us</div>
          {/* Add links for Connect with Us section */}
        </div>
        <div className="w-1/4 p-4">
          <div className="text-[#000] font-manrope text-xl mb-4">Make Money with Us</div>
          {/* Add links for Make Money with Us section */}
        </div>
        <div className="w-1/4 p-4">
          <div className="text-[#000] font-manrope text-xl mb-4">Let Us Help You</div>
          {/* Add links for Let Us Help You section */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
