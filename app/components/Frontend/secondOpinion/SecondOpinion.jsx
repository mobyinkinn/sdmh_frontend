import { Stack } from "@mui/material";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import BannerImage from "../patientTestimonial/parts/BannerImage";
import banner from "./parts/assets/bannerImage.png";
import Hero from "./parts/Hero";
import Enquire_Now from "./parts/Enquire_Now";
import Reach from "./parts/Reach";

export default function SecondOpinion() {
  return (
    <Stack>
      <Navbar />
      <Hero />
      <Enquire_Now />
      <Reach />
      <Stack height={"90vh"} width="100%">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.290646873121!2d75.81001647504931!3d26.894269476658202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db69ecfd32ee7%3A0x3423f6c55d37fd06!2sSantokba%20Durlabhji%20Memorial%20Hospital%20(SDMH)!5e0!3m2!1sen!2sin!4v1738411881993!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{
            border: 0,
          }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Stack>
      <Footer />
    </Stack>
  );
}
