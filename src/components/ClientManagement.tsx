
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { AddClientDialog } from '@/components/AddClientDialog';
import { 
  Users, 
  Settings, 
  Activity,
  FileText,
  Eye,
  MoreHorizontal,
  Edit,
  UserX
} from 'lucide-react';

export const ClientManagement = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [deactivateReason, setDeactivateReason] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [billingFilter, setBillingFilter] = useState('all');
  const [showAddDialog, setShowAddDialog] = useState(false);

  const clients = [
    {
      id: 1,
      name: 'Infosys Ltd',
      totalEmployees: 320000,
      officeLocation: 'Electronic City, Bangalore',
      activeUsers: 2400,
      billingCycle: 'Monthly',
      status: 'Active',
      ridesThisMonth: 1250,
      supportManager: 'Rahul Verma',
      supportManagerEmail: 'rahul.verma@company.com',
      supportManagerPhone: '+91 98765 43210',
      fleetsEngaged: 42,
      activeFleets: 12,
      nextBillingDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'Accenture',
      totalEmployees: 140000,
      officeLocation: 'Cyber City, Gurgaon',
      activeUsers: 1800,
      billingCycle: 'Quarterly',
      status: 'Active',
      ridesThisMonth: 890,
      supportManager: 'Priya Sharma',
      supportManagerEmail: 'priya.sharma@company.com',
      supportManagerPhone: '+91 98765 43211',
      fleetsEngaged: 35,
      activeFleets: 8,
      nextBillingDate: '2024-03-01'
    },
    {
      id: 3,
      name: 'TCS',
      totalEmployees: 450000,
      officeLocation: 'Hitech City, Hyderabad',
      activeUsers: 3200,
      billingCycle: 'Monthly',
      status: 'Active',
      ridesThisMonth: 1450,
      supportManager: 'Amit Singh',
      supportManagerEmail: 'amit.singh@company.com',
      supportManagerPhone: '+91 98765 43212',
      fleetsEngaged: 58,
      activeFleets: 15,
      nextBillingDate: '2024-01-10'
    },
    {
      id: 4,
      name: 'Wipro',
      totalEmployees: 180000,
      officeLocation: 'Sarjapur Road, Bangalore',
      activeUsers: 1200,
      billingCycle: 'Monthly',
      status: 'Pending',
      ridesThisMonth: 580,
      supportManager: 'Neha Gupta',
      supportManagerEmail: 'neha.gupta@company.com',
      supportManagerPhone: '+91 98765 43213',
      fleetsEngaged: 25,
      activeFleets: 3,
      nextBillingDate: '2024-01-08'
    },
  ];

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || client.status === statusFilter;
    const matchesBilling = billingFilter === 'all' || client.billingCycle === billingFilter;
    return matchesSearch && matchesStatus && matchesBilling;
  });

  const handleDeactivate = (client: any) => {
    console.log(`Deactivating client ${client.name} with reason: ${deactivateReason}`);
    setDeactivateReason('');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Client Management</h2>
        <Button 
          className="bg-blue-600 hover:bg-blue-700"
          onClick={() => setShowAddDialog(true)}
        >
          <Users className="mr-2 h-4 w-4" />
          Add New Client
        </Button>
      </div>

      {/* Billing Notification */}
      {clients.some(client => new Date(client.nextBillingDate) <= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)) && (
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileText className="h-5 w-5 text-orange-600 mr-2" />
              <p className="text-orange-800 font-medium">
                Billing Alert: {clients.filter(client => new Date(client.nextBillingDate) <= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)).length} client(s) have upcoming billing dates within 7 days.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={() => navigate('/billing-preview')}>
                View Preview
              </Button>
              <Button variant="ghost" size="sm" onClick={() => {}}>
                ×
              </Button>
            </div>
          </div>
        </div>
      )}

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
                <p className="text-sm font-medium text-gray-600">Active Routing</p>
                <p className="text-2xl font-bold text-gray-900">{clients.filter(c => c.status === 'Active').length}</p>
              </div>
              <Activity className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Fleet Engaged</p>
                <p className="text-2xl font-bold text-gray-900">142/200</p>
              </div>
              <Settings className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Rides</p>
                <p className="text-2xl font-bold text-gray-900">4,170</p>
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
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 border border-input bg-background rounded-md text-sm"
        >
          <option value="all">All Status</option>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="Inactive">Inactive</option>
        </select>
        <select
          value={billingFilter}
          onChange={(e) => setBillingFilter(e.target.value)}
          className="px-3 py-2 border border-input bg-background rounded-md text-sm"
        >
          <option value="all">All Billing</option>
          <option value="Monthly">Monthly</option>
          <option value="Quarterly">Quarterly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>

      {/* Client Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client Name</TableHead>
                <TableHead>Total Employees</TableHead>
                <TableHead>Office Location</TableHead>
                <TableHead>Support Manager</TableHead>
                <TableHead>Active Users</TableHead>
                <TableHead>Rides This Month</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell className="font-medium">{client.name}</TableCell>
                  <TableCell>{client.totalEmployees.toLocaleString()}</TableCell>
                  <TableCell>{client.officeLocation}</TableCell>
                  <TableCell>{client.supportManager}</TableCell>
                  <TableCell>{client.activeUsers.toLocaleString()}</TableCell>
                  <TableCell>{client.ridesThisMonth.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant={client.status === 'Active' ? 'default' : 'secondary'}>
                      {client.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => navigate(`/client/${client.id}`)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                <UserX className="mr-2 h-4 w-4" />
                                Deactivate
                              </DropdownMenuItem>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Deactivate Client</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to deactivate {client.name}? Please provide a reason for deactivation.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <Textarea
                                placeholder="Reason for deactivation..."
                                value={deactivateReason}
                                onChange={(e) => setDeactivateReason(e.target.value)}
                                className="min-h-[100px]"
                              />
                              <AlertDialogFooter>
                                <AlertDialogCancel onClick={() => setDeactivateReason('')}>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleDeactivate(client)}
                                  disabled={!deactivateReason.trim()}
                                  className="bg-destructive hover:bg-destructive/90"
                                >
                                  Deactivate
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add Client Dialog */}
      {showAddDialog && (
        <AddClientDialog 
          open={showAddDialog} 
          onOpenChange={setShowAddDialog}
        />
      )}
    </div>
  );
};
