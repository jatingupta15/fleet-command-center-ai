
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClient, setSelectedClient] = useState<any>(null);
  const [deactivateReason, setDeactivateReason] = useState('');

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

  const handleDeactivate = (client: any) => {
    console.log(`Deactivating client ${client.name} with reason: ${deactivateReason}`);
    setDeactivateReason('');
  };

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

      {/* Client Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client Name</TableHead>
                <TableHead>Support Manager</TableHead>
                <TableHead>Fleet Size</TableHead>
                <TableHead>Active Users</TableHead>
                <TableHead>Billing Cycle</TableHead>
                <TableHead>Rides This Month</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell className="font-medium">{client.name}</TableCell>
                  <TableCell>{client.supportManager}</TableCell>
                  <TableCell>{client.fleetSize}</TableCell>
                  <TableCell>{client.activeUsers.toLocaleString()}</TableCell>
                  <TableCell>{client.billingCycle}</TableCell>
                  <TableCell>{client.ridesThisMonth.toLocaleString()}</TableCell>
                  <TableCell className="text-green-600 font-semibold">{client.revenue}</TableCell>
                  <TableCell>
                    <Badge variant={client.status === 'Active' ? 'default' : 'secondary'}>
                      {client.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm" onClick={() => setSelectedClient(client)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Client Details - {selectedClient?.name}</DialogTitle>
                          </DialogHeader>
                          {selectedClient && (
                            <div className="grid grid-cols-2 gap-4 py-4">
                              <div>
                                <p className="text-sm font-medium text-gray-600">Client Name</p>
                                <p className="text-lg">{selectedClient.name}</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-600">Support Manager</p>
                                <p className="text-lg">{selectedClient.supportManager}</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-600">Fleet Size</p>
                                <p className="text-lg">{selectedClient.fleetSize}</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-600">Active Users</p>
                                <p className="text-lg">{selectedClient.activeUsers.toLocaleString()}</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-600">Billing Cycle</p>
                                <p className="text-lg">{selectedClient.billingCycle}</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-600">Status</p>
                                <Badge variant={selectedClient.status === 'Active' ? 'default' : 'secondary'}>
                                  {selectedClient.status}
                                </Badge>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-600">Rides This Month</p>
                                <p className="text-lg">{selectedClient.ridesThisMonth.toLocaleString()}</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                                <p className="text-lg text-green-600 font-semibold">{selectedClient.revenue}</p>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>

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
                                  className="bg-red-600 hover:bg-red-700"
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
    </div>
  );
};
