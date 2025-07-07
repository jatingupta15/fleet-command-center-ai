
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Users, 
  Activity,
  Clock,
  CheckCircle,
  Settings
} from 'lucide-react';

export const DriverManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const drivers = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      status: 'Active',
      location: 'Koramangala, Bangalore',
      vehicle: 'KA-01-HH-1234',
      rating: 4.9,
      tripsToday: 12,
      totalTrips: 1247,
      joinDate: '2023-01-15',
      license: 'KA1234567890',
    },
    {
      id: 2,
      name: 'Amit Sharma',
      phone: '+91 98765 43211',
      status: 'In Ride',
      location: 'Whitefield, Bangalore',
      vehicle: 'KA-01-HH-5678',
      rating: 4.8,
      tripsToday: 11,
      totalTrips: 892,
      joinDate: '2023-03-22',
      license: 'KA0987654321',
    },
    {
      id: 3,
      name: 'Priya Singh',
      phone: '+91 98765 43212',
      status: 'Offline',
      location: 'Electronic City, Bangalore',
      vehicle: 'KA-01-HH-9012',
      rating: 4.7,
      tripsToday: 0,
      totalTrips: 654,
      joinDate: '2023-02-10',
      license: 'KA1357924680',
    },
    {
      id: 4,
      name: 'Suresh Reddy',
      phone: '+91 98765 43213',
      status: 'Active',
      location: 'HSR Layout, Bangalore',
      vehicle: 'KA-01-HH-3456',
      rating: 4.6,
      tripsToday: 8,
      totalTrips: 1156,
      joinDate: '2022-11-05',
      license: 'KA2468013579',
    },
  ];

  const filteredDrivers = drivers.filter(driver => {
    const matchesSearch = driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         driver.phone.includes(searchTerm) ||
                         driver.vehicle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || driver.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'In Ride':
        return 'bg-blue-100 text-blue-800';
      case 'Offline':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Driver Management</h2>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Users className="mr-2 h-4 w-4" />
          Add New Driver
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Drivers</p>
                <p className="text-2xl font-bold text-gray-900">{drivers.length}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Now</p>
                <p className="text-2xl font-bold text-gray-900">
                  {drivers.filter(d => d.status === 'Active').length}
                </p>
              </div>
              <Activity className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">In Ride</p>
                <p className="text-2xl font-bold text-gray-900">
                  {drivers.filter(d => d.status === 'In Ride').length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Offline</p>
                <p className="text-2xl font-bold text-gray-900">
                  {drivers.filter(d => d.status === 'Offline').length}
                </p>
              </div>
              <Clock className="h-8 w-8 text-gray-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-4">
        <Input
          placeholder="Search drivers, phone, or vehicle..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="in ride">In Ride</option>
          <option value="offline">Offline</option>
        </select>
        <Button variant="outline">Filter by Location</Button>
        <Button variant="outline">Performance Report</Button>
      </div>

      {/* Driver List */}
      <div className="grid grid-cols-1 gap-4">
        {filteredDrivers.map((driver) => (
          <Card key={driver.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{driver.name}</h3>
                    <p className="text-sm text-gray-600">{driver.phone}</p>
                    <p className="text-sm text-gray-600">License: {driver.license}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(driver.status)}`}>
                    {driver.status}
                  </span>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-2 md:grid-cols-6 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Current Location</p>
                  <p className="text-sm text-gray-900">{driver.location}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Vehicle</p>
                  <p className="text-sm font-medium text-gray-900">{driver.vehicle}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Rating</p>
                  <p className="text-sm font-medium text-gray-900">★ {driver.rating}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Trips Today</p>
                  <p className="text-sm font-medium text-gray-900">{driver.tripsToday}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Trips</p>
                  <p className="text-sm font-medium text-gray-900">{driver.totalTrips.toLocaleString()}</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                  {driver.status === 'Active' && (
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Assign Ride
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
