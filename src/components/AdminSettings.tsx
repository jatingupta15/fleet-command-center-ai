
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Settings, 
  Users,
  Bell,
  FileText,
  Activity,
  CheckCircle
} from 'lucide-react';

export const AdminSettings = () => {
  const [notifications, setNotifications] = useState({
    sosAlerts: true,
    driverAlerts: true,
    maintenanceAlerts: true,
    clientRequests: true,
    systemUpdates: false,
  });

  const teamMembers = [
    {
      id: 1,
      name: 'Priya Sharma',
      email: 'priya.sharma@fleetops.com',
      role: 'Super Admin',
      status: 'Active',
      lastLogin: '2024-01-07 10:30:00',
    },
    {
      id: 2,
      name: 'Rahul Verma',
      email: 'rahul.verma@fleetops.com',
      role: 'Operations Manager',
      status: 'Active',
      lastLogin: '2024-01-07 09:15:00',
    },
    {
      id: 3,
      name: 'Amit Singh',
      email: 'amit.singh@fleetops.com',
      role: 'Support Manager',
      status: 'Inactive',
      lastLogin: '2024-01-06 18:45:00',
    },
  ];

  const toggleNotification = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Admin Settings</h2>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Settings className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Profile Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <Input defaultValue="Admin User" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <Input defaultValue="admin@fleetops.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <Input defaultValue="+91 98765 43210" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <Input defaultValue="Super Administrator" disabled />
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="mr-2 h-5 w-5" />
              Notification Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(notifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </label>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleNotification(key)}
                  className={value ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-700'}
                >
                  {value ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <Settings className="h-4 w-4" />
                  )}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Team Access Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Team Access Management
            </span>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Users className="mr-2 h-4 w-4" />
              Add Team Member
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{member.name}</h4>
                    <p className="text-sm text-gray-600">{member.email}</p>
                    <p className="text-xs text-gray-500">Last login: {member.lastLogin}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {member.role}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    member.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {member.status}
                  </span>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* System Configuration */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="mr-2 h-5 w-5" />
              System Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Auto-assign Radius (km)
              </label>
              <Input defaultValue="5" type="number" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Max Wait Time (minutes)
              </label>
              <Input defaultValue="15" type="number" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                SOS Response Time (minutes)
              </label>
              <Input defaultValue="2" type="number" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Maintenance Alert Days
              </label>
              <Input defaultValue="7" type="number" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="mr-2 h-5 w-5" />
              System Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Database Status</span>
              <span className="flex items-center text-green-600">
                <CheckCircle className="h-4 w-4 mr-1" />
                Online
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">API Services</span>
              <span className="flex items-center text-green-600">
                <CheckCircle className="h-4 w-4 mr-1" />
                Operational
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">GPS Tracking</span>
              <span className="flex items-center text-green-600">
                <CheckCircle className="h-4 w-4 mr-1" />
                Active
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Notification Service</span>
              <span className="flex items-center text-green-600">
                <CheckCircle className="h-4 w-4 mr-1" />
                Running
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Billing & API Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="mr-2 h-5 w-5" />
            Billing & API Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Billing Configuration</h4>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Base Rate per KM (₹)
                </label>
                <Input defaultValue="12" type="number" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Waiting Charges per Hour (₹)
                </label>
                <Input defaultValue="50" type="number" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Peak Hour Multiplier
                </label>
                <Input defaultValue="1.5" type="number" step="0.1" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">API Configuration</h4>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Maps API Key
                </label>
                <Input defaultValue="••••••••••••••••" type="password" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  SMS Gateway API
                </label>
                <Input defaultValue="••••••••••••••••" type="password" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Payment Gateway Key
                </label>
                <Input defaultValue="••••••••••••••••" type="password" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
