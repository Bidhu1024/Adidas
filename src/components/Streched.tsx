import { Box } from "@mui/material";
import React, { type FC } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface Streched {
  handleClick: () => void;
}
const Streched: FC<Streched> = ({ handleClick }) => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
      }}
    >
      <Box sx={{ position: "absolute", top: 10, right: 10 }}>
        <CloseIcon onClick={handleClick} />
      </Box>
    </Box>
  );
};

export default Streched;
