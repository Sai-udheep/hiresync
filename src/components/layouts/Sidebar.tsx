import { Link, useLocation } from "react-router-dom";
import { useAuth, UserRole } from "@/contexts/AuthContext";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Calendar,
  CreditCard,
  FileText,
  Building,
  ShieldCheck,
  Bell,
  X
} from "lucide-react";

interface SidebarProps {
  closeSidebar: () => void;
}

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  roles: UserRole[];
}

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    roles: [UserRole.ADMIN, UserRole.HR, UserRole.EMPLOYEE],
  },
  {
    label: "Employees",
    href: "/employees",
    icon: Users,
    roles: [UserRole.ADMIN, UserRole.HR],
  },
  {
    label: "Attendance",
    href: "/attendance",
    icon: ClipboardList,
    roles: [UserRole.ADMIN, UserRole.HR, UserRole.EMPLOYEE],
  },
  {
    label: "Leave Management",
    href: "/leaves",
    icon: Calendar,
    roles: [UserRole.ADMIN, UserRole.HR, UserRole.EMPLOYEE],
  },
  {
    label: "Payroll",
    href: "/payroll",
    icon: CreditCard,
    roles: [UserRole.ADMIN, UserRole.HR],
  },
  {
    label: "Documents",
    href: "/documents",
    icon: FileText,
    roles: [UserRole.ADMIN, UserRole.HR, UserRole.EMPLOYEE],
  },
  {
    label: "Departments",
    href: "/departments",
    icon: Building,
    roles: [UserRole.ADMIN, UserRole.HR],
  },
  {
    label: "Roles",
    href: "/roles",
    icon: ShieldCheck,
    roles: [UserRole.ADMIN],
  },
  {
    label: "Notifications",
    href: "/notifications",
    icon: Bell,
    roles: [UserRole.ADMIN, UserRole.HR, UserRole.EMPLOYEE],
  }
];

const Sidebar = ({ closeSidebar }: SidebarProps) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return null;
  }

  // Filter navigation items based on user role
  const filteredNavItems = navItems.filter(item => 
    item.roles.includes(user.role)
  );

  return (
    <div className="flex h-full w-64 flex-col bg-sidebar border-r">
      <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
        <Link to="/dashboard" className="flex items-center">
          <span className="text-xl font-bold text-white">HRMS System</span>
        </Link>
        <button
          onClick={closeSidebar}
          className="lg:hidden p-2 text-sidebar-foreground hover:text-white"
        >
          <X size={20} />
        </button>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="space-y-1 px-2">
          {filteredNavItems.map((item) => {
            const isActive = location.pathname === item.href || location.pathname.startsWith(`${item.href}/`);
            
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center gap-3 rounded-md px-3 py-2 transition-all ${
                  isActive 
                    ? "bg-sidebar-accent text-white" 
                    : "text-sidebar-foreground hover:bg-sidebar-accent/70 hover:text-white"
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="border-t border-sidebar-border p-4">
        <div className="text-xs text-sidebar-foreground">
          <p>© 2024 HRMS System by Udheep, Ayush and Shrey</p>
          <p>Version 1.0.0</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
