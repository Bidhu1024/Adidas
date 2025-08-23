
import { Routes, Route,BrowserRouter  } from "react-router-dom";
import Dashboard from './screens/Dashboard/Dashboard';
const Routess = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Routess
