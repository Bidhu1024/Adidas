import { Box, Typography } from "@mui/material";
import { useState } from "react";

const MenuList = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const lists = [
    { id: 1, name: "SHOES", path: "/shoes", dropdown: ["Sneakers", "Boots", "Sandals"] },
    { id: 2, name: "Men", path: "/men", dropdown: ["T-Shirts", "Jeans", "Jackets"] },
    { id: 3, name: "Women", path: "/women", dropdown: ["Dresses", "Tops", "Skirts"] },
    { id: 4, name: "Kids", path: "/kids", dropdown: ["Toys", "Clothes", "Shoes"] },
    { id: 5, name: "Sports & Lifestyle", path: "/", dropdown: ["Fitness", "Yoga", "Accessories"] },
    { id: 6, name: "Outlet", path: "/outlet", dropdown: ["Sale Shoes", "Sale Clothes"] },
  ];

  return (
    <Box display="flex" alignItems="center" gap="1.5rem" position="relative">
      {lists.map((list) => (
        <Box
          key={list.id}
          onMouseEnter={() => setHovered(list.id)}
          onMouseLeave={() => setHovered(null)}
          sx={{ position: "relative" }}
        >
          <Typography
            sx={{
              ":hover": {
                textDecoration: "underline",
                cursor: "pointer",
              },
            }}
          >
            {list.name.toUpperCase()}
          </Typography>

          {hovered === list.id && (
            <Box
              sx={{
                position: "absolute",
                top: "100%",
                left: 0,
                mt: 1,
                backgroundColor: "white",
                boxShadow: 3,
                borderRadius: 1,
                minWidth: "200px",
                zIndex: 10,
                p: 2,
              }}
            >
              {list.dropdown.map((item, index) => (
                <Typography
                  key={index}
                  sx={{
                    p: 1,
                    ":hover": { backgroundColor: "#f5f5f5", cursor: "pointer" },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default MenuList;
