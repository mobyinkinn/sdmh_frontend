import React from 'react'
import Navbar from '../navbar/Nav'
import Footer from '../footer/Footer'
import BannerImage from '@/app/styledComponents/frontend/BannerImage'
import banner from "./parts/assets/bannerImage.png";
import SdmhLibrary from './parts/SdmhLibrary';
import KohaSection from './parts/KohaSection';
import ServiceProvide from './parts/ServiceProvide';
import CategoriesMember from './parts/CategoriesMember';

const AcademicsLibrary = () => {
  return (
    <>
      <Navbar />
      <BannerImage
        image={banner.src}
        overlayColor="#476C9BE5"
        title="Academic Library"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      />
      <SdmhLibrary/>
      <KohaSection/>
      <ServiceProvide/>
      <CategoriesMember/>
      <Footer />
    </>
  );
}

export default AcademicsLibrary