import { Box, Typography } from "@mui/material";

const MenuList = () => {
  const lists = [
    {
      id: 1,
      name: "SHOES",
      path: "/shoes",
    },
    {
      id: 2,
      name: "Men",
      path: "/men",
    },
    {
      id: 3,
      name: "women",
      path: "/women",
    },
    {
      id: 4,
      name: "kids",
      path: "/kids",
    },
    {
      id: 5,
      name: "sports & lifestyle",
      path: "/",
    },
    {
      id: 6,
      name: "outlet",
      path: "/outlet",
    },
  ];
  return (
    <Box display={"flex"} alignItems={"center"} gap="1.5rem">
      {lists.map((list) => (
        <Typography
          sx={{
            ":hover": {
              textDecoration: "underline",
              cursor: "pointer",
            },
          }}
          key={list.id}
        >
          {list.name.toLocaleUpperCase()}
        </Typography>
      ))}
    </Box>
  );
};

export default MenuList;
