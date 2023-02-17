import { Routes, Route } from "react-router-dom";
import InitialPage from "../pages/InitialPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import ProtectRoutes from "../components/ProtectRoutes";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<InitialPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<ProtectRoutes />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
