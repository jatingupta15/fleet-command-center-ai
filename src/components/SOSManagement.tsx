
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Bell, 
  Users,
  Map,
  Clock,
  AlertTriangle,
  CheckCircle,
  Settings
} from 'lucide-react';

export const SOSManagement = () => {
  const [selectedAlert, setSelectedAlert] = useState(null);

  const sosAlerts = [
    {
      id: 'SOS001',
      tripId: 'T001',
      timestamp: '2024-01-07 10:30:25',
      status: 'Active',
      priority: 'Critical',
      employee: {
        name: 'Priya Sharma',
        phone: '+91 98765 43210',
        company: 'Infosys Ltd',
        location: 'Koramangala, Bangalore'
      },
      driver: {
        name: 'Rajesh Kumar',
        phone: '+91 98765 43211',
        vehicle: 'KA-01-HH-1234',
        location: 'Koramangala, Bangalore'
      },
      lastLocation: {
        lat: 12.9352,
        lng: 77.6245,
        address: 'Koramangala 5th Block, Bangalore'
      },
      notes: 'Employee reported feeling unsafe. Driver contacted and confirmed all is well.',
      responseTime: '2 mins',
    },
    {
      id: 'SOS002',
      tripId: 'T007',
      timestamp: '2024-01-07 09:15:42',
      status: 'Resolved',
      priority: 'High',
      employee: {
        name: 'Rohit Gupta',
        phone: '+91 98765 43212',
        company: 'Accenture',
        location: 'Whitefield, Bangalore'
      },
      driver: {
        name: 'Amit Sharma',
        phone: '+91 98765 43213',
        vehicle: 'KA-01-HH-5678',
        location: 'Whitefield, Bangalore'
      },
      lastLocation: {
        lat: 12.9698,
        lng: 77.7500,
        address: 'ITPL Main Road, Whitefield, Bangalore'
      },
      notes: 'Vehicle breakdown reported. Replacement vehicle arranged. Trip completed successfully.',
      responseTime: '5 mins',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-red-100 text-red-800';
      case 'Resolved':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical':
        return 'bg-red-500 text-white';
      case 'High':
        return 'bg-orange-500 text-white';
      case 'Medium':
        return 'bg-yellow-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const activeAlerts = sosAlerts.filter(alert => alert.status === 'Active');

  return (
    <div className="space-y-6">
      {/* Emergency Header */}
      {activeAlerts.length > 0 && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
          <div className="flex items-center">
            <AlertTriangle className="h-6 w-6 text-red-500 mr-3" />
            <div>
              <h3 className="text-lg font-medium text-red-800">
                🚨 {activeAlerts.length} Active SOS Alert{activeAlerts.length > 1 ? 's' : ''}
              </h3>
              <p className="text-red-700">Immediate attention required</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">SOS Management</h2>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Clock className="mr-2 h-4 w-4" />
            Response Log
          </Button>
          <Button className="bg-red-600 hover:bg-red-700">
            <Bell className="mr-2 h-4 w-4" />
            Emergency Protocols
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Alerts</p>
                <p className="text-2xl font-bold text-red-600">{activeAlerts.length}</p>
              </div>
              <Bell className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Resolved Today</p>
                <p className="text-2xl font-bold text-green-600">
                  {sosAlerts.filter(alert => alert.status === 'Resolved').length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Response Time</p>
                <p className="text-2xl font-bold text-blue-600">3.5 mins</p>
              </div>
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total This Month</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* SOS Alerts List */}
      <div className="space-y-4">
        {sosAlerts.map((alert) => (
          <Card key={alert.id} className={`hover:shadow-md transition-shadow ${alert.status === 'Active' ? 'ring-2 ring-red-200' : ''}`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${alert.status === 'Active' ? 'bg-red-100' : 'bg-green-100'}`}>
                    {alert.status === 'Active' ? (
                      <Bell className="h-6 w-6 text-red-600" />
                    ) : (
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">SOS Alert #{alert.id}</h3>
                    <p className="text-sm text-gray-600">Trip ID: {alert.tripId} • {alert.timestamp}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(alert.priority)}`}>
                    {alert.priority}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(alert.status)}`}>
                    {alert.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                {/* Employee Info */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Employee Information</h4>
                  <p className="text-sm text-blue-800"><strong>Name:</strong> {alert.employee.name}</p>
                  <p className="text-sm text-blue-800"><strong>Phone:</strong> {alert.employee.phone}</p>
                  <p className="text-sm text-blue-800"><strong>Company:</strong> {alert.employee.company}</p>
                  <p className="text-sm text-blue-800"><strong>Location:</strong> {alert.employee.location}</p>
                </div>

                {/* Driver Info */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-900 mb-2">Driver Information</h4>
                  <p className="text-sm text-green-800"><strong>Name:</strong> {alert.driver.name}</p>
                  <p className="text-sm text-green-800"><strong>Phone:</strong> {alert.driver.phone}</p>
                  <p className="text-sm text-green-800"><strong>Vehicle:</strong> {alert.driver.vehicle}</p>
                  <p className="text-sm text-green-800"><strong>Location:</strong> {alert.driver.location}</p>
                </div>
              </div>

              {/* Location and Notes */}
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Last Known Location</h4>
                <p className="text-sm text-gray-700">{alert.lastLocation.address}</p>
                <p className="text-xs text-gray-500">Lat: {alert.lastLocation.lat}, Lng: {alert.lastLocation.lng}</p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <h4 className="font-medium text-yellow-900 mb-2">Notes & Actions Taken</h4>
                <p className="text-sm text-yellow-800">{alert.notes}</p>
                <p className="text-xs text-yellow-700 mt-1">Response Time: {alert.responseTime}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2">
                <Button 
                  size="sm" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => console.log('Calling employee...')}
                >
                  <Users className="mr-1 h-4 w-4" />
                  Call Employee
                </Button>
                <Button 
                  size="sm" 
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => console.log('Calling driver...')}
                >
                  <Users className="mr-1 h-4 w-4" />
                  Call Driver
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => console.log('Viewing location...')}
                >
                  <Map className="mr-1 h-4 w-4" />
                  View Location
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSelectedAlert(alert)}
                >
                  <Settings className="mr-1 h-4 w-4" />
                  Update Status
                </Button>
                {alert.status === 'Active' && (
                  <Button 
                    size="sm" 
                    className="bg-red-600 hover:bg-red-700"
                    onClick={() => console.log('Escalating alert...')}
                  >
                    <AlertTriangle className="mr-1 h-4 w-4" />
                    Escalate
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {sosAlerts.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Active SOS Alerts</h3>
            <p className="text-gray-600">All systems are operating normally. Emergency response team is on standby.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
