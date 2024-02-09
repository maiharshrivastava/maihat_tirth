import Features from "./components/Features";
import Hero from "./components/Hero";
import About from "./components/About";
import Reach from "./components/Reach";
import Emergency from "./components/Emergency";
import Rishikesh from "./components/Rishikesh";
import Accomodation from "./components/Accomodation";
import Bhojanalays from "./components/Bhojanalays";
import Parikarma from "./components/Parikarma";
import Puja from "./components/Puja";
import Sthal from "./components/Sthal";
import Events from "./components/Events";
import History from "./components/History"; // Added import for History
import Footer from "./components/Footer";
import Slider from "./components/Slider";


export default function Home() {
  return (
    <section>
      <Hero />
      <Features />
      <About />
      <Reach />
      <Emergency />
      <Rishikesh /> 
      <Accomodation />
      <Bhojanalays />
      <Parikarma /> 
      <Puja />
      <Sthal/>
      <Events />
      
      <History /> 
      <Slider/>
      <Footer />{/* Added History component */}

    </section>
  );
}
