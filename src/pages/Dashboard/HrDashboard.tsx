
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { Users, Calendar, Clock, FileCheck, AlertCircle, User } from "lucide-react";

const HrDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">HR Dashboard</h1>
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
              Across 8 departments
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
            <CardTitle className="text-sm font-medium">Document Reviews</CardTitle>
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
            <CardTitle className="text-sm font-medium">New Applicants</CardTitle>
            <User className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">
              15 for engineering roles
            </p>
          </CardContent>
        </Card>

        <Card className="hrms-dashboard-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Announcements</CardTitle>
            <AlertCircle className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Policy updates pending
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Events and Tasks */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Current Tasks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 border-b pb-4">
              <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-red-500">
                <span className="h-2 w-2 rounded-full bg-red-500"></span>
              </div>
              <div>
                <p className="font-medium">Review leave applications</p>
                <p className="text-sm text-muted-foreground">Due today</p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b pb-4">
              <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-orange-500">
                <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              </div>
              <div>
                <p className="font-medium">Complete onboarding for new hires</p>
                <p className="text-sm text-muted-foreground">Due tomorrow</p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b pb-4">
              <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-yellow-500">
                <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              </div>
              <div>
                <p className="font-medium">Schedule performance reviews</p>
                <p className="text-sm text-muted-foreground">Due in 3 days</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-green-500">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
              </div>
              <div>
                <p className="font-medium">Prepare monthly workforce report</p>
                <p className="text-sm text-muted-foreground">Due in 5 days</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Applications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 border-b pb-4">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="font-bold text-blue-600">JD</span>
              </div>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-muted-foreground">Senior Developer</p>
                <p className="text-xs text-muted-foreground">Applied yesterday</p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b pb-4">
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="font-bold text-purple-600">AS</span>
              </div>
              <div>
                <p className="font-medium">Amy Smith</p>
                <p className="text-sm text-muted-foreground">UX Designer</p>
                <p className="text-xs text-muted-foreground">Applied 2 days ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <span className="font-bold text-green-600">RJ</span>
              </div>
              <div>
                <p className="font-medium">Robert Johnson</p>
                <p className="text-sm text-muted-foreground">Product Manager</p>
                <p className="text-xs text-muted-foreground">Applied 3 days ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HrDashboard;
