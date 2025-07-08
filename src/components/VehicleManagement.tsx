
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { 
  Settings, 
  Activity,
  Clock,
  CheckCircle,
  AlertTriangle,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Plus
} from 'lucide-react';

export const VehicleManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [vehicleTypeFilter, setVehicleTypeFilter] = useState('all');
  const [fuelTypeFilter, setFuelTypeFilter] = useState('all');
  const [ownershipFilter, setOwnershipFilter] = useState('all');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [editingVehicle, setEditingVehicle] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [deactivationReason, setDeactivationReason] = useState('');
  
  const editForm = useForm({
    defaultValues: {
      insuranceExpiryDate: '',
      roadTaxExpiryDate: '',
      pollutionCertificateExpiryDate: '',
      commercialPermitExpiryDate: '',
      fitnessExpiryDate: '',
      vehicleServiceExpiryDate: '',
    }
  });

  const addForm = useForm({
    defaultValues: {
      etsVehicleId: '',
      registrationNumber: '',
      manufacturingDate: '',
      inductionDate: '',
      registrationDate: '',
      insuranceExpiryDate: '',
      roadTaxExpiryDate: '',
      pollutionCertificateExpiryDate: '',
      commercialPermitExpiryDate: '',
      fitnessExpiryDate: '',
      vehicleServiceExpiryDate: '',
      ehs: 'Compliant',
      vehicleType: '',
      fuelType: '',
      vehicleOwnership: '',
      permitType: '',
    }
  });

  const vehicles = [
    {
      id: 1,
      etsVehicleId: 'ETS001',
      registrationNumber: 'KA-01-HH-1234',
      manufacturingDate: '2020-03-15',
      inductionDate: '2020-04-10',
      registrationDate: '2020-04-12',
      insuranceExpiryDate: '2024-12-31',
      roadTaxExpiryDate: '2024-11-30',
      pollutionCertificateExpiryDate: '2024-10-15',
      commercialPermitExpiryDate: '2024-09-20',
      fitnessExpiryDate: '2025-03-15',
      vehicleServiceExpiryDate: '2024-07-30',
      ehs: 'Compliant',
      vehicleType: 'Sedan',
      fuelType: 'Petrol',
      vehicleOwnership: 'Company Owned',
      permitType: 'Commercial',
      status: 'Available',
    },
    {
      id: 2,
      etsVehicleId: 'ETS002',
      registrationNumber: 'KA-01-HH-5678',
      manufacturingDate: '2019-08-22',
      inductionDate: '2019-09-15',
      registrationDate: '2019-09-18',
      insuranceExpiryDate: '2024-08-31',
      roadTaxExpiryDate: '2024-12-15',
      pollutionCertificateExpiryDate: '2024-11-10',
      commercialPermitExpiryDate: '2024-10-05',
      fitnessExpiryDate: '2024-08-22',
      vehicleServiceExpiryDate: '2024-08-15',
      ehs: 'Compliant',
      vehicleType: 'SUV',
      fuelType: 'Diesel',
      vehicleOwnership: 'Vendor Owned',
      permitType: 'Commercial',
      status: 'In Use',
    },
    {
      id: 3,
      etsVehicleId: 'ETS003',
      registrationNumber: 'KA-01-HH-9012',
      manufacturingDate: '2021-01-10',
      inductionDate: '2021-02-05',
      registrationDate: '2021-02-08',
      insuranceExpiryDate: '2025-01-31',
      roadTaxExpiryDate: '2025-01-10',
      pollutionCertificateExpiryDate: '2024-12-25',
      commercialPermitExpiryDate: '2024-11-15',
      fitnessExpiryDate: '2026-01-10',
      vehicleServiceExpiryDate: '2024-08-10',
      ehs: 'Non-Compliant',
      vehicleType: 'Premium',
      fuelType: 'CNG',
      vehicleOwnership: 'Company Owned',
      permitType: 'Private',
      status: 'Maintenance',
    },
    {
      id: 4,
      etsVehicleId: 'ETS004',
      registrationNumber: 'KA-01-HH-3456',
      manufacturingDate: '2018-12-05',
      inductionDate: '2019-01-12',
      registrationDate: '2019-01-15',
      insuranceExpiryDate: '2024-12-05',
      roadTaxExpiryDate: '2024-12-31',
      pollutionCertificateExpiryDate: '2024-09-30',
      commercialPermitExpiryDate: '2024-08-25',
      fitnessExpiryDate: '2024-12-05',
      vehicleServiceExpiryDate: '2024-09-10',
      ehs: 'Compliant',
      vehicleType: 'Sedan',
      fuelType: 'Petrol',
      vehicleOwnership: 'Vendor Owned',
      permitType: 'Commercial',
      status: 'Available',
    },
  ];

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.etsVehicleId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.vehicleType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || vehicle.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesVehicleType = vehicleTypeFilter === 'all' || vehicle.vehicleType.toLowerCase() === vehicleTypeFilter.toLowerCase();
    const matchesFuelType = fuelTypeFilter === 'all' || vehicle.fuelType.toLowerCase() === fuelTypeFilter.toLowerCase();
    const matchesOwnership = ownershipFilter === 'all' || vehicle.vehicleOwnership.toLowerCase() === ownershipFilter.toLowerCase();
    return matchesSearch && matchesStatus && matchesVehicleType && matchesFuelType && matchesOwnership;
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

  const handleViewDetails = (vehicle: any) => {
    setSelectedVehicle(vehicle);
  };

  const handleEdit = (vehicle: any) => {
    setEditingVehicle(vehicle);
    editForm.reset({
      insuranceExpiryDate: vehicle.insuranceExpiryDate,
      roadTaxExpiryDate: vehicle.roadTaxExpiryDate,
      pollutionCertificateExpiryDate: vehicle.pollutionCertificateExpiryDate,
      commercialPermitExpiryDate: vehicle.commercialPermitExpiryDate,
      fitnessExpiryDate: vehicle.fitnessExpiryDate,
      vehicleServiceExpiryDate: vehicle.vehicleServiceExpiryDate,
    });
    setIsEditDialogOpen(true);
  };

  const handleEditSubmit = (data: any) => {
    console.log('Updating vehicle:', editingVehicle?.id, data);
    // Update vehicle data here
    setIsEditDialogOpen(false);
    setEditingVehicle(null);
  };

  const handleAddVehicle = () => {
    setIsAddDialogOpen(true);
  };

  const handleAddSubmit = (data: any) => {
    console.log('Adding new vehicle:', data);
    // Add vehicle to list here
    setIsAddDialogOpen(false);
    addForm.reset();
  };

  const handleDeactivate = (vehicleId: number, reason: string) => {
    console.log('Deactivate vehicle:', vehicleId, 'Reason:', reason);
    // Add deactivate functionality here
    setDeactivationReason('');
  };

  const handleDelete = (vehicleId: number) => {
    console.log('Delete vehicle:', vehicleId);
    // Add delete functionality here
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Vehicle Management</h2>
        <Button 
          className="bg-blue-600 hover:bg-blue-700"
          onClick={handleAddVehicle}
        >
          <Plus className="mr-2 h-4 w-4" />
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
      <div className="flex flex-wrap items-center gap-4">
        <Input
          placeholder="Search by ETS ID, Registration Number, or Vehicle Type..."
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
        <select
          value={vehicleTypeFilter}
          onChange={(e) => setVehicleTypeFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="all">All Vehicle Types</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="premium">Premium</option>
        </select>
        <select
          value={fuelTypeFilter}
          onChange={(e) => setFuelTypeFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="all">All Fuel Types</option>
          <option value="petrol">Petrol</option>
          <option value="diesel">Diesel</option>
          <option value="cng">CNG</option>
        </select>
        <select
          value={ownershipFilter}
          onChange={(e) => setOwnershipFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="all">All Ownership</option>
          <option value="company owned">Company Owned</option>
          <option value="vendor owned">Vendor Owned</option>
        </select>
      </div>

      {/* Vehicle Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ETS Vehicle ID</TableHead>
                <TableHead>Registration Number</TableHead>
                <TableHead>Vehicle Type</TableHead>
                <TableHead>Fuel Type</TableHead>
                <TableHead>Ownership</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>EHS</TableHead>
                <TableHead>Insurance Expiry</TableHead>
                <TableHead>Service Expiry</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredVehicles.map((vehicle) => (
                <TableRow key={vehicle.id}>
                  <TableCell className="font-medium">{vehicle.etsVehicleId}</TableCell>
                  <TableCell>{vehicle.registrationNumber}</TableCell>
                  <TableCell>{vehicle.vehicleType}</TableCell>
                  <TableCell>{vehicle.fuelType}</TableCell>
                  <TableCell>{vehicle.vehicleOwnership}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 w-fit ${getStatusColor(vehicle.status)}`}>
                      {getStatusIcon(vehicle.status)}
                      <span>{vehicle.status}</span>
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${vehicle.ehs === 'Compliant' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {vehicle.ehs}
                    </span>
                  </TableCell>
                  <TableCell>{vehicle.insuranceExpiryDate}</TableCell>
                  <TableCell>{vehicle.vehicleServiceExpiryDate}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewDetails(vehicle)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <DialogHeader>
                            <DialogTitle>Vehicle Details - {selectedVehicle?.etsVehicleId}</DialogTitle>
                          </DialogHeader>
                           {selectedVehicle && (
                             <>
                               <div className="grid grid-cols-2 gap-4">
                                 <div>
                                   <h4 className="font-semibold mb-2">Basic Information</h4>
                                   <div className="space-y-2 text-sm">
                                     <div><span className="font-medium">ETS Vehicle ID:</span> {selectedVehicle.etsVehicleId}</div>
                                     <div><span className="font-medium">Registration Number:</span> {selectedVehicle.registrationNumber}</div>
                                     <div><span className="font-medium">Vehicle Type:</span> {selectedVehicle.vehicleType}</div>
                                     <div><span className="font-medium">Fuel Type:</span> {selectedVehicle.fuelType}</div>
                                     <div><span className="font-medium">Ownership:</span> {selectedVehicle.vehicleOwnership}</div>
                                     <div><span className="font-medium">Permit Type:</span> {selectedVehicle.permitType}</div>
                                   </div>
                                 </div>
                                 <div>
                                   <h4 className="font-semibold mb-2">Important Dates</h4>
                                   <div className="space-y-2 text-sm">
                                     <div><span className="font-medium">Manufacturing Date:</span> {selectedVehicle.manufacturingDate}</div>
                                     <div><span className="font-medium">Induction Date:</span> {selectedVehicle.inductionDate}</div>
                                     <div><span className="font-medium">Registration Date:</span> {selectedVehicle.registrationDate}</div>
                                     <div><span className="font-medium">Insurance Expiry:</span> {selectedVehicle.insuranceExpiryDate}</div>
                                     <div><span className="font-medium">Road Tax Expiry:</span> {selectedVehicle.roadTaxExpiryDate}</div>
                                     <div><span className="font-medium">Pollution Certificate Expiry:</span> {selectedVehicle.pollutionCertificateExpiryDate}</div>
                                     <div><span className="font-medium">Commercial Permit Expiry:</span> {selectedVehicle.commercialPermitExpiryDate}</div>
                                     <div><span className="font-medium">Fitness Expiry:</span> {selectedVehicle.fitnessExpiryDate}</div>
                                     <div><span className="font-medium">Service Expiry:</span> {selectedVehicle.vehicleServiceExpiryDate}</div>
                                   </div>
                                 </div>
                               </div>
                               <div className="flex justify-end space-x-2 mt-4">
                                 <Button 
                                   variant="outline" 
                                   onClick={() => handleEdit(selectedVehicle)}
                                 >
                                   <Edit className="mr-2 h-4 w-4" />
                                   Edit
                                 </Button>
                                  <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                      <Button variant="destructive">
                                        Deactivate
                                      </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                      <AlertDialogHeader>
                                        <AlertDialogTitle>Deactivate Vehicle</AlertDialogTitle>
                                        <AlertDialogDescription>
                                          Are you sure you want to deactivate vehicle {selectedVehicle?.etsVehicleId}? Please provide a reason for deactivation.
                                        </AlertDialogDescription>
                                      </AlertDialogHeader>
                                      <div className="my-4">
                                        <Label htmlFor="deactivation-reason">Reason for Deactivation</Label>
                                        <Input
                                          id="deactivation-reason"
                                          value={deactivationReason}
                                          onChange={(e) => setDeactivationReason(e.target.value)}
                                          placeholder="Enter reason for deactivation..."
                                        />
                                      </div>
                                      <AlertDialogFooter>
                                        <AlertDialogCancel onClick={() => setDeactivationReason('')}>Cancel</AlertDialogCancel>
                                        <AlertDialogAction 
                                          onClick={() => handleDeactivate(selectedVehicle.id, deactivationReason)}
                                          disabled={!deactivationReason.trim()}
                                        >
                                          Confirm Deactivate
                                        </AlertDialogAction>
                                      </AlertDialogFooter>
                                    </AlertDialogContent>
                                  </AlertDialog>
                               </div>
                             </>
                           )}
                        </DialogContent>
                      </Dialog>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                           <DropdownMenuItem onClick={() => handleEdit(vehicle)}>
                             <Edit className="mr-2 h-4 w-4" />
                             Edit
                           </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => handleDelete(vehicle.id)}
                            className="text-red-600"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
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

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Vehicle - {editingVehicle?.etsVehicleId}</DialogTitle>
          </DialogHeader>
          <Form {...editForm}>
            <form onSubmit={editForm.handleSubmit(handleEditSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={editForm.control}
                  name="insuranceExpiryDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Insurance Expiry Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={editForm.control}
                  name="roadTaxExpiryDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Road Tax Expiry Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={editForm.control}
                  name="pollutionCertificateExpiryDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pollution Certificate Expiry Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={editForm.control}
                  name="commercialPermitExpiryDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Commercial Permit Expiry Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={editForm.control}
                  name="fitnessExpiryDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fitness Expiry Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={editForm.control}
                  name="vehicleServiceExpiryDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Expiry Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  Update Vehicle
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Add New Vehicle Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add New Vehicle</DialogTitle>
          </DialogHeader>
          <Form {...addForm}>
            <form onSubmit={addForm.handleSubmit(handleAddSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={addForm.control}
                  name="etsVehicleId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ETS Vehicle ID</FormLabel>
                      <FormControl>
                        <Input placeholder="ETS001" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={addForm.control}
                  name="registrationNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Registration Number</FormLabel>
                      <FormControl>
                        <Input placeholder="KA-01-HH-1234" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={addForm.control}
                  name="manufacturingDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Manufacturing Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={addForm.control}
                  name="inductionDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Induction Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={addForm.control}
                  name="registrationDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Registration Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={addForm.control}
                  name="insuranceExpiryDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Insurance Expiry Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={addForm.control}
                  name="roadTaxExpiryDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Road Tax Expiry Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={addForm.control}
                  name="pollutionCertificateExpiryDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pollution Certificate Expiry Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={addForm.control}
                  name="commercialPermitExpiryDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Commercial Permit Expiry Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={addForm.control}
                  name="fitnessExpiryDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fitness Expiry Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={addForm.control}
                  name="vehicleServiceExpiryDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Expiry Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={addForm.control}
                  name="ehs"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>EHS</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select EHS status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Compliant">Compliant</SelectItem>
                          <SelectItem value="Non-Compliant">Non-Compliant</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={addForm.control}
                  name="vehicleType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vehicle Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select vehicle type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Sedan">Sedan</SelectItem>
                          <SelectItem value="SUV">SUV</SelectItem>
                          <SelectItem value="Premium">Premium</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={addForm.control}
                  name="fuelType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fuel Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select fuel type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Petrol">Petrol</SelectItem>
                          <SelectItem value="Diesel">Diesel</SelectItem>
                          <SelectItem value="CNG">CNG</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={addForm.control}
                  name="vehicleOwnership"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vehicle Ownership</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select ownership type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Company Owned">Company Owned</SelectItem>
                          <SelectItem value="Vendor Owned">Vendor Owned</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={addForm.control}
                  name="permitType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Permit Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select permit type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Commercial">Commercial</SelectItem>
                          <SelectItem value="Private">Private</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  Add Vehicle
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
