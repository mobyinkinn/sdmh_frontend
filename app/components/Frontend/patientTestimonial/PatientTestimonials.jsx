import React from 'react'
import Navbar from '../navbar/Nav'
import Footer from '../footer/Footer'
import banner from "./parts/assets/BannerRight.png";
import BannerImage from './parts/BannerImage';
import Testimonialslider from './parts/Testimonialslider';
import PatientStories from './parts/PatientStories';

const PatientTestimonials = () => {
  return (
    <>
      <Navbar />
      <BannerImage
        title="Patient Says"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        color={"#476C9B"}
        descolor={"black"}
        overlayColor={"#FFFFFB"}
        image={banner}
        textcenter={"left"}
      />
      <Testimonialslider/>
      <PatientStories/>
      <Footer />
    </>
  );
}

export default PatientTestimonials