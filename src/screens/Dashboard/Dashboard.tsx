import ImageBox from '../../components/Image/ImageBox';
import Navbar from '../../components/Navbar/Navbar';
import Topbar from '../../components/Topbar';
import VictoryBar from '../../components/Victory/VictoryBar';


const Dashboard = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
      <Topbar />
      <Navbar />
      <VictoryBar />
      <ImageBox/>

    </div>
  )
}

export default Dashboard
