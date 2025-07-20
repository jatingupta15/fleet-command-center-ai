import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { ArrowLeft, Edit, UserX, Building, Users, MapPin, Phone, Mail, CreditCard } from 'lucide-react';

export const ClientDetailView = () => {
  const { clientId } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [deactivateReason, setDeactivateReason] = useState('');
  const [editData, setEditData] = useState({
    supportManagerEmail: 'rahul.verma@company.com',
    supportManagerPhone: '+91 98765 43210',
    managerName: 'Rahul Verma'
  });

  // Mock client data - in real app this would come from API
  const client = {
    id: clientId,
    name: 'Infosys Ltd',
    totalEmployees: 320000,
    officeLocation: 'Electronic City, Bangalore',
    supportManager: 'Rahul Verma',
    supportManagerEmail: 'rahul.verma@company.com',
    supportManagerPhone: '+91 98765 43210',
    billingCycle: 'Monthly',
    ridesThisMonth: 1250,
    serviceStatus: 'Active',
    fleetsEngaged: 125,
    activeFleets: 42,
    contractStartDate: '2023-01-15',
    paymentTerms: '30 Days',
    billingAddress: 'Electronic City Phase 1, Bangalore - 560100',
    emergencyContact: '+91 80 2852 0261',
    accountManager: 'Priya Sharma'
  };

  const handleSave = () => {
    console.log('Saving client data:', editData);
    setIsEditing(false);
  };

  const handleDeactivate = () => {
    console.log(`Deactivating client ${client.name} with reason: ${deactivateReason}`);
    setDeactivateReason('');
    navigate('/clients');
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate('/clients')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Clients
            </Button>
            <div>
              <h1 className="text-3xl font-bold">{client.name}</h1>
              <p className="text-muted-foreground">Client Details & Management</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Dialog open={isEditing} onOpenChange={setIsEditing}>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Client
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Edit Client Details</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div>
                    <Label htmlFor="managerName">Manager Name</Label>
                    <Input
                      id="managerName"
                      value={editData.managerName}
                      onChange={(e) => setEditData({ ...editData, managerName: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="managerEmail">Manager Email</Label>
                    <Input
                      id="managerEmail"
                      value={editData.supportManagerEmail}
                      onChange={(e) => setEditData({ ...editData, supportManagerEmail: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="managerPhone">Manager Phone</Label>
                    <Input
                      id="managerPhone"
                      value={editData.supportManagerPhone}
                      onChange={(e) => setEditData({ ...editData, supportManagerPhone: e.target.value })}
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                  <Button onClick={handleSave}>Save Changes</Button>
                </div>
              </DialogContent>
            </Dialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">
                  <UserX className="h-4 w-4 mr-2" />
                  Deactivate
                </Button>
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
                    onClick={handleDeactivate}
                    disabled={!deactivateReason.trim()}
                    className="bg-destructive hover:bg-destructive/90"
                  >
                    Deactivate
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex items-center space-x-2">
          <Badge variant={client.serviceStatus === 'Active' ? 'default' : 'secondary'} className="px-3 py-1">
            {client.serviceStatus}
          </Badge>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="h-5 w-5 mr-2" />
                Company Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Client Name</Label>
                <p className="text-lg font-semibold">{client.name}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Total Employees</Label>
                <p className="text-lg">{client.totalEmployees.toLocaleString()}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Office Location</Label>
                <p className="text-lg flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {client.officeLocation}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Contact Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Support Manager</Label>
                <p className="text-lg font-semibold">{client.supportManager}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Manager Email</Label>
                <p className="text-lg flex items-center">
                  <Mail className="h-4 w-4 mr-1" />
                  {client.supportManagerEmail}
                </p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Manager Phone</Label>
                <p className="text-lg flex items-center">
                  <Phone className="h-4 w-4 mr-1" />
                  {client.supportManagerPhone}
                </p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Emergency Contact</Label>
                <p className="text-lg">{client.emergencyContact}</p>
              </div>
            </CardContent>
          </Card>

          {/* Fleet & Service Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Service Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Rides This Month</Label>
                <p className="text-2xl font-bold text-blue-600">{client.ridesThisMonth.toLocaleString()}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Fleets Engaged</Label>
                <p className="text-lg">{client.fleetsEngaged}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Active Fleets (Ongoing Rides)</Label>
                <p className="text-lg font-semibold text-green-600">{client.activeFleets}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Contract Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <Label className="text-sm font-medium text-muted-foreground">Contract Start Date</Label>
                <p>{client.contractStartDate}</p>
              </div>
              <div className="flex justify-between">
                <Label className="text-sm font-medium text-muted-foreground">Payment Terms</Label>
                <p>{client.paymentTerms}</p>
              </div>
              <div className="flex justify-between">
                <Label className="text-sm font-medium text-muted-foreground">Account Manager</Label>
                <p>{client.accountManager}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Billing Address</Label>
                <p className="mt-1">{client.billingAddress}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};