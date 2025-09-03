import { Box } from "@mui/material";
import HotSection from "../../components/Hot/HotSection";
import ImageBox from "../../components/Image/ImageBox";
import Navbar from "../../components/Navbar/Navbar";
//import ShopingSection from "../../components/Shopping/ShopingSection";
import Topbar from "../../components/Topbar";
import VictoryBar from "../../components/Victory/VictoryBar";
import Overflow from '../../components/OverflowShopping/Overflow';

const Dashboard = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Topbar />
      <Navbar />
      <VictoryBar />
      <ImageBox />
      <Box sx={{width:"100%",padding:"10px 4rem"}}>
        {/* <ShopingSection /> */}
        <HotSection />
        <Overflow />
      </Box>
    </div>
  );
};

export default Dashboard;
