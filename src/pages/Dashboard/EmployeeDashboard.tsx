
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, FileText, Calendar as CalendarIcon, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const EmployeeDashboard = () => {
  const { user } = useAuth();
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const handleClockIn = () => {
    toast.success("You've successfully clocked in!");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Employee Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {user?.name}! Today is {formattedDate}
        </p>
      </div>

      {/* Attendance Card */}
      <Card className="border-2 border-hrms-200">
        <CardHeader>
          <CardTitle>Today's Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-hrms-100 p-3">
                <Clock className="h-8 w-8 text-hrms-600" />
              </div>
              <div>
                <p className="text-xl font-semibold">08:00 AM - 05:00 PM</p>
                <p className="text-sm text-muted-foreground">Your scheduled hours today</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button 
                onClick={handleClockIn} 
                className="bg-hrms-600 hover:bg-hrms-700 text-white"
              >
                Clock In
              </Button>
              <Button variant="outline">Clock Out</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Status Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hrms-dashboard-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Leave Balance</CardTitle>
            <Calendar className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18 days</div>
            <p className="text-xs text-muted-foreground">
              5 days used this year
            </p>
            <div className="mt-2">
              <div className="h-2 w-full rounded-full bg-gray-200">
                <div className="h-2 rounded-full bg-hrms-500" style={{ width: '78%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hrms-dashboard-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Leave</CardTitle>
            <CalendarIcon className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Apr 20-24</div>
            <p className="text-xs text-muted-foreground">
              Vacation (approved)
            </p>
            <div className="mt-2">
              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                Approved
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="hrms-dashboard-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Documents</CardTitle>
            <FileText className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2 pending</div>
            <p className="text-xs text-muted-foreground">
              Signature required
            </p>
            <Button variant="link" className="mt-2 p-0 h-auto">
              View documents
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Announcements and Calendar */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle>Announcements</CardTitle>
            <AlertCircle className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border bg-hrms-50 p-4">
              <p className="font-medium text-hrms-800">Company Picnic</p>
              <p className="text-sm">Annual company picnic will be held on May 15th at Greenfield Park.</p>
              <p className="mt-2 text-xs text-muted-foreground">Posted 2 days ago</p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-medium">New Health Benefits</p>
              <p className="text-sm">Updated health benefits package available starting next month.</p>
              <p className="mt-2 text-xs text-muted-foreground">Posted 5 days ago</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 border-b pb-4">
              <div className="text-center">
                <p className="text-sm font-bold text-hrms-600">APR</p>
                <p className="text-xl font-bold">15</p>
              </div>
              <div>
                <p className="font-medium">Team Meeting</p>
                <p className="text-sm text-muted-foreground">Conference Room B, 10:00 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b pb-4">
              <div className="text-center">
                <p className="text-sm font-bold text-hrms-600">APR</p>
                <p className="text-xl font-bold">17</p>
              </div>
              <div>
                <p className="font-medium">Project Deadline</p>
                <p className="text-sm text-muted-foreground">Q1 Report Due</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-sm font-bold text-hrms-600">MAY</p>
                <p className="text-xl font-bold">15</p>
              </div>
              <div>
                <p className="font-medium">Company Picnic</p>
                <p className="text-sm text-muted-foreground">Greenfield Park, 12:00 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
