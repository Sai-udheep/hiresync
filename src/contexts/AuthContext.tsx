
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from "sonner";

// Define user roles
export enum UserRole {
  ADMIN = 'admin',
  HR = 'hr',
  EMPLOYEE = 'employee'
}

// User interface
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

// Auth state interface
interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Auth context interface
interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Create the auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data - this would come from your backend in a real app
const mockUsers = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'admin123',
    role: UserRole.ADMIN,
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: '2',
    name: 'HR Manager',
    email: 'hr@example.com',
    password: 'hr123',
    role: UserRole.HR,
    avatar: 'https://i.pravatar.cc/150?img=2'
  },
  {
    id: '3',
    name: 'John Employee',
    email: 'employee@example.com',
    password: 'employee123',
    role: UserRole.EMPLOYEE,
    avatar: 'https://i.pravatar.cc/150?img=3'
  }
];

// Mock token generator
const generateToken = (user: User): string => {
  return `mock-jwt-token-${user.id}-${user.role}`;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: true
  });

  // Load user from localStorage on initial render
  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem('hrms_user');
      const storedToken = localStorage.getItem('hrms_token');
      
      if (storedUser && storedToken) {
        setState({
          user: JSON.parse(storedUser),
          token: storedToken,
          isAuthenticated: true,
          isLoading: false
        });
      } else {
        setState(prevState => ({ ...prevState, isLoading: false }));
      }
    };
    
    loadUser();
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      // In a real app, this would be an API call
      const user = mockUsers.find(u => u.email === email && u.password === password);
      
      if (!user) {
        throw new Error('Invalid credentials');
      }
      
      // Generate token
      const token = generateToken(user);
      
      // Remove password before storing user
      const { password: _, ...userWithoutPassword } = user;
      
      // Save to localStorage
      localStorage.setItem('hrms_user', JSON.stringify(userWithoutPassword));
      localStorage.setItem('hrms_token', token);
      
      // Update state
      setState({
        user: userWithoutPassword,
        token,
        isAuthenticated: true,
        isLoading: false
      });
      
      toast.success(`Welcome, ${userWithoutPassword.name}!`);
    } catch (error) {
      toast.error('Login failed: ' + (error as Error).message);
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    // Remove from localStorage
    localStorage.removeItem('hrms_user');
    localStorage.removeItem('hrms_token');
    
    // Update state
    setState({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false
    });
    
    toast.info('You have been logged out.');
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
