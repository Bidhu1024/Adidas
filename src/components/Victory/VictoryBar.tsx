import { Box, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const VictoryBar = () => {
  return (
    <Box
      width={"100%"}
      sx={{
        bgcolor: "#d3d3d3",
        height: "3rem",
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box></Box>
      <Box>
        <Typography fontWeight={'400'} fontSize={".9rem"}>Celebrate India's victory. Wear the Win!</Typography>
      </Box>
      <Box>
        <ArrowRightAltIcon sx={{ fontSize: "2rem",cursor:"pointer" }} />
      </Box>
    </Box>
  );
};

export default VictoryBar;
