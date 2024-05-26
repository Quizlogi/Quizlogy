import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPenguji from "./pages/DashboardPenguji";
import QuizPage from "./pages/QuizPage";
import DashboardAdmin from "./pages/DashboardAdmin";

export default function App() {
  return (
    <Router>
      <div className='bg-[#ECEFF1]'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboardpenguji" element={<DashboardPenguji />} />
          <Route path="/quizpage" element={<QuizPage />} />
          <Route path="/dashboardadmin" element={<DashboardAdmin />} />
        </Routes>
      </div>
    </Router>
  )
}
