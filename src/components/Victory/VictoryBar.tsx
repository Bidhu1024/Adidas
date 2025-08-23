import { Box, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const VictoryBar = () => {
  return (
    <Box
      width={"100%"}
      sx={{
        bgcolor: "gray",
        height: "3rem",
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box></Box>
      <Box>
        <Typography>Celebrate India's victory. Wear the Win!</Typography>
      </Box>
      <Box>
        <ArrowRightAltIcon sx={{ fontSize: "2rem" }} />
      </Box>
    </Box>
  );
};

export default VictoryBar;
