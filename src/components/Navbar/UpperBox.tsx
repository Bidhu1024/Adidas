import { Box, Typography } from "@mui/material";

const UpperBox = () => {
  const list = ["help", "orders and returns", "sign up", "log in"];
  return (
    <Box
      position={"absolute"}
      sx={{
        top: 5,
        right: 30,
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      {list.map((lists) => {
        return (
          <Typography
            fontSize={"12px"}
            fontWeight={400}
            fontFamily={"Helvetica, Arial, Helvetica, sans-serif"}
            sx={{
              ":hover": {
                textDecoration: "underline",
                cursor: "pointer",
              },
            }}
          >
            {lists}
          </Typography>
        );
      })}
    </Box>
  );
};

export default UpperBox;
