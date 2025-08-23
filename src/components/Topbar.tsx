import { Box, Typography } from "@mui/material";
import  KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const Topbar = () => {
    const [clicked,setClicked] = useState(false)
  return (
    <Box
      sx={{
        width: "100%",
        height: "4rem",
        p: 2,
        bgcolor: "black",
        cursor: "pointer",
      }}
    >
      <Typography
        sx={{ color: "white", fontWeight: "600", textAlign: "center" }}
      >
        FREE DELIVERY, RETURN & EXCHANGE
      </Typography>
<Box>
 <KeyboardArrowUpIcon onClick={()=>setClicked(false)}/>  <KeyboardArrowDownIcon onClick={()=>setClicked(true)}/>
</Box>
    </Box>
  );
};

export default Topbar;
