import { Box, Typography } from "@mui/material";
import { overflowDatas } from "./data";

const Overflow = () => {
  return (
    <Box
      width="100%"
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap="1rem"
    >
      {overflowDatas?.map((data) => (
        <Box
          key={data.id}
          sx={{
            height: "auto",
            minWidth: "14rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            p: 0.4,
            ":hover": {
              border: "1px solid black",
            },
          }}
        >
          <img src={data.image} alt="iamge" height={"100%"} />
          <Typography fontSize={"1rem"} fontWeight={"600"}>
            {data?.name}
          </Typography>
          <Typography fontSize={"0.8rem"} fontWeight={"400"}>
            {data?.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Overflow;
