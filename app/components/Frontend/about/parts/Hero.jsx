"use client";

import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import banner from "./assets/bannerImage.png";
import { Stack, Typography } from "@mui/material";
import { Head1, Head2, Head3 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";

const sideNavData = [
  { id: 0, name: "About", idName: "about" },
  { id: 1, name: "Overview", idName: "overview" },
  { id: 2, name: "Inspiration", idName: "inspiration" },
  { id: 3, name: "Founder", idName: "founder" },
  { id: 4, name: "Vision And Mission", idName: "vision" },
  { id: 5, name: "Our Mission", idName: "mission" },
  { id: 6, name: "Secretery's Message", idName: "message" },
  { id: 7, name: "Awards", idName: "awards" },
];

export default function Hero() {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth", // Smooth scrolling
      block: "start", // Aligns to the top of the section
    });
  };

  return (
    <ContainerMain gap="0" dir="row" padding="0" id="about">
      <Stack
        width={"85%"}
        height={"90vh"}
        sx={{
          backgroundImage: `url(${banner.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        justifyContent={"center"}
        gap={"10px"}
        paddingLeft={"100px"}
      >
        <Stack direction={"row"}>
          <Head1 color="black">About&nbsp;</Head1>
          <Head1 color="#476C9B">SDMH</Head1>
        </Stack>
        <ParaNormal width="60%">
          It Is a Long Established Fact That a Reader Will Be Distracted By The
          Readable Content of a Page When Looking At Its Layout. The Point of
          Using Lorem Ipsum Is That It Has a More-or-less Normal Distribution of
          Letters, As Opposed To Using 'content Here, Content Here', Making It
          Look Like Readable English.
        </ParaNormal>
      </Stack>
      <Stack>
        {sideNavData.map((el, i) => {
          return (
            <Typography
              key={i}
              fontSize={"1.2rem"}
              sx={{
                padding: "10px 15px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": { backgroundColor: "#007946", color: "white" },
              }}
              onClick={() => handleScroll(el.idName)}
            >
              {el.name}
            </Typography>
          );
        })}
      </Stack>
    </ContainerMain>
  );
}
