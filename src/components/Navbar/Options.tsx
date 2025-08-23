import { Badge, Box } from "@mui/material";
import Search from "./Search";
import Person2Icon from "@mui/icons-material/Person2";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
const Options = () => {
  return (
    <Box display={"flex"} alignItems={"center"} gap="1rem">
      <Search />
      <Badge sx={{ cursor: "pointer" }} badgeContent={2} color="success">
        <Person2Icon />
      </Badge>
      <FavoriteBorderIcon sx={{ cursor: "pointer" }} />
      <WorkOutlineIcon sx={{ cursor: "pointer" }} />
    </Box>
  );
};

export default Options;
