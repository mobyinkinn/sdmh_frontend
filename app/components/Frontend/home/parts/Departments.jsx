"use client";

import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
import { Head1, Head2 } from "@/app/styledComponents/frontend/Headings";
import { Stack, Typography } from "@mui/material";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import img1 from "../assets/departments/ortho.jpg";
import img2 from "../assets/departments/topRight.png";
import img3 from "../assets/departments/center.png";
import img4 from "../assets/departments/bottomLeft.png";
import img5 from "../assets/departments/bottomRight.png";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import image1 from "../assets/departments/1.jpg";
import image2 from "../assets/departments/2.jpg";
import image3 from "../assets/departments/3.jpg";
import image4 from "../assets/departments/4.jpg";
import { useDepartment } from "@/app/components/admin/departments/parts/useDepartment";
import Spinner from "@/app/components/ui/Spinner";

const departments = [
  { id: 0, name: "Heart", data: "Best In California", img: img1 },
  { id: 1, name: "Cancer", data: "Best In California", img: img2 },
  {
    id: 2,
    name: "Pediatrics at Guerin",
    data: "Best In California",
    img: img3,
  },
  { id: 3, name: "Neurology & Neuro", data: "Best In California", img: img4 },
  { id: 4, name: "Orthopaedics", data: "Best In California", img: img5 },
  {
    id: 5,
    name: "Obstetrics & Gynecology",
    data: "Best In California",
    img: img1,
  },
  {
    id: 6,
    name: "Pediatrics at Guerin",
    data: "Best In California",
    img: img2,
  },
  { id: 7, name: "Orthopaedics", data: "Best In California", img: img3 },
  {
    id: 8,
    name: "Obstetrics & Gynecology",
    data: "Best In California",
    img: img4,
  },
];

export default function Departments() {
  const { data: departmentData, isLoading: isLoadingDepartment } =
    useDepartment();
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  if (isLoadingDepartment) return <Spinner />;

  const activeDepartment = departmentData.find((el) => el._id === activeTab);

  return (
    <Stack
      sx={{
        padding: { md: "50px", xs: "10px 0 0 0" },
        backgroundColor: "#FBF6EE",
        gap: { md: "20px", xs: "8px" },
        // display: { md: "flex", xs: "none" },
      }}
    >
      <Head1
        position="center"
        width={{ sm: "100%", md: "777px" }}
        color="black"
      >
        World-class Speciality Care
      </Head1>
      <Head1>At Your Fingertips</Head1>

      <Stack
        width={{ md: "100%", xs: "100vw" }}
        height={"fit-content"}
        direction={{ xs: "column", md: "row" }}
        gap={"30px"}
        justifyContent={"center"}
      >
        <Stack width={{ xs: "100%", md: "40%", lg: "45%" }} gap={"40px"}>
          <Stack
            width={"100%"}
            sx={{ overflowY: "scroll" }}
            height={{ md: "75vh" }}
          >
            {departmentData.map((el, i) => {
              return (
                <Stack
                  width={"100%"}
                  direction={"row"}
                  padding={{ md: "20px 50px", xs: "10px 20px" }}
                  margin={{ md: "0 10px", xs: "0" }}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  key={i}
                  sx={
                    el._id === activeTab
                      ? {
                          color: "white",
                          backgroundColor: "#007946",
                          border: "none",
                          cursor: "pointer",
                        }
                      : {
                          borderBottom: "1px solid black",
                        }
                  }
                  onMouseEnter={() => setActiveTab(el._id)}
                  onClick={() => router.push(`/center-of-excellence/${el._id}`)}
                >
                  <Stack>
                    <Typography fontSize={{ xs: "1rem", md: "1.5rem" }}>
                      {el.name}
                    </Typography>
                    {/* <Typography fontSize={{ xs: "0.9rem", md: "1.2rem" }}>
                      {el.data}
                    </Typography> */}
                  </Stack>
                  <Stack display={{ md: "flex", xs: "none" }}>
                    <FaArrowRight size={30} />
                  </Stack>
                  <Stack
                    display={{ xs: "flex", md: "none" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTab(el.id);
                    }}
                  >
                    {el._id === activeTab ? (
                      <IoIosArrowUp size={20} />
                    ) : (
                      <IoIosArrowDown size={20} />
                    )}
                  </Stack>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
        <Stack
          width={{ xs: "100%", md: "40%", lg: "45%" }}
          height={{ lg: "75vh", sm: "35vh" }}
          position={"relative"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {activeDepartment?.homeImage ? (
            <Image
              src={activeDepartment?.homeImage}
              fill
              objectFit="cover"
              alt={activeDepartment?.name}
            />
          ) : (
            <div>Image not available for {activeDepartment?.name}</div>
          )}
        </Stack>
      </Stack>
      <Stack alignItems={{ xs: "center", md: "start" }}>
        <ButtonMediumOutline
          margin="10px 50px"
          color="#379237"
          hcolor="#005900"
          onClick={() => router.push(`/center-of-excellence`)}
        >
          View All
        </ButtonMediumOutline>
      </Stack>
    </Stack>
  );
}
