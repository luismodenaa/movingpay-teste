import { Routes, Route } from "react-router-dom";
import InitialPage from "../pages/InitialPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<InitialPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export default RoutesMain;
