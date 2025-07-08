
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Calendar, 
  Users,
  Clock,
  CheckCircle,
  Settings,
  Map
} from 'lucide-react';

export const RideRequestManagement = () => {
  const [statusFilter, setStatusFilter] = useState('all');

  const rideRequests = [
    {
      id: 'RR001',
      timestamp: '2024-01-07 10:30:00',
      status: 'Pending',
      organization: 'Infosys Ltd',
      rider: {
        name: 'Anita Patel',
        phone: '+91 98765 43210',
        employee_id: 'INF001234',
        department: 'IT Services'
      },
      pickup: {
        location: 'Electronic City Phase 1',
        time: '2024-01-07 14:00:00',
        address: 'Infosys Campus, Electronic City Phase 1, Bangalore'
      },
      dropoff: {
        location: 'Koramangala',
        address: 'Forum Mall, Koramangala, Bangalore'
      },
      vehicleType: 'Sedan',
      estimatedDistance: '12.5 km',
      estimatedDuration: '35 mins',
      tripType: 'Both',
      reasonForRequest: 'Office commute',
      additionalNotes: 'None',
      assignedDriver: null,
      assignedVehicle: null,
    },
    {
      id: 'RR002',
      timestamp: '2024-01-07 09:45:00',
      status: 'Scheduled',
      
      organization: 'Accenture',
      rider: {
        name: 'Rohit Sharma',
        phone: '+91 98765 43211',
        employee_id: 'ACC005678',
        department: 'Finance'
      },
      pickup: {
        location: 'Whitefield',
        time: '2024-01-07 16:30:00',
        address: 'Accenture Office, Whitefield, Bangalore'
      },
      dropoff: {
        location: 'Airport',
        address: 'Kempegowda International Airport, Bangalore'
      },
      vehicleType: 'SUV',
      estimatedDistance: '28.3 km',
      estimatedDuration: '55 mins',
      tripType: 'Drop Only',
      reasonForRequest: 'Airport transfer',
      additionalNotes: 'Airport pickup - flight at 8 PM',
      assignedDriver: 'Rajesh Kumar',
      assignedVehicle: 'KA-01-HH-1234',
    },
    {
      id: 'RR003',
      timestamp: '2024-01-07 08:15:00',
      status: 'Completed',
      
      organization: 'TCS',
      rider: {
        name: 'Priya Singh',
        phone: '+91 98765 43212',
        employee_id: 'TCS009876',
        department: 'Human Resources'
      },
      pickup: {
        location: 'HSR Layout',
        time: '2024-01-07 09:00:00',
        address: 'HSR Layout Sector 7, Bangalore'
      },
      dropoff: {
        location: 'Manyata Tech Park',
        address: 'Manyata Tech Park, Bangalore'
      },
      vehicleType: 'Sedan',
      estimatedDistance: '15.2 km',
      estimatedDuration: '42 mins',
      tripType: 'Pickup Only',
      reasonForRequest: 'Office pickup',
      additionalNotes: 'None',
      assignedDriver: 'Amit Sharma',
      assignedVehicle: 'KA-01-HH-5678',
    },
  ];

  const filteredRequests = rideRequests.filter(request => {
    return statusFilter === 'all' || request.status.toLowerCase() === statusFilter.toLowerCase();
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };


  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Ride Request Management</h2>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Requests</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {rideRequests.filter(r => r.status === 'Pending').length}
                </p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Scheduled</p>
                <p className="text-2xl font-bold text-blue-600">
                  {rideRequests.filter(r => r.status === 'Scheduled').length}
                </p>
              </div>
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed Today</p>
                <p className="text-2xl font-bold text-green-600">
                  {rideRequests.filter(r => r.status === 'Completed').length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="scheduled">Scheduled</option>
          <option value="completed">Completed</option>
        </select>
        <Button variant="outline">Filter by Client</Button>
        
        <Button variant="outline">Today's Requests</Button>
      </div>

      {/* Ride Requests List */}
      <div className="space-y-4">
        {filteredRequests.map((request) => (
          <Card key={request.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Request #{request.id}</h3>
                    <p className="text-sm text-gray-600">{request.organization} • {request.timestamp}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                    {request.status}
                  </span>
                </div>
              </div>

              {/* Rider and Trip Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                {/* Rider Info */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Rider Information</h4>
                  <p className="text-sm text-gray-700"><strong>Name:</strong> {request.rider.name}</p>
                  <p className="text-sm text-gray-700"><strong>Phone:</strong> {request.rider.phone}</p>
                  <p className="text-sm text-gray-700"><strong>Employee ID:</strong> {request.rider.employee_id}</p>
                  <p className="text-sm text-gray-700"><strong>Department:</strong> {request.rider.department}</p>
                </div>

                {/* Trip Details */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Trip Details</h4>
                  <p className="text-sm text-blue-800"><strong>Trip Type:</strong> {request.tripType}</p>
                  <p className="text-sm text-blue-800"><strong>Distance:</strong> {request.estimatedDistance}</p>
                  <p className="text-sm text-blue-800"><strong>Duration:</strong> {request.estimatedDuration}</p>
                  <p className="text-sm text-blue-800"><strong>Date & Time:</strong> {request.pickup.time}</p>
                  <p className="text-sm text-blue-800"><strong>Reason:</strong> {request.reasonForRequest}</p>
                  <div className="mt-2">
                    <p className="text-sm text-blue-800"><strong>Route:</strong></p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-blue-700">From: {request.pickup.address}</span>
                      <Map className="h-3 w-3 text-blue-600" />
                      <span className="text-xs text-blue-700">To: {request.dropoff.address}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              {request.additionalNotes !== 'None' && (
                <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium text-yellow-900 mb-2">Additional Notes</h4>
                  <p className="text-sm text-yellow-800">{request.additionalNotes}</p>
                </div>
              )}

              {/* Assignment Status */}
              {request.assignedDriver && request.assignedVehicle && (
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium text-green-900 mb-2">Assignment</h4>
                  <p className="text-sm text-green-800"><strong>Driver:</strong> {request.assignedDriver}</p>
                  <p className="text-sm text-green-800"><strong>Vehicle:</strong> {request.assignedVehicle}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2">
                {request.status === 'Pending' && (
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Users className="mr-1 h-4 w-4" />
                    Assign Driver & Vehicle
                  </Button>
                )}
                <Button variant="outline" size="sm">
                  <Map className="mr-1 h-4 w-4" />
                  View Route
                </Button>
                {request.status === 'Pending' && (
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                    Cancel Request
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
