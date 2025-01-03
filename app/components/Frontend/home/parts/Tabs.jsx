"use client";

import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import img from "../assets/heartInHands.png";
import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const tabs = [
  {
    id: 0,
    name: "Donations",
    data: [
      {
        subId: 0,
        head: "donation3",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 1,
        head: "donation2",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 2,
        head: "donation3",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 3,
        head: "donation4",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
    ],
  },
  {
    id: 1,
    name: "Latest Happenings",
    data: [
      {
        subId: 0,
        head: "latest 1",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 1,
        head: "latest 2",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 2,
        head: "latest 3",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 3,
        head: "latest 4",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
    ],
  },
  {
    id: 2,
    name: "Health Check-up Plans",
    data: [
      {
        subId: 0,
        head: "check 1",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 1,
        head: "check 2",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 2,
        head: "check 3",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 3,
        head: "check 4",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
    ],
  },
  {
    id: 3,
    name: "TPA's",
    data: [
      {
        subId: 0,
        head: "Tpa 1",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 1,
        head: "tpa 2",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 2,
        head: "tpa 3",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 3,
        head: "tpa 4",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
    ],
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <ContainerMain bgColor={"#CEDDCC"}>
      <Stack
        display={{ xs: "none", lg: "flex" }}
        direction={"row"}
        backgroundColor={"white"}
        sx={{
          borderRadius: "200px",
          width: "fit-content",
          margin: "0 auto",
        }}
      >
        {tabs.map((el, i) => {
          return (
            <Typography
              padding={"20px 45px"}
              fontSize={"1.3rem"}
              color={el.id === activeTab && "#54B435"}
              // fontWeight={el.id === activeTab && "bold"}
              sx={{
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  color: "#54B435",
                },
              }}
              onClick={() => setActiveTab(el.id)}
            >
              {el.name}
            </Typography>
          );
        })}
      </Stack>
      <Stack
        alignItems="center"
        spacing={2}
        display={{ xs: "flex", lg: "none" }}
      >
        <Stack direction="row" flexWrap="wrap" justifyContent="center">
          {tabs.map((el, i) => (
            <Stack key={el.id} width="50%" spacing={2}>
              <ButtonMediumOutline
                backgroundColor="#000000"
                // color="#FFFFFF"
                color={el.id === activeTab ? "#FFFFFF" : "#FFFFFF"}
                sx={{
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#005900",
                    color: "#54B435",
                  },

                  width: "100%",
                }}
                onClick={() => setActiveTab(el.id)}
              >
                {el.name}
              </ButtonMediumOutline>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Stack
        direction={"row"}
        justifyContent={"center"}
        marginTop={"30px"}
        width="100%"
        display={{ xs: "flex", lg: "none" }}
      >
        <Slider
          {...settings}
          style={{
            width: "100%",
            overflow: "hidden",
          }}
        >
          {tabs[activeTab].data.map((el, i) => (
            <Stack
              key={i}
              width={"calc(50% - 20px)"}
              margin={"10px"}
              backgroundColor={"#FBF6EE"}
              sx={{
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Box
                width={"100%"}
                height={"200px"}
                sx={{
                  backgroundImage: `url(${el.image.src})`,
                  backgroundSize: "cover",
                  borderRadius: "10px 10px 0 0",
                  backgroundPosition: "center center",
                }}
              ></Box>
              <Stack padding={"20px"} gap={"10px"} alignItems={"center"}>
                <Typography
                  fontSize={"1.2rem"}
                  textAlign={"center"}
                  color={"#379237"}
                  fontWeight={"bold"}
                >
                  {el.head}
                </Typography>
                <Typography textAlign={"center"}>{el.body}</Typography>
                <Typography
                  sx={{
                    border: "1px solid black",
                    padding: "10px 40px",
                    borderRadius: "200px",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  Know More
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Slider>
      </Stack>

      <Stack
        direction={"row"}
        gap={"20px"}
        justifyContent={"center"}
        marginTop={"30px"}
        display={{ xs: "none", lg: "flex" }}
      >
        {tabs[activeTab].data.map((el, i) => {
          return (
            <Stack
              width={"20%"}
              backgroundColor={"#FBF6EE"}
              sx={{
                borderRadius: "10px",
              }}
            >
              <Box
                width={"100%"}
                height={"200px"}
                sx={{
                  backgroundImage: `url(${el.image.src})`,
                  backgroundSize: "cover",
                  borderRadius: "10px 10px 0 0",
                  backgroundPosition: "center center",
                }}
              ></Box>
              <Stack padding={"20px"} gap={"10px"} alignItems={"center"}>
                <Typography
                  fontSize={"1.2rem"}
                  textAlign={"center"}
                  color={"#379237"}
                  fontWeight={"bold"}
                >
                  {el.head}
                </Typography>
                <Typography textAlign={"center"}>{el.body}</Typography>
                <Typography
                  sx={{
                    border: "1px solid black",
                    padding: "10px 40px",
                    borderRadius: "200px",
                    cursor: "pointer",
                  }}
                >
                  Know More
                </Typography>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
      <Stack alignItems="center">
        <ButtonMediumOutline margin="0 50px" color="#379237">
          View All
        </ButtonMediumOutline>
      </Stack>
    </ContainerMain>
  );
}
