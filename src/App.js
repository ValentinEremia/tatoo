import React from "react";

// import components
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import GallerySection from "./components/GallerySection";
import Skills from "./components/Skills";
import Interview from "./components/Interview";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

const App = () => {
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <Header />
      <div
         id='top'
        className=" h-[122px] lg:h-[150px] "
      ></div>
      
      <Hero />
      <div
        id="about"
        className=" h-[70px] lg:h-[0px] "
      ></div>
      <About />
      <div
        id="gallery"
        className=" h-[50px] lg:h-[0px] "
      ></div>
      <GallerySection />
      <Skills />
      <div
        id="testimonials"
        className=" h-[100px] lg:h-[135px]"
      ></div>
      <Testimonial />
      <div
        id="interview"
        className=" h-[100px] lg:h-[110px]"
      ></div>
      <Interview />
      <div
        id="contact"
        className=" h-[100px] lg:h-[110px] "
      ></div>
      <Contact />
      <Footer />
      <Copyright />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
