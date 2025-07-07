
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Users, 
  Settings, 
  Activity,
  Clock,
  FileText,
  CheckCircle
} from 'lucide-react';

export const ClientManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const clients = [
    {
      id: 1,
      name: 'Infosys Ltd',
      fleetSize: 125,
      activeUsers: 2400,
      billingCycle: 'Monthly',
      status: 'Active',
      ridesThisMonth: 1250,
      revenue: '₹3,45,000',
      supportManager: 'Rahul Verma',
    },
    {
      id: 2,
      name: 'Accenture',
      fleetSize: 89,
      activeUsers: 1800,
      billingCycle: 'Quarterly',
      status: 'Active',
      ridesThisMonth: 890,
      revenue: '₹2,34,000',
      supportManager: 'Priya Sharma',
    },
    {
      id: 3,
      name: 'TCS',
      fleetSize: 156,
      activeUsers: 3200,
      billingCycle: 'Monthly',
      status: 'Active',
      ridesThisMonth: 1450,
      revenue: '₹4,12,000',
      supportManager: 'Amit Singh',
    },
    {
      id: 4,
      name: 'Wipro',
      fleetSize: 67,
      activeUsers: 1200,
      billingCycle: 'Monthly',
      status: 'Pending',
      ridesThisMonth: 580,
      revenue: '₹1,65,000',
      supportManager: 'Neha Gupta',
    },
  ];

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Client Management</h2>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Users className="mr-2 h-4 w-4" />
          Add New Client
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Clients</p>
                <p className="text-2xl font-bold text-gray-900">{clients.length}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Users</p>
                <p className="text-2xl font-bold text-gray-900">8,600</p>
              </div>
              <Activity className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Fleet Size</p>
                <p className="text-2xl font-bold text-gray-900">437</p>
              </div>
              <Settings className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                <p className="text-2xl font-bold text-gray-900">₹11.56L</p>
              </div>
              <FileText className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-4">
        <Input
          placeholder="Search clients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button variant="outline">Filter by Status</Button>
        <Button variant="outline">Filter by Billing</Button>
      </div>

      {/* Client List */}
      <div className="grid grid-cols-1 gap-4">
        {filteredClients.map((client) => (
          <Card key={client.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{client.name}</h3>
                    <p className="text-sm text-gray-600">Support Manager: {client.supportManager}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    client.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {client.status}
                  </span>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-2 md:grid-cols-6 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Fleet Size</p>
                  <p className="text-lg font-semibold text-gray-900">{client.fleetSize}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Users</p>
                  <p className="text-lg font-semibold text-gray-900">{client.activeUsers.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Billing Cycle</p>
                  <p className="text-lg font-semibold text-gray-900">{client.billingCycle}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Rides This Month</p>
                  <p className="text-lg font-semibold text-gray-900">{client.ridesThisMonth.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Revenue</p>
                  <p className="text-lg font-semibold text-green-600">{client.revenue}</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-1 h-4 w-4" />
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
