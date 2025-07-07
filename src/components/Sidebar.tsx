
import React from 'react';
import { 
  Activity, 
  Users, 
  Settings, 
  Map, 
  Bell,
  Calendar,
  FileText,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  sosAlerts: number;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Activity },
  { id: 'clients', label: 'Client Management', icon: Users },
  { id: 'drivers', label: 'Driver Management', icon: Users },
  { id: 'vehicles', label: 'Vehicle Management', icon: Settings },
  { id: 'rides', label: 'Ride Requests', icon: Calendar },
  { id: 'tracking', label: 'Live Tracking', icon: Map },
  { id: 'sos', label: 'SOS Management', icon: Bell },
  { id: 'analytics', label: 'Analytics', icon: FileText },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView, sosAlerts }) => {
  return (
    <div className="w-64 bg-slate-900 text-white p-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold">FleetOps</h2>
        <p className="text-sm text-slate-400">Super Admin</p>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          const hasSosAlert = item.id === 'sos' && sosAlerts > 0;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "w-full justify-start text-left text-white hover:bg-slate-800 relative",
                isActive && "bg-slate-800 text-blue-400"
              )}
              onClick={() => setActiveView(item.id)}
            >
              <Icon className="mr-3 h-4 w-4" />
              {item.label}
              {hasSosAlert && (
                <span className="absolute right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {sosAlerts}
                </span>
              )}
            </Button>
          );
        })}
      </nav>
    </div>
  );
};
