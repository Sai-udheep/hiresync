
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { Users, Calendar, Clock, FileCheck, AlertCircle, DollarSign } from "lucide-react";

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, {user?.name}!</p>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hrms-dashboard-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
            <Users className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">254</div>
            <p className="text-xs text-muted-foreground">
              +12 from last month
            </p>
          </CardContent>
        </Card>

        <Card className="hrms-dashboard-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Leave Requests</CardTitle>
            <Calendar className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">
              5 require urgent attention
            </p>
          </CardContent>
        </Card>

        <Card className="hrms-dashboard-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Attendance</CardTitle>
            <Clock className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">
              221/254 employees present
            </p>
          </CardContent>
        </Card>

        <Card className="hrms-dashboard-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Documents Pending Review</CardTitle>
            <FileCheck className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              12 for new employees
            </p>
          </CardContent>
        </Card>

        <Card className="hrms-dashboard-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Urgent Notifications</CardTitle>
            <AlertCircle className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">
              3 HR policy updates
            </p>
          </CardContent>
        </Card>

        <Card className="hrms-dashboard-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Payroll this Month</CardTitle>
            <DollarSign className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$427,890</div>
            <p className="text-xs text-muted-foreground">
              Processing on 28th
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent activity and upcoming sections would go here */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 border-b pb-4">
              <div className="rounded-full bg-blue-100 p-2">
                <Users size={16} className="text-blue-600" />
              </div>
              <div>
                <p className="font-medium">New employee onboarded</p>
                <p className="text-sm text-muted-foreground">Sarah Johnson joined the Engineering team</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b pb-4">
              <div className="rounded-full bg-green-100 p-2">
                <Calendar size={16} className="text-green-600" />
              </div>
              <div>
                <p className="font-medium">Leave request approved</p>
                <p className="text-sm text-muted-foreground">Michael's vacation approved by HR</p>
                <p className="text-xs text-muted-foreground">3 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-orange-100 p-2">
                <DollarSign size={16} className="text-orange-600" />
              </div>
              <div>
                <p className="font-medium">Payroll processing started</p>
                <p className="text-sm text-muted-foreground">Payroll for April 2025 initiated</p>
                <p className="text-xs text-muted-foreground">Yesterday</p>
              </div>
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
                <p className="font-medium">Quarterly Review Meeting</p>
                <p className="text-sm text-muted-foreground">Main Conference Room, 10:00 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b pb-4">
              <div className="text-center">
                <p className="text-sm font-bold text-hrms-600">APR</p>
                <p className="text-xl font-bold">18</p>
              </div>
              <div>
                <p className="font-medium">New Hire Orientation</p>
                <p className="text-sm text-muted-foreground">Training Room, 9:00 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-sm font-bold text-hrms-600">APR</p>
                <p className="text-xl font-bold">28</p>
              </div>
              <div>
                <p className="font-medium">Payroll Processing Deadline</p>
                <p className="text-sm text-muted-foreground">Submit time sheets by 5:00 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
