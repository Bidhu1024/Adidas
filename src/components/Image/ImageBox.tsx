import { Box, Link, Typography } from "@mui/material";
import image1 from "../../assets/image1.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const ImageBox = () => {
  return (
    <Box height={"40rem"} width="100%" position={"relative"}>
      <img src={image1} alt="image" height={"100%"} width={"100%"} />
      <Box position={"absolute"} sx={{ bottom: 50, left: 100 }}>
        <Box
          sx={{
            height: "2.6rem",
            bgcolor: "black",
            p: 2,
            display: "flex",
            alignItems: "center",
            width: "11rem",
          }}
        >
          <Typography color="white" fontWeight={"700"} fontSize={"1.5rem"}>
            SUPERSTAR
          </Typography>
        </Box>
        <Box
          sx={{
            height: "2.6rem",
            bgcolor: "black",
            p: 1,
            display: "flex",
            alignItems: "center",
            width: "16.2rem",
            mt: 1,
          }}
        >
          <Typography color="white" fontWeight={"400"} fontSize={".9rem"}>
            Because icons wear the original icon.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1, gap: "1rem" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "black",
              p: 1,
              border: "1px solid white",
            }}
          >
            <Link sx={{ color: "white", cursor: "pointer", fontWeight: "600" }}>
              Shop Women
            </Link>
            <ArrowRightAltIcon sx={{ color: "white", width: "2rem" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "black",
              p: 1,
              border: "1px solid white",
            }}
          >
            <Link sx={{ color: "white", cursor: "pointer", fontWeight: "600" }}>
              Shop Men
            </Link>
            <ArrowRightAltIcon sx={{ color: "white", width: "2rem" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "black",
              p: 1,
              border: "1px solid white",
            }}
          >
            <Link sx={{ color: "white", cursor: "pointer", fontWeight: "600" }}>
              Explore Superstar
            </Link>
            <ArrowRightAltIcon sx={{ color: "white", width: "2rem" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ImageBox;
