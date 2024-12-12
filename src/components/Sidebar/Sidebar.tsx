import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Home,
  GitPullRequest,
  FlaskConical ,
  UserCircle,
  Settings2,
  Power,
  Menu,
  X,
  Leaf
} from 'lucide-react';
import SidebarItem from './SidebarItem';
import { useAuthStore } from '../../store/auth-store';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logout = useAuthStore((state) => state.logout);

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: FlaskConical, label: 'My Tests', path: '/my-test' },
    { icon: GitPullRequest, label: 'Requests', path: '/test-pool' },
    { icon: UserCircle, label: 'Account', path: '/profile' },
    { icon: Settings2, label: 'Settings', path: '/setting/change-password' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 left-0 w-full bg-[#243B55] z-50 flex justify-between items-center p-4 shadow-md">
        <div className="flex items-center gap-2">
          <Leaf className="h-8 w-8 text-orange-400" />
          <span className="text-white text-xl font-semibold">
          FarmTrack
          </span>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-[#243B55] z-40 pt-4 pb-8 px-4 shadow-lg">
          <div className="space-y-3">
            {menuItems.map((item) => (
              <SidebarItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                isActive={location.pathname === item.path}
                onClick={() => handleNavigation(item.path)}
                isMobile
              />
            ))}
            <SidebarItem
              icon={Power}
              label="Logout"
              onClick={handleLogout}
              isMobile
            />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed h-screen w-64 bg-[#243B55] p-4 flex-col shadow-lg">
        <div className="flex items-center gap-2 px-4 py-3">
          <Leaf className="h-8 w-8 text-orange-400" />
          <span className="text-white text-xl font-semibold">
          FarmTrack
          </span>
        </div>

        <div className="flex-1 mt-6 space-y-3">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              isActive={location.pathname === item.path}
              onClick={() => navigate(item.path)}
            />
          ))}
        </div>

        <div className="mt-auto">
          <SidebarItem
            icon={Power}
            label="Logout"
            onClick={handleLogout}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
