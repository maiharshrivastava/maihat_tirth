import React from "react";
import "./Slider.css"; // Import the CSS file
import Image from "next/image";

export default function Slider() {
  return (
    <div className="shadow-md mx-auto my-20 overflow-hidden relative w-960">
      <div className="carousel-wrapper">
        <div className="animate-scroll">
          <div className="slide-container">
            <a href="#slide1" className="slide">
              <Image src="/img01.png" alt="Slide 1" width={200} height={200} />
            </a>
            <a href="#slide1" className="slide">
              <Image src="/img01.png" alt="Slide 1" width={200} height={200} />
            </a>
            <a href="#slide1" className="slide">
              <Image src="/img01.png" alt="Slide 1" width={200} height={200} />
            </a>
            <a href="#slide1" className="slide">
              <Image src="/img01.png" alt="Slide 1" width={200} height={200} />
            </a>
            <a href="#slide1" className="slide">
              <Image src="/img01.png" alt="Slide 1" width={200} height={200} />
            </a>
            <a href="#slide1" className="slide">
              <Image src="/img01.png" alt="Slide 1" width={200} height={200} />
            </a>
            <a href="#slide1" className="slide">
              <Image src="/img01.png" alt="Slide 1" width={200} height={200} />
            </a>
            <a href="#slide1" className="slide">
              <Image src="/img01.png" alt="Slide 1" width={200} height={200} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
