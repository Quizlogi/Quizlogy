import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPenguji from "./pages/DashboardPenguji";

export default function App() {
  return (
    <Router>
      <div className='bg-[#ECEFF1]'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboardpenguji" element={<DashboardPenguji />} />
        </Routes>
      </div>
    </Router>
  )
}
