
import { useState } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // If user is already logged in, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const from = location.state?.from || "/dashboard";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }
    
    try {
      setIsLoading(true);
      await login(email, password);
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Login error:", error);
      // Error toast is handled in the login function
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-hrms-50 to-hrms-200">
      <div className="mx-auto w-full max-w-md space-y-6 rounded-xl bg-white p-8 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-hrms-600">TalentFlow HR</h1>
          <p className="mt-2 text-gray-600">Sign in to your account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <a href="#" className="text-sm text-hrms-500 hover:underline">
                Forgot password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-hrms-600 hover:bg-hrms-700 text-white"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                Signing in...
              </span>
            ) : (
              "Sign in"
            )}
          </Button>

          <div className="mt-4 text-sm text-gray-600">
            <p className="text-center">Demo Accounts:</p>
            <div className="mt-2 grid gap-2">
              <div className="rounded border p-2">
                <p><strong>Admin:</strong> admin@example.com / admin123</p>
              </div>
              <div className="rounded border p-2">
                <p><strong>HR:</strong> hr@example.com / hr123</p>
              </div>
              <div className="rounded border p-2">
                <p><strong>Employee:</strong> employee@example.com / employee123</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
