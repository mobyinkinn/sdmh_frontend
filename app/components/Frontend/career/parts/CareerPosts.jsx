import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head3 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";
import CareerCard from "./CareerCard";

const careerData = [
  {
    id: 0,
    position: "Senior Resident - Gynae Oncology",
    seats: "5",
    lastDate: "01/02/2025",
    programmer: "Dr Yogesh Sewada",
    number: "1234567890",
    jd: "We are hereby inviting the application for 1 year IDCCM Course Post MD/DNB in Pulmonary Medicine / Anesthesia / General Medicine in the Department of Critical care medicine.",
    status: true,
  },
  {
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
    id: 2,
    position: "Senior Resident - Gynae Oncology",
    seats: "5",
    lastDate: "01/02/2025",
    programmer: "Dr Yogesh Sewada",
    number: "1234567890",
    jd: "We are hereby inviting the application for 1 year IDCCM Course Post MD/DNB in Pulmonary Medicine / Anesthesia / General Medicine in the Department of Critical care medicine.",
    status: true,
  },
  {
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

export default function CareerPosts() {
  return (
    <ContainerMain alignItems="center">
      <Stack direction={"row"}>
        <Head3 color="black">Career in&nbsp;</Head3>
        <Head3 color="#007946">SDMH</Head3>
      </Stack>
      <ParaNormal width={"60%"} textAlign="center">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </ParaNormal>
      <Stack gap={"20px"}>
        {careerData.map((el, i) => {
          return <CareerCard career={el} />;
        })}
      </Stack>
    </ContainerMain>
  );
}