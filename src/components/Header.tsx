
import React from 'react';
import { Bell, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  sosAlerts: number;
}

export const Header: React.FC<HeaderProps> = ({ sosAlerts }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-900">Fleet Command Center</h1>
          {sosAlerts > 0 && (
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
              🚨 {sosAlerts} Active SOS Alert{sosAlerts > 1 ? 's' : ''}
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="relative" onClick={() => window.location.hash = 'notifications'}>
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center space-x-2" onClick={() => window.location.hash = 'profile'}>
            <User className="h-5 w-5" />
            <span>Admin</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
