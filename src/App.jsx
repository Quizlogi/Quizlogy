import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPenguji from "./pages/penguji/DashboardPenguji";
import DashboardUser from './pages/DashboardUser';
import QuizPage from "./pages/QuizPage";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import Role from "./pages/admin/Role";

export default function App() {
  return (
    <Router>
      <div className='bg-[#ECEFF1]'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/penguji/dashboardpenguji" element={<DashboardPenguji />} />
          <Route path="/dashboard" element={<DashboardUser />} />
          <Route path="/quizpage" element={<QuizPage />} />
          <Route path="/admin/dashboardadmin" element={<DashboardAdmin />} />
          <Route path="/admin/dashboardadmin/role" element={<Role />} />
        </Routes>
      </div>
    </Router>
  )
}
