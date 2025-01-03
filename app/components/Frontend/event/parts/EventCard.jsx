"use client";

import { Head4 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal, ParaNormalSmall } from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";
import img from "./assests/doc.png";
import hoverImg from "./assests/docHover.png";
import {
  ButtonMediumOutline,
  ButtonSmallOutline,
} from "@/app/styledComponents/frontend/Buttons";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function EventCard({ career }) {
  console.log("career", career);
  const [hovered, setHovered] = useState(false);
  const router = useRouter();
  return (
    <Stack
      direction={"row"}
      gap={"30px"}
      alignItems={"center"}
      width={"80vw"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        color: "black",
        padding: "30px 30px",
        borderRadius: "5px",
        cursor: "pointer",
        "&:hover": {
          color: "white",
          backgroundColor: "#476C9B",
        },
      }}
    >
      <Stack
        width={"30%"}
        height={"25vh"}
        sx={{
          backgroundImage: `url(${hovered ? hoverImg.src : img.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          "& :hover": {
            backgroundImage: `url(${hoverImg.src})`,
          },
        }}
      ></Stack>
      <Stack gap={1}>
        <ParaNormal>{career.category}</ParaNormal>
        <Head4 textAlign="left" color="inherit">
          {career.position}
        </Head4>
        <ParaNormalSmall color="inherit">{career.jd}</ParaNormalSmall>
        <Stack direction={"row"} gap={3}>
          <ButtonSmallOutline
            color={hovered ? "white" : "#476C9B"}
            hoverColor="#476C9B"
          >
            {career.lastDate}
          </ButtonSmallOutline>
          <ButtonSmallOutline
            onClick={() => router.push(`/event/${career.id}`)}
            color={hovered ? "white" : "#476C9B"}
            hoverColor="#476C9B"
          >
            View Event details
          </ButtonSmallOutline>
        </Stack>
      </Stack>
    </Stack>
  );
}
