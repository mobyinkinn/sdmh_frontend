import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Stack, Typography } from "@mui/material";
import durlabhji from "../assets/dulabhji.png";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";

export default function About() {
  return (
    <ContainerMain
      dir="row"
      bgColor={"#FBF4E9"}
      padding={"50px 50px 0 50px"}
      justifyContent={"center"}
      gap="80px"
    >
      <Stack
        width={"30%"}
        height={"70vh"}
        sx={{
          backgroundImage: `url(${durlabhji.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      ></Stack>
      <Stack width={"60%"} gap={"20px"}>
        <Stack direction={"row"}>
          <Head1 color="black">About &nbsp;</Head1>
          <Head1>Head</Head1>
        </Stack>
        <Typography fontSize={"1.2rem"}>
          The Santokba Durlabhji Trust was founded in 1958 with a vision to
          provide quality care to the common man – without favour or
          discrimination. The Santokba Durlabhji Memorial Hospital was
          established in 1971. Inaugurated by the then Prime Minister, Smt.
          Indira Gandhi, the hospital was dedicated to the Armed Forces as the
          nation was then in the throes of a war with Pakistan.
        </Typography>
        <Typography fontSize={"1.2rem"}>
          Since then, S.D.M.H. has continued to provide affordable health care
          through the several philanthropic initiatives it has undertaken e.g.
          The Avedna Ashram, the Rehabilitation and Limb Fitting Centre,
        </Typography>
        <ButtonMediumOutline color="#379237">View All</ButtonMediumOutline>
      </Stack>
    </ContainerMain>
  );
}