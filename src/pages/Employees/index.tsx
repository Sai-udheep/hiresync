
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserPlus, Search, Edit, Trash2, Eye } from "lucide-react";
import { UserRole } from "@/contexts/AuthContext";

// Mock employee data
const employees = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@example.com",
    department: "Engineering",
    position: "Senior Developer",
    status: "Active",
    role: UserRole.EMPLOYEE,
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: "2",
    name: "Jane Doe",
    email: "jane.doe@example.com",
    department: "Marketing",
    position: "Marketing Manager",
    status: "Active",
    role: UserRole.EMPLOYEE,
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: "3",
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    department: "HR",
    position: "HR Specialist",
    status: "On Leave",
    role: UserRole.HR,
    avatar: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: "4",
    name: "Emily Williams",
    email: "emily.williams@example.com",
    department: "Finance",
    position: "Accountant",
    status: "Active",
    role: UserRole.EMPLOYEE,
    avatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: "5",
    name: "David Brown",
    email: "david.brown@example.com",
    department: "IT",
    position: "System Administrator",
    status: "Active",
    role: UserRole.EMPLOYEE,
    avatar: "https://i.pravatar.cc/150?img=8",
  },
];

const EmployeesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter employees based on search term
  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800";
      case "on leave":
        return "bg-yellow-100 text-yellow-800";
      case "terminated":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Employees</h1>
          <p className="text-muted-foreground">Manage your organization's employees</p>
        </div>
        <Button className="mt-4 sm:mt-0 bg-hrms-600 hover:bg-hrms-700 text-white">
          <UserPlus className="mr-2 h-4 w-4" />
          Add Employee
        </Button>
      </div>
      
      {/* Search and filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Search employees..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Department</Button>
          <Button variant="outline">Status</Button>
        </div>
      </div>
      
      {/* Employees table */}
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEmployees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={employee.avatar} alt={employee.name} />
                      <AvatarFallback>
                        {employee.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{employee.name}</p>
                      <p className="text-sm text-muted-foreground">{employee.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{employee.department}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={getStatusColor(employee.status)}>
                    {employee.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default EmployeesPage;
