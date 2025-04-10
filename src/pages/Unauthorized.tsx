
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldAlert, Home } from "lucide-react";

const Unauthorized = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-background">
      <div className="text-center">
        <ShieldAlert className="mx-auto h-16 w-16 text-red-500" />
        <h1 className="mt-6 text-3xl font-bold text-gray-900">Access Denied</h1>
        <p className="mt-2 text-lg text-gray-600">
          You don't have permission to access this page.
        </p>
        <div className="mt-6">
          <Button 
            asChild 
            className="bg-hrms-600 hover:bg-hrms-700 text-white"
          >
            <Link to="/dashboard">
              <Home className="mr-2 h-4 w-4" />
              Return to Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
