
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Settings, 
  Activity,
  Clock,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

export const VehicleManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const vehicles = [
    {
      id: 1,
      number: 'KA-01-HH-1234',
      type: 'Sedan',
      model: 'Honda City',
      status: 'Available',
      driver: 'Rajesh Kumar',
      location: 'Koramangala, Bangalore',
      lastService: '2024-01-15',
      nextService: '2024-04-15',
      mileage: 15.2,
      totalDistance: 45670,
      fuel: 85,
    },
    {
      id: 2,
      number: 'KA-01-HH-5678',
      type: 'SUV',
      model: 'Toyota Innova',
      status: 'In Use',
      driver: 'Amit Sharma',
      location: 'Whitefield, Bangalore',
      lastService: '2024-01-10',
      nextService: '2024-04-10',
      mileage: 12.8,
      totalDistance: 62340,
      fuel: 45,
    },
    {
      id: 3,
      number: 'KA-01-HH-9012',
      type: 'Premium',
      model: 'BMW 3 Series',
      status: 'Maintenance',
      driver: 'Unassigned',
      location: 'Service Center',
      lastService: '2024-01-20',
      nextService: '2024-04-20',
      mileage: 10.5,
      totalDistance: 38950,
      fuel: 20,
    },
    {
      id: 4,
      number: 'KA-01-HH-3456',
      type: 'Sedan',
      model: 'Maruti Dzire',
      status: 'Available',
      driver: 'Priya Singh',
      location: 'Electronic City, Bangalore',
      lastService: '2024-01-05',
      nextService: '2024-04-05',
      mileage: 18.5,
      totalDistance: 28745,
      fuel: 70,
    },
  ];

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.driver.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || vehicle.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800';
      case 'In Use':
        return 'bg-blue-100 text-blue-800';
      case 'Maintenance':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Available':
        return <CheckCircle className="h-4 w-4" />;
      case 'In Use':
        return <Activity className="h-4 w-4" />;
      case 'Maintenance':
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Vehicle Management</h2>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Settings className="mr-2 h-4 w-4" />
          Add New Vehicle
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Vehicles</p>
                <p className="text-2xl font-bold text-gray-900">{vehicles.length}</p>
              </div>
              <Settings className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Available</p>
                <p className="text-2xl font-bold text-gray-900">
                  {vehicles.filter(v => v.status === 'Available').length}
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
                <p className="text-sm font-medium text-gray-600">In Use</p>
                <p className="text-2xl font-bold text-gray-900">
                  {vehicles.filter(v => v.status === 'In Use').length}
                </p>
              </div>
              <Activity className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Maintenance</p>
                <p className="text-2xl font-bold text-gray-900">
                  {vehicles.filter(v => v.status === 'Maintenance').length}
                </p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-4">
        <Input
          placeholder="Search vehicles, model, or driver..."
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
          <option value="available">Available</option>
          <option value="in use">In Use</option>
          <option value="maintenance">Maintenance</option>
        </select>
        <Button variant="outline">Filter by Type</Button>
        <Button variant="outline">Maintenance Schedule</Button>
      </div>

      {/* Vehicle List */}
      <div className="grid grid-cols-1 gap-4">
        {filteredVehicles.map((vehicle) => (
          <Card key={vehicle.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Settings className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{vehicle.number}</h3>
                    <p className="text-sm text-gray-600">{vehicle.type} • {vehicle.model}</p>
                    <p className="text-sm text-gray-600">Driver: {vehicle.driver}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(vehicle.status)}`}>
                    {getStatusIcon(vehicle.status)}
                    <span>{vehicle.status}</span>
                  </span>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-2 md:grid-cols-6 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Location</p>
                  <p className="text-sm text-gray-900">{vehicle.location}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Fuel Level</p>
                  <div className="flex items-center space-x-2">
                    <div className="w-12 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${vehicle.fuel > 50 ? 'bg-green-500' : vehicle.fuel > 25 ? 'bg-yellow-500' : 'bg-red-500'}`}
                        style={{ width: `${vehicle.fuel}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-900">{vehicle.fuel}%</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Mileage</p>
                  <p className="text-sm font-medium text-gray-900">{vehicle.mileage} km/l</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Distance</p>
                  <p className="text-sm font-medium text-gray-900">{vehicle.totalDistance.toLocaleString()} km</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Next Service</p>
                  <p className="text-sm font-medium text-gray-900">{vehicle.nextService}</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  {vehicle.status === 'Available' && (
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Assign Driver
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
