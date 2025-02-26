import { Stack } from "@mui/material";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import Hero from "./parts/components/Hero";
// import Grid from "./parts/components/Grid";
import MobileFooter from "../footer/MobileFooter";
import FindDoctor from "../home/parts/FindDoctor";
import BookAppointment from "./parts/components/Book_Appointment";
import Video_Walkthrough from "./parts/components/Video_Walkthrough";
import Video_Consultation from "./parts/components/Video_Consultation";

export default function Coe() {
  return (
    <Stack>
      <Navbar />
      <Hero />
      <BookAppointment />
      <Video_Walkthrough />
      <Video_Consultation />
      <FindDoctor />
      <Footer />
      <MobileFooter />
    </Stack>
  );
}
