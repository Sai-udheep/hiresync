
import { Navigate } from "react-router-dom";
import { useAuth, UserRole } from "@/contexts/AuthContext";
import AdminDashboard from "./AdminDashboard";
import HrDashboard from "./HrDashboard";
import EmployeeDashboard from "./EmployeeDashboard";

const Dashboard = () => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  switch (user.role) {
    case UserRole.ADMIN:
      return <AdminDashboard />;
    case UserRole.HR:
      return <HrDashboard />;
    case UserRole.EMPLOYEE:
      return <EmployeeDashboard />;
    default:
      return <Navigate to="/unauthorized" replace />;
  }
};

export default Dashboard;
