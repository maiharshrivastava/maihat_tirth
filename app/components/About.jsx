import React from 'react';
import styles from './global.css';

const About = () => {
  return (
    <div className={`bg-[#ecf0f3] mx-auto p-4 md:p-8 lg:p-12 ${styles.container}`}>
      <div className="text-[#000] font-manrope text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
        About <span className="text-[#E14503]">Rishikesh</span>
      </div>

      <div className={styles.takeJourneyTo} style={{
  fontSize: 'var(--heading-h2-bold-size)',
  fontWeight: 550,
  color: 'black',
  padding: '2rem 0',
  width: '100%',
  textAlign: 'left'
}}>
Rishikesh, located in northern India, is a serene and spiritual town nestled amidst the foothills of the Himalayas. Renowned as the "Yoga Capital of the World," it attracts seekers from around the globe for its ashrams, temples, and practicing yoga on the banks of the holy Ganges. With its breathtaking scenery, peaceful atmosphere, and vibrant cultural heritage, Rishikesh is a beloved destination for those seeking tranquility and spiritual rejuvenation.

Rishikesh, a bustling town in Uttarakhand, India, offers a wealth of seasonal highlights throughout the year. In winter, the cool weather welcomes spiritual seekers for yoga and meditation retreats, while adventurers flock to the Ganga River for thrilling white water rafting. Spring brings vibrant festivities like the International Yoga Festival, drawing enthusiasts from across the globe. Summer offers respite with pleasant temperatures and opportunities for camping, trekking, and exploring the nearby Rajaji National Park. Monsoon transforms Rishikesh into a lush green paradise with rejuvenating Ayurvedic treatments. In autumn, the famous Ganga Aarti, a mesmerizing ritual on the riverbank, captivates visitors. All these seasonal attractions make Rishikesh an unparalleled destination throughout the year.
</div>
<div className="text-[#000] font-manrope text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
       <span className="text-[#E14503]">Climate Overview</span>
      </div>

      <div className="flex justify-between mb-4">
        <div className="border border-[#E14503] p-18 flex-1 rounded-md">
          {/* Content for the first box */}
        </div>
        <div className="border border-[#E14503] p-16 flex-1 ml-4 rounded-md">
          {/* Content for the second box */}
        </div>
      </div>
    </div>
  );
}

export default About;
