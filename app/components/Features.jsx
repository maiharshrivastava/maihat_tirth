import React from 'react';
import Image from 'next/image';
import styles from '../../app/components/Features.css';


const Features = () => {
  return (
    <div className="w-full bg-[#ecf0f3] py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-8 max-w-2xl sm:mt-10 lg:mt-12 lg:max-w-none">
          <div className="flex gap-4">
            <div className="flex gap-4">
              <div className="flex flex-col">
                <button
                  className="border border-[#ecf0f3] outline-[#E14503] bg-transparent p-2 rounded-md text-[#E14503] font-semibold text-sm"
                >
                  Rishikesh
                </button>
              </div>
              <div className="flex flex-col">
                <button
                  className="border border-#767371 bg-transparent p-2 rounded-md text-[#767371] font-semibold text-sm"
                >
                  Rishikesh
                </button>
              </div>
              <div className="flex flex-col">
                <button
                  className="border border-#767371 bg-transparent p-2 rounded-md text-[#767371] font-semibold text-sm"
                >
                  Rishikesh
                </button>
              </div>
              <div className="flex flex-col">
                <button
                  className="border border-#767371 bg-transparent p-2 rounded-md text-[#767371] font-semibold text-sm"
                >
                  Rishikesh
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight z-15 times-new-roman">
                <span className="text-[#E14503] font-roboto">
                  Rishikesh
                </span>
              </h1>
                    
    <div className={styles.takeJourneyTo} style={{
  fontSize: 'var(--heading-h2-bold-size)',
  fontWeight: 550,
  color: 'black',
  padding: '2rem 0',
  width: '100%',
  textAlign: ''
}}>
 Rishikesh holds immense spiritual
significance<br /> as an abode of saints
and sages, known as the<br /> "Yoga
Capital of the World."It is blessed
by the<br /> holy Ganges,offering a
serene and sacred <br />environment
for meditation, self-reflection,
<br />and spiritual awakening.
</div>
              <div className="flex flex-col mt-4 lg:mt-0">
  <button
    className="border border-[#ecf0f3] bg-[#E14503] p-1 rounded-md text-white text-xs font-semibold"
    style={{ width: '222.568px', height: '61.173px' }}
  >
    Explore
  </button>
</div>

            </div>
            <div className="flex-1 hidden lg:block">
              <Image 
                src="/Container.png"
                alt="Container Image"
                width={334.684}
                height={362.906}
                style={{ flexShrink: 0, marginRight: '1px', maxWidth: '100%', height: 'auto' }} 
              />
            </div>
            <div>
              <Image 
                src="/Container01.jpg"
                alt="Container Image 01"
                width={172.511}
                height={171.898}
                style={{ flexShrink: 0, marginLeft: '1px', maxWidth: '100%', height: 'auto' }}
              />
              <Image 
                src="/Container04.jpg"
                alt="Container Image 03"
                width={172.511}
                height={171.898}
                style={{ flexShrink: 0, marginLeft: '1px', maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div>
              <Image 
                src="/Container03.jpg"
                alt="Container Image 01"
                width={172.511}
                height={171.898}
                style={{ flexShrink: 0, marginLeft: '1px', maxWidth: '100%', height: 'auto' }}
              />
              <Image 
                src="/Container04.jpg"
                alt="Container Image 03"
                width={172.511}
                height={171.898}
                style={{ flexShrink: 0, marginLeft: '1px', maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
