import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState } from "react";
import Streched from "./Streched";

const Topbar = () => {
  const [clicked, setClicked] = useState(false);
  const [index, setIndex] = useState(0);
  const texts = [
    "FREE DELIVERY, RETURN & EXCHANGE",
    "SIGN UP & GET 10% OFF",
    "STUDENTS GET 15% OFF",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const handleClose = () => {
    setClicked(false);
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: clicked ? "20rem" : "4rem",
          p: 2,
          bgcolor: clicked ? "white" : "black",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          transition: "all 0.5s ease-in-out",
          overflow: "hidden",
        }}
      >
        {clicked ? (
          <Streched handleClick={handleClose} />
        ) : (
          <>
            <Typography
              sx={{ color: "white", fontWeight: "600", textAlign: "center" }}
            >
              {texts[index]}
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
