
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Activity, 
  Users, 
  Settings, 
  Map,
  Clock,
  CheckCircle,
  AlertTriangle,
  TrendingUp
} from 'lucide-react';

export const DashboardOverview = () => {
  const stats = [
    { title: 'Total Trips Today', value: '147', icon: Activity, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Active Vehicles', value: '34', icon: Settings, color: 'text-green-600', bg: 'bg-green-50' },
    { title: 'Idle Vehicles', value: '12', icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { title: 'Pending Requests', value: '8', icon: CheckCircle, color: 'text-orange-600', bg: 'bg-orange-50' },
    { title: 'SOS Alerts', value: '2', icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-50' },
    { title: 'Driver Alerts', value: '5', icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const topDrivers = [
    { name: 'Rajesh Kumar', trips: 12, rating: 4.9 },
    { name: 'Amit Sharma', trips: 11, rating: 4.8 },
    { name: 'Priya Singh', trips: 10, rating: 4.7 },
  ];

  const topClients = [
    { name: 'Infosys Ltd', rides: 45, revenue: '₹12,350' },
    { name: 'Accenture', rides: 38, revenue: '₹9,870' },
    { name: 'TCS', rides: 32, revenue: '₹8,640' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Operations Overview</h2>
        <div className="flex space-x-2">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Users className="mr-2 h-4 w-4" />
            Assign Driver
          </Button>
          <Button variant="outline">
            <CheckCircle className="mr-2 h-4 w-4" />
            Process Ride Request
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-2 rounded-lg ${stat.bg}`}>
                    <Icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts and Lists Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Fleet Utilization Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5" />
              Fleet Utilization Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="mx-auto h-12 w-12 text-blue-400 mb-4" />
                <p className="text-gray-600">Fleet utilization at 78% this week</p>
                <p className="text-sm text-gray-500">↑ 12% from last week</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live Map Preview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Map className="mr-2 h-5 w-5" />
              Live Fleet Map
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Map className="mx-auto h-12 w-12 text-green-400 mb-4" />
                <p className="text-gray-600">34 vehicles active</p>
                <Button variant="outline" size="sm" className="mt-2">
                  View Full Map
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Drivers */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Drivers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topDrivers.map((driver, index) => (
                <div key={driver.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-blue-600">#{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{driver.name}</p>
                      <p className="text-sm text-gray-600">{driver.trips} trips today</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">★ {driver.rating}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Most Active Clients */}
        <Card>
          <CardHeader>
            <CardTitle>Most Active Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topClients.map((client, index) => (
                <div key={client.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-green-600">#{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{client.name}</p>
                      <p className="text-sm text-gray-600">{client.rides} rides today</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{client.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
