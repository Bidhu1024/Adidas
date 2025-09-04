import { Box, Link, Typography } from "@mui/material";
import { overflowDatas } from "./data";

const Overflow = () => {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      gap="1rem"
      sx={{ mt: 4 }}
    >
      {overflowDatas?.map((data) => (
        <Box
          key={data.id}
          sx={{
            height: "30rem",
            minWidth: "14rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "1rem",
            p: 0.4,
            ":hover": {
              border: "1px solid black",
              cursor:"pointer"
            },
          }}
        >
          <Box sx={{ flex: 1, overflow: "hidden" }}>
            <img
              src={data.image}
              alt="image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box>
            <Typography fontSize="1rem" fontWeight="600">
              {data.name.length > 20
                ? data.name.slice(0, 22) + "..."
                : data?.name}
            </Typography>
            <Typography fontSize="0.8rem" fontWeight="400">
              {data?.description}
            </Typography>
            <Link sx={{ color: "black",mt:4 }}>Shop Now</Link>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Overflow;
