import BannerImage from '@/app/styledComponents/frontend/BannerImage'
import React from 'react'
import banner from "./parts/assests/banner.png";
import Navbar from '../navbar/Nav';
import Footer from '../footer/Footer';
import Tabdata from './parts/Tabdata';

const Event = () => {
  return (
    <>
      <Navbar />
      <BannerImage
        color={"#476C9B"}
        descolor={"black"}
        image={banner.src}
        overlayColor="#FFFFFFE5"
        title="Our Hospital Events"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      />
      <Tabdata/>
      <Footer />
    </>
  );
}

export default Event