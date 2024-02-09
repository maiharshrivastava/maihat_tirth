import React from 'react';
import styles from '../../app/components/Hero.css';
import './global.css';

const Hero = () => {
  const textStyle = {
    fontFamily: 'var(--subheading-semi-bold)',
    fontSize: 'var(--display-01-bold-size)',
    letterSpacing: '-0.02em',
    display: 'inline-block',
    textAlign: 'center',
  };

  return (
    <div className="h-screen w-full bg-[#ecf0f3] relative">
  <div className="flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center pt-48">
    <b className={styles.whereSpiritualityMeetsContainer}>
      <div className={styles.spritTitle}>
        <span style={{ fontSize: '3rem' }}>Where</span>
        <span className={styles.spirituality} style={{ color: '#E14503', fontSize: '3rem' }}>{` Spirituality `}</span>
      </div>
      <div className={styles.spritTitle}>
        <span style={{ fontSize: '3rem' }}>Meets</span>
        <span className={styles.spirituality} style={{ color: '#E14503', fontSize: '3rem' }}> Serenity</span>
      </div>
    </b>
   
  
        
    <div className={styles.takeJourneyTo} style={{
  fontSize: 'var(--heading-h2-bold-size)',
  fontWeight: 550,
  color: 'black',
  padding: '2rem 0',
  width: '100%',
  textAlign: 'center'
}}>
  Journey to the soul-stirring landscapes of India's divine pilgrimage destinations. Discover the sacred path that leads to profound spirituality and serenity. Welcome to Tirth, your guiding light on an awe-inspiring Tirth yatra.
</div>

      </div>
    </div>
  );
}

export default Hero;
