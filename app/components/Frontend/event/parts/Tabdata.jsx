"use client";

import { Button, Stack } from "@mui/material";
import React, { useState } from "react";
import EventCard from "./EventCard";

const Tabdata = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const eventData = [
    {
      id: 0,
      position: "Senior Resident - Gynae Oncology",
      seats: "5",
      lastDate: "01/02/2025",
      programmer: "Dr Yogesh Sewada",
      number: "1234567890",
      jd: "We are hereby inviting the application for 1 year IDCCM Course Post MD/DNB in Pulmonary Medicine / Anesthesia / General Medicine in the Department of Critical care medicine.",
      status: true,
      category: "Upcoming",
    },
    {
      category: "Academics",
      id: 1,
      position: "Senior Resident - Gynae Oncology",
      seats: "5",
      lastDate: "01/02/2025",
      programmer: "Dr Yogesh Sewada",
      number: "1234567890",
      jd: "We are hereby inviting the application for 1 year IDCCM Course Post MD/DNB in Pulmonary Medicine / Anesthesia / General Medicine in the Department of Critical care medicine.",
      status: true,
    },
    {
      category: "Public Awareness",
      id: 2,
      position: "Public Awareness",
      seats: "5",
      lastDate: "01/02/2025",
      programmer: "Dr Yogesh Sewada",
      number: "1234567890",
      jd: "We are hereby inviting the application for 1 year IDCCM Course Post MD/DNB in Pulmonary Medicine / Anesthesia / General Medicine in the Department of Critical care medicine.",
      status: true,
    },
    {
      category: "Recent",
      id: 3,
      position: "Senior Resident - Gynae Oncology",
      seats: "5",
      lastDate: "01/02/2025",
      programmer: "Dr Yogesh Sewada",
      number: "1234567890",
      jd: "We are hereby inviting the application for 1 year IDCCM Course Post MD/DNB in Pulmonary Medicine / Anesthesia / General Medicine in the Department of Critical care medicine.",
      status: true,
    },
    {
      category: "Upcoming",
      id: 4,
      position: "Senior Resident - Gynae Oncology",
      seats: "5",
      lastDate: "01/02/2025",
      programmer: "Dr Yogesh Sewada",
      number: "1234567890",
      jd: "We are hereby inviting the application for 1 year IDCCM Course Post MD/DNB in Pulmonary Medicine / Anesthesia / General Medicine in the Department of Critical care medicine.",
      status: true,
    },
  ];
   const categories = [
     "All",
     ...new Set(eventData.map((event) => event.category)),
   ];

   // Filter event data based on the selected category
   const filteredData =
     selectedCategory === "All"
       ? eventData
       : eventData.filter((event) => event.category === selectedCategory);

  return (
    <>
      {/* Tabs Section */}
      <Stack
        direction="row"
        gap={2}
        padding={5}
        justifyContent="center"
        bgcolor={"#476C9B"}
      >
        {categories.map((category) => (
          <Button
        
            key={category}
            variant={selectedCategory === category ? "contained" : "outlined"}
            color="primary"
            onClick={() => setSelectedCategory(category)}
            sx={{
                padding:"5px 30px",
              backgroundColor:
                selectedCategory === category ? "white" : "transparent",
              color: selectedCategory === category ? "#476C9B" : "white",
              border: "1px solid white",
              borderRadius: "30px",
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor:
                  selectedCategory === category ? "white" : "#5A7EB6",
                color: selectedCategory === category ? "#476C9B" : "white",
              },
            }}
          >
            {category}
          </Button>
        ))}
      </Stack>

      {/* Render Filtered Event Cards */}
      <Stack alignItems="center" pt={2}>
        {filteredData.map((el, i) => (
          <EventCard key={el.id} career={el} />
        ))}
      </Stack>
    </>
  );
};

export default Tabdata;
