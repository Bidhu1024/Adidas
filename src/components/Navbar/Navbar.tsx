import { Box } from "@mui/material";
import UpperBox from "./UpperBox";
import MainMenu from "./MainMenu";

const Navbar = () => {
  return (
    <Box
      height={"6rem"}
      width={"100%"}
      bgcolor={"white"}
      position={"relative"}
      sx={{ p: 3 }}
    >
      <UpperBox />
      <Box>
        <MainMenu />
      </Box>
    </Box>
  );
};

export default Navbar;
