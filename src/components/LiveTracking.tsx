
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Map, 
  Activity,
  Clock,
  CheckCircle,
  Settings,
  Users
} from 'lucide-react';

export const LiveTracking = () => {
  const [selectedTrip, setSelectedTrip] = useState(null);

  const liveTrips = [
    {
      id: 'T001',
      driver: 'Rajesh Kumar',
      vehicle: 'KA-01-HH-1234',
      client: 'Infosys Ltd',
      rider: 'Priya Sharma',
      pickup: 'Electronic City',
      dropoff: 'Koramangala',
      status: 'In Progress',
      eta: '15 mins',
      distance: '12.5 km',
      speed: '35 km/h',
      startTime: '09:30 AM',
    },
    {
      id: 'T002',
      driver: 'Amit Sharma',
      vehicle: 'KA-01-HH-5678',
      client: 'Accenture',
      rider: 'Rohit Gupta',
      pickup: 'Whitefield',
      dropoff: 'MG Road',
      status: 'Pickup Complete',
      eta: '25 mins',
      distance: '18.2 km',
      speed: '42 km/h',
      startTime: '09:15 AM',
    },
    {
      id: 'T003',
      driver: 'Suresh Reddy',
      vehicle: 'KA-01-HH-3456',
      client: 'TCS',
      rider: 'Anita Patel',
      pickup: 'HSR Layout',
      dropoff: 'Bannerghatta Road',
      status: 'En Route to Pickup',
      eta: '8 mins',
      distance: '5.8 km',
      speed: '28 km/h',
      startTime: '09:45 AM',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Pickup Complete':
        return 'bg-green-100 text-green-800';
      case 'En Route to Pickup':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Live Fleet Tracking</h2>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Map Settings
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Activity className="mr-2 h-4 w-4" />
            Refresh
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Area */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Map className="mr-2 h-5 w-5" />
                Live Fleet Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg flex items-center justify-center relative">
                {/* Mock Map Interface */}
                <div className="absolute inset-4 bg-white rounded-lg shadow-inner p-4">
                  <div className="text-center">
                    <Map className="mx-auto h-16 w-16 text-blue-400 mb-4" />
                    <p className="text-gray-600 mb-2">Real-time Fleet Tracking</p>
                    <p className="text-sm text-gray-500">34 vehicles active • 12 in ride</p>
                  </div>
                  
                  {/* Mock Vehicle Pins */}
                  <div className="absolute top-8 left-12 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-16 right-20 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-20 left-16 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-12 right-12 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                {/* Map Controls */}
                <div className="absolute top-4 right-4 space-y-2">
                  <Button size="sm" variant="outline">+</Button>
                  <Button size="sm" variant="outline">-</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Live Trips Sidebar */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Activity className="mr-2 h-5 w-5" />
                  Live Trips
                </span>
                <span className="text-sm font-normal text-gray-600">
                  {liveTrips.length} active
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {liveTrips.map((trip) => (
                  <div 
                    key={trip.id} 
                    className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => setSelectedTrip(trip)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">{trip.id}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(trip.status)}`}>
                        {trip.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{trip.driver}</p>
                    <p className="text-xs text-gray-500">{trip.pickup} → {trip.dropoff}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-500">ETA: {trip.eta}</span>
                      <span className="text-xs text-gray-500">{trip.speed}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="text-sm">Fleet Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Active Vehicles</span>
                  <span className="font-medium">34</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">In Ride</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Available</span>
                  <span className="font-medium">22</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Avg Speed</span>
                  <span className="font-medium">35 km/h</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Trip Details */}
      {selectedTrip && (
        <Card>
          <CardHeader>
            <CardTitle>Trip Details - {selectedTrip.id}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-600">Driver</p>
                <p className="text-lg font-semibold text-gray-900">{selectedTrip.driver}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Vehicle</p>
                <p className="text-lg font-semibold text-gray-900">{selectedTrip.vehicle}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Client</p>
                <p className="text-lg font-semibold text-gray-900">{selectedTrip.client}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Rider</p>
                <p className="text-lg font-semibold text-gray-900">{selectedTrip.rider}</p>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <Button variant="outline" size="sm">
                <Users className="mr-1 h-4 w-4" />
                Contact Driver
              </Button>
              <Button variant="outline" size="sm">
                <Users className="mr-1 h-4 w-4" />
                Contact Rider
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="mr-1 h-4 w-4" />
                Trip Details
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
