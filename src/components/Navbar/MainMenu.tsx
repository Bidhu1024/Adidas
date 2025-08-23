import { Box } from "@mui/material";
import logo from "../../assets/logo.jpg";
import MenuList from "./MenuList";
const MainMenu = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <img src={logo} alt="adidas logo" height={70} width={80} />
      </Box>
      <Box>
        <MenuList />
      </Box>
      <Box></Box>
    </Box>
  );
};

export default MainMenu;
