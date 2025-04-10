import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// Layouts
import MainLayout from "./components/layouts/MainLayout";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";

// Auth Pages
import Login from "./pages/Login";
import Unauthorized from "./pages/Unauthorized";

// Dashboard
import Dashboard from "./pages/Dashboard";

// Employee Management
import EmployeesPage from "./pages/Employees";

// Other pages
import NotFound from "./pages/NotFound";
import { UserRole } from "./contexts/AuthContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            
            {/* Redirect root to dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <MainLayout>
                  <Dashboard />
                </MainLayout>
              </ProtectedRoute>
            } />
            
            {/* Employee Management - Only for Admin and HR */}
            <Route path="/employees" element={
              <ProtectedRoute allowedRoles={[UserRole.ADMIN, UserRole.HR]}>
                <MainLayout>
                  <EmployeesPage />
                </MainLayout>
              </ProtectedRoute>
            } />
            
            {/* Attendance */}
            <Route path="/attendance" element={
              <ProtectedRoute>
                <MainLayout>
                  <div className="p-4">Attendance Page (Coming Soon)</div>
                </MainLayout>
              </ProtectedRoute>
            } />
            
            {/* Leave Management */}
            <Route path="/leaves" element={
              <ProtectedRoute>
                <MainLayout>
                  <div className="p-4">Leave Management Page (Coming Soon)</div>
                </MainLayout>
              </ProtectedRoute>
            } />
            
            {/* Payroll */}
            <Route path="/payroll" element={
              <ProtectedRoute allowedRoles={[UserRole.ADMIN, UserRole.HR]}>
                <MainLayout>
                  <div className="p-4">Payroll Page (Coming Soon)</div>
                </MainLayout>
              </ProtectedRoute>
            } />
            
            {/* Documents */}
            <Route path="/documents" element={
              <ProtectedRoute>
                <MainLayout>
                  <div className="p-4">Documents Page (Coming Soon)</div>
                </MainLayout>
              </ProtectedRoute>
            } />
            
            {/* Departments */}
            <Route path="/departments" element={
              <ProtectedRoute allowedRoles={[UserRole.ADMIN, UserRole.HR]}>
                <MainLayout>
                  <div className="p-4">Departments Page (Coming Soon)</div>
                </MainLayout>
              </ProtectedRoute>
            } />
            
            {/* Roles */}
            <Route path="/roles" element={
              <ProtectedRoute allowedRoles={[UserRole.ADMIN]}>
                <MainLayout>
                  <div className="p-4">Roles Page (Coming Soon)</div>
                </MainLayout>
              </ProtectedRoute>
            } />
            
            {/* Notifications */}
            <Route path="/notifications" element={
              <ProtectedRoute>
                <MainLayout>
                  <div className="p-4">Notifications Page (Coming Soon)</div>
                </MainLayout>
              </ProtectedRoute>
            } />
            
            {/* Profile */}
            <Route path="/profile" element={
              <ProtectedRoute>
                <MainLayout>
                  <div className="p-4">Profile Page (Coming Soon)</div>
                </MainLayout>
              </ProtectedRoute>
            } />
            
            {/* Settings */}
            <Route path="/settings" element={
              <ProtectedRoute>
                <MainLayout>
                  <div className="p-4">Settings Page (Coming Soon)</div>
                </MainLayout>
              </ProtectedRoute>
            } />
            
            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
