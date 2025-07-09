import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  User, 
  Mail, 
  Phone, 
  Shield,
  Calendar,
  Clock,
  Settings,
  Edit,
  Save,
  Camera
} from 'lucide-react';

export const AdminProfile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: 'Priya Sharma',
    email: 'priya.sharma@fleetops.com',
    phone: '+91 98765 43210',
    role: 'Super Administrator',
    department: 'Operations',
    employeeId: 'FO-001',
    joinDate: '2022-03-15',
    lastLogin: '2024-01-07 10:30:00',
    bio: 'Experienced fleet operations manager with 8+ years in transportation and logistics. Specializing in route optimization and team management.',
    emergencyContact: '+91 98765 43211',
    address: '123 Brigade Road, Bangalore, Karnataka 560001'
  });

  const [permissions] = useState([
    { name: 'Client Management', granted: true },
    { name: 'Driver Management', granted: true },
    { name: 'Vehicle Management', granted: true },
    { name: 'Financial Reports', granted: true },
    { name: 'System Settings', granted: true },
    { name: 'User Management', granted: true },
    { name: 'Analytics Access', granted: true }
  ]);

  const [activityLog] = useState([
    { action: 'Updated client billing settings', time: '2 hours ago', type: 'settings' },
    { action: 'Added new driver: Rajesh Kumar', time: '1 day ago', type: 'create' },
    { action: 'Generated monthly report', time: '2 days ago', type: 'report' },
    { action: 'Resolved SOS alert', time: '3 days ago', type: 'emergency' },
    { action: 'Updated vehicle maintenance schedule', time: '1 week ago', type: 'maintenance' }
  ]);

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile information has been successfully updated.",
    });
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'settings': return <Settings className="h-4 w-4 text-blue-600" />;
      case 'create': return <User className="h-4 w-4 text-green-600" />;
      case 'report': return <Calendar className="h-4 w-4 text-purple-600" />;
      case 'emergency': return <Shield className="h-4 w-4 text-red-600" />;
      case 'maintenance': return <Settings className="h-4 w-4 text-orange-600" />;
      default: return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Admin Profile</h2>
        <div className="flex space-x-2">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)} className="bg-blue-600 hover:bg-blue-700">
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="mr-2 h-5 w-5" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-10 w-10 text-blue-600" />
                  </div>
                  {isEditing && (
                    <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full p-2">
                      <Camera className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{profileData.fullName}</h3>
                  <p className="text-gray-600">{profileData.role}</p>
                  <Badge variant="secondary">{profileData.department}</Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  {isEditing ? (
                    <Input
                      id="fullName"
                      value={profileData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                    />
                  ) : (
                    <p className="mt-1 text-gray-900">{profileData.fullName}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="employeeId">Employee ID</Label>
                  <p className="mt-1 text-gray-900">{profileData.employeeId}</p>
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  {isEditing ? (
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  ) : (
                    <p className="mt-1 text-gray-900">{profileData.email}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  {isEditing ? (
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  ) : (
                    <p className="mt-1 text-gray-900">{profileData.phone}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="emergencyContact">Emergency Contact</Label>
                  {isEditing ? (
                    <Input
                      id="emergencyContact"
                      value={profileData.emergencyContact}
                      onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                    />
                  ) : (
                    <p className="mt-1 text-gray-900">{profileData.emergencyContact}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="joinDate">Join Date</Label>
                  <p className="mt-1 text-gray-900">{new Date(profileData.joinDate).toLocaleDateString()}</p>
                </div>
              </div>

              <div>
                <Label htmlFor="address">Address</Label>
                {isEditing ? (
                  <Textarea
                    id="address"
                    value={profileData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                  />
                ) : (
                  <p className="mt-1 text-gray-900">{profileData.address}</p>
                )}
              </div>

              <div>
                <Label htmlFor="bio">Bio</Label>
                {isEditing ? (
                  <Textarea
                    id="bio"
                    value={profileData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                  />
                ) : (
                  <p className="mt-1 text-gray-900">{profileData.bio}</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Information */}
        <div className="space-y-6">
          {/* Access Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Access Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label>Role</Label>
                  <p className="text-gray-900 font-medium">{profileData.role}</p>
                </div>
                <div>
                  <Label>Last Login</Label>
                  <p className="text-gray-900">{profileData.lastLogin}</p>
                </div>
                <div>
                  <Label>Account Status</Label>
                  <Badge variant="default" className="bg-green-100 text-green-800">Active</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Permissions */}
          <Card>
            <CardHeader>
              <CardTitle>Permissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {permissions.map((permission, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{permission.name}</span>
                    <Badge variant={permission.granted ? "default" : "secondary"}>
                      {permission.granted ? "Granted" : "Denied"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {activityLog.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-2 bg-gray-50 rounded-lg">
                    {getActivityIcon(activity.type)}
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};