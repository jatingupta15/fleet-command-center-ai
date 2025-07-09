
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
    { title: 'Vehicles Engaged', value: '142/200', icon: Settings, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Scheduled Routes', value: '28', icon: Map, color: 'text-green-600', bg: 'bg-green-50' },
    { title: 'Idle Vehicles', value: '58', icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { title: 'Pending Requests', value: '12', icon: CheckCircle, color: 'text-orange-600', bg: 'bg-orange-50' },
    { title: 'SOS Alerts', value: '2', icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-50' },
    { title: 'Driver Alerts', value: '7', icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
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

      {/* Fleet Utilization Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="mr-2 h-5 w-5" />
            Fleet Utilization Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">78%</div>
                <div className="text-sm text-gray-600">Current Utilization</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">+12%</div>
                <div className="text-sm text-gray-600">Week-over-Week</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">142</div>
                <div className="text-sm text-gray-600">Active Vehicles</div>
              </div>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <div className="flex justify-between items-end h-32">
                {[65, 72, 78, 75, 82, 78, 85].map((height, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className="bg-blue-500 rounded-t w-8"
                      style={{ height: `${height}%` }}
                    ></div>
                    <div className="text-xs text-gray-600 mt-1">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

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
