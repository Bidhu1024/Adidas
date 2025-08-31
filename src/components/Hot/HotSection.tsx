import { Box, Link, Typography } from "@mui/material";
import image1 from "../../assets/hot1.avif";
import image2 from "../../assets/hot2.avif";

const HotSection = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h3" fontWeight={"700"}>
          WHAT'S HOT?
        </Typography>
      </Box>
      <Box display={"flex"} width={"100%"} sx={{ p: 1 }} gap="1rem">
        <Box
          width={"50%"}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            ":hover": {
              border: "1px solid black",
            },
          }}
        >
          <img src={image1} alt="image1" width={"100%"} />
          <Typography
            textTransform={"capitalize"}
            fontSize={"1.2rem"}
            fontWeight={"600"}
          >
            Graphic tees for for a creative life.
          </Typography>
          <Typography fontSize={"1rem"} fontWeight={"400"}>
            Graffiti-inspired apparel for your street-style moments.
          </Typography>
          <Link
            sx={{
              textDecoration: "underline",
              color: "black",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Shop Now
          </Link>
        </Box>
        <Box
          width={"50%"}
           sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            ":hover": {
              border: "1px solid black",
            },
          }}
        >
          <img src={image2} alt="image2" width={"100%"} />
          <Typography
            textTransform={"capitalize"}
            fontSize={"1.2rem"}
            fontWeight={"600"}
          >
            Graphic tees for for a creative life.
          </Typography>
          <Typography fontSize={"1rem"} fontWeight={"400"}>
            Graffiti-inspired apparel for your street-style moments.
          </Typography>
          <Link
            sx={{
              textDecoration: "underline",
              color: "black",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Shop Now
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HotSection;
