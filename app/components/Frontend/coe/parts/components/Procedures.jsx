import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Box, Stack } from "@mui/material";

const prodedureData = [
  { id: 0, name: "Cardiologist" },
  { id: 1, name: "Neurology" },
  { id: 2, name: "Gastroenterology (Endoscopy Procedures)" },
  { id: 3, name: "GI Surgeries" },
  { id: 4, name: "Pediatrics" },
  { id: 5, name: "Orthopaedics" },
  { id: 6, name: "General Surgeries" },
  { id: 7, name: "Radiology (CT, MRI)-on Call" },
  {
    id: 8,
    name: "Equipped with Modern Anaesthesia Work Stations & Monitors, Fibro Optic Bronchoscope, Sonosite for R.A. Block",
  },
  { id: 9, name: "Painless Deliveries" },
  { id: 10, name: "CPR (Cardiac Pulmonary Resusciatation)" },
  { id: 11, name: "TEE (Trans Esophageal Echo Cardiolography)" },
];

export default function Procedure() {
  return (
    <Stack marginTop={{lg:"30px",md:"25px", sm:"20px"}}>
      <Head1 color="black" textAlign="left">
        Round the clock Anesthesiologist
      </Head1>
      <Head1 color="black" textAlign="left">
        available for procedures in
      </Head1>
      <Stack
        marginTop={"20px"}
        direction={{lg:"row", sm:"column"}}
        flexWrap={{lg:"wrap", sm:"nowrap"}}
        gap={{lg:"20px", md:"15px",sm:"10px"}}
        justifyContent={"space-between"}
      >
        {prodedureData.map((el, i) => {
          return (
            <Stack direction={"row"} gap={{lg:"40px",md:"30px", sm:"20px"}} width={{lg:"47%",sm:"100%"}}  key={i}>
              <Stack
                border={"2px solid #54B435"}
                p={{lg:0,sm:1.5}}
                sx={{
                  width: {lg:"40px", md:"30px", sm:"20px"},
                  height: {lg:"40px", md:"30px", sm:"20px"},
                  justifyContent: "center",
                  borderRadius: "200px",
                  alignItems: "center",
                  
                }}
              >
                <ParaNormal color={"#54B435"}>{el.id + 1}</ParaNormal>
              </Stack>
              <ParaNormal width={"80%"}>{el.name}</ParaNormal>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}
