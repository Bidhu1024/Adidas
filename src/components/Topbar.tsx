import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import Streched from "./Streched";

const Topbar = () => {
  const [clicked, setClicked] = useState(false);
const handleClose = ()=>{
    setClicked(false)
}
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: clicked ? "10rem" : "4rem",
          p: 2,
          bgcolor: clicked ? "red" : "black",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {clicked ? (
          <Streched handleClick = {handleClose}/>
        ) : (
          <>
            <Typography
              sx={{ color: "white", fontWeight: "600", textAlign: "center" }}
            >
              FREE DELIVERY, RETURN & EXCHANGE
            </Typography>
            <Box>
              <KeyboardArrowDownIcon
                onClick={() => setClicked(true)}
                sx={{ color: "white" }}
              />
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default Topbar;
