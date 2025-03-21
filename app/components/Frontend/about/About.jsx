"use client";
import { Stack } from "@mui/material";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import Hero from "./parts/Hero";
import Overview from "./parts/Overview";
import Inspiration from "./parts/Inspiration";
import Founder from "./parts/Founder";
import Vision from "./parts/Vision";
import Values from "./parts/Values";
import Message from "./parts/Message";
import Awards from "./parts/Awards";
import MobileFooter from "../footer/MobileFooter";
import { useNavbar } from "../../admin/navbar/useNavbar";
import Spinner from "../../ui/Spinner";

export default function About() {
  const { isLoading } = useNavbar();
  if (isLoading) return <Spinner />;
  return (
    <Stack>
      <Navbar />
      <Hero />
      <Overview />
      <Inspiration />
      <Founder />
      <Vision />
      <Values />
      <Message />
      <Awards />
      <Footer />
      <MobileFooter />
    </Stack>
  );
}
