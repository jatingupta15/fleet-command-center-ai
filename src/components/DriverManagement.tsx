import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { 
  Users, 
  Activity,
  Clock,
  CheckCircle,
  MoreHorizontal,
  Eye,
  Edit,
  UserMinus,
  Star,
  Car,
  MapPin,
  CalendarDays
} from 'lucide-react';
import { DriverDetailView } from './DriverDetailView';
import { AddDriverDialog } from './AddDriverDialog';

export const DriverManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [cityFilter, setCityFilter] = useState('all');
  const [vendorFilter, setVendorFilter] = useState('all');
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [showDriverDetail, setShowDriverDetail] = useState(false);
  const [showAddDriver, setShowAddDriver] = useState(false);
  const [deactivateReason, setDeactivateReason] = useState('');

  const drivers = [
    {
      id: 'DRV001',
      name: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      status: 'Active',
      licenseNumber: 'KA1234567890',
      licenseExpiry: '2025-06-15',
      badgeNumber: 'BDG001',
      badgeExpiry: '2024-12-31',
      dateOfBirth: '1985-03-15',
      vendorName: 'Urban Mobility',
      city: 'Bangalore',
      govIdType: 'Aadhaar',
      govIdNumber: '1234-5678-9012',
      gender: 'Male',
      backgroundCheckStatus: 'Verified',
      bgvExpiryDate: '2025-03-15',
      policeVerificationStatus: 'Verified',
      policeVerificationExpiry: '2025-01-20',
      address: 'Koramangala, Bangalore, Karnataka 560034',
      medicalVerificationStatus: 'Verified',
      medicalVerificationExpiry: '2024-08-30',
      trainingVerificationStatus: 'Completed',
      trainingVerificationExpiry: '2025-02-10',
      comments: 'Excellent performance, punctual',
      inductionDate: '2023-01-15',
      rating: 4.9,
      totalTrips: 1247,
      isAllocated: false,
      allocatedRide: null
    },
    {
      id: 'DRV002',
      name: 'Amit Sharma',
      phone: '+91 98765 43211',
      status: 'Allocated',
      licenseNumber: 'KA0987654321',
      licenseExpiry: '2024-11-20',
      badgeNumber: 'BDG002',
      badgeExpiry: '2024-10-15',
      dateOfBirth: '1988-07-22',
      vendorName: 'City Transport',
      city: 'Bangalore',
      govIdType: 'PAN',
      govIdNumber: 'ABCDE1234F',
      gender: 'Male',
      backgroundCheckStatus: 'Verified',
      bgvExpiryDate: '2024-12-30',
      policeVerificationStatus: 'Verified',
      policeVerificationExpiry: '2024-09-15',
      address: 'Whitefield, Bangalore, Karnataka 560066',
      medicalVerificationStatus: 'Verified',
      medicalVerificationExpiry: '2024-07-25',
      trainingVerificationStatus: 'Completed',
      trainingVerificationExpiry: '2024-12-05',
      comments: 'Reliable driver, good customer service',
      inductionDate: '2023-03-22',
      rating: 4.8,
      totalTrips: 892,
      isAllocated: true,
      allocatedRide: {
        rideId: 'RR002',
        pickup: 'Whitefield Tech Park',
        dropoff: 'Kempegowda Airport',
        passengerName: 'Rohit Sharma',
        scheduledTime: '16:30'
      }
    },
    {
      id: 'DRV003',
      name: 'Priya Singh',
      phone: '+91 98765 43212',
      status: 'In Training',
      licenseNumber: 'KA1357924680',
      licenseExpiry: '2025-03-10',
      badgeNumber: 'BDG003',
      badgeExpiry: '2025-01-20',
      dateOfBirth: '1990-12-05',
      vendorName: 'Metro Cabs',
      city: 'Bangalore',
      govIdType: 'Driving License',
      govIdNumber: 'KA1357924680',
      gender: 'Female',
      backgroundCheckStatus: 'Pending',
      bgvExpiryDate: '2024-12-15',
      policeVerificationStatus: 'Verified',
      policeVerificationExpiry: '2024-11-30',
      address: 'Electronic City, Bangalore, Karnataka 560100',
      medicalVerificationStatus: 'Verified',
      medicalVerificationExpiry: '2024-06-18',
      trainingVerificationStatus: 'In Progress',
      trainingVerificationExpiry: '2024-08-20',
      comments: 'New driver, completing training program',
      inductionDate: '2024-06-10',
      rating: 4.7,
      totalTrips: 54,
      isAllocated: false,
      allocatedRide: null
    },
    {
      id: 'DRV004',
      name: 'Suresh Reddy',
      phone: '+91 98765 43213',
      status: 'Active',
      licenseNumber: 'KA2468013579',
      licenseExpiry: '2025-09-30',
      badgeNumber: 'BDG004',
      badgeExpiry: '2025-05-12',
      dateOfBirth: '1982-09-18',
      vendorName: 'Urban Mobility',
      city: 'Bangalore',
      govIdType: 'Voter ID',
      govIdNumber: 'ABC1234567',
      gender: 'Male',
      backgroundCheckStatus: 'Verified',
      bgvExpiryDate: '2025-09-18',
      policeVerificationStatus: 'Verified',
      policeVerificationExpiry: '2025-04-22',
      address: 'HSR Layout, Bangalore, Karnataka 560102',
      medicalVerificationStatus: 'Verified',
      medicalVerificationExpiry: '2024-12-08',
      trainingVerificationStatus: 'Completed',
      trainingVerificationExpiry: '2025-06-15',
      comments: 'Senior driver, mentor for new drivers',
      inductionDate: '2022-11-05',
      rating: 4.6,
      totalTrips: 1156,
      isAllocated: false,
      allocatedRide: null
    },
  ];

  const filteredDrivers = drivers.filter(driver => {
    const matchesSearch = driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         driver.phone.includes(searchTerm) ||
                         driver.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         driver.licenseNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || driver.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesCity = cityFilter === 'all' || driver.city.toLowerCase() === cityFilter.toLowerCase();
    const matchesVendor = vendorFilter === 'all' || driver.vendorName.toLowerCase() === vendorFilter.toLowerCase();
    return matchesSearch && matchesStatus && matchesCity && matchesVendor;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>;
      case 'Allocated':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Allocated</Badge>;
      case 'In Training':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">In Training</Badge>;
      case 'Inactive':
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Inactive</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">{status}</Badge>;
    }
  };

  const handleViewDetail = (driver) => {
    setSelectedDriver(driver);
    setShowDriverDetail(true);
  };

  const handleDeactivate = (driverId: string, reason: string) => {
    console.log(`Deactivating driver ${driverId} with reason: ${reason}`);
    setDeactivateReason('');
  };

  const cities = [...new Set(drivers.map(d => d.city))];
  const vendors = [...new Set(drivers.map(d => d.vendorName))];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Driver Management</h2>
        <Button onClick={() => setShowAddDriver(true)}>
          <Users className="mr-2 h-4 w-4" />
          Add New Driver
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Drivers</p>
                <p className="text-2xl font-bold">{drivers.length}</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active</p>
                <p className="text-2xl font-bold text-green-600">
                  {drivers.filter(d => d.status === 'Active').length}
                </p>
              </div>
              <Activity className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Allocated</p>
                <p className="text-2xl font-bold text-blue-600">
                  {drivers.filter(d => d.status === 'Allocated').length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">In Training</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {drivers.filter(d => d.status === 'In Training').length}
                </p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <Label htmlFor="search">Search Drivers</Label>
              <Input
                id="search"
                placeholder="Name, ID, Phone, License..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="status">Status</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="allocated">Allocated</SelectItem>
                  <SelectItem value="in training">In Training</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="city">City</Label>
              <Select value={cityFilter} onValueChange={setCityFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Cities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cities</SelectItem>
                  {cities.map(city => (
                    <SelectItem key={city} value={city.toLowerCase()}>{city}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="vendor">Vendor</Label>
              <Select value={vendorFilter} onValueChange={setVendorFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Vendors" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Vendors</SelectItem>
                  {vendors.map(vendor => (
                    <SelectItem key={vendor} value={vendor.toLowerCase()}>{vendor}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setStatusFilter('all');
                  setCityFilter('all');
                  setVendorFilter('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Driver Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Driver ID</TableHead>
                <TableHead>Driver Name</TableHead>
                <TableHead>Mobile</TableHead>
                <TableHead>License No.</TableHead>
                <TableHead>License Expiry</TableHead>
                <TableHead>Badge No.</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Total Trips</TableHead>
                <TableHead>City</TableHead>
                <TableHead>Vendor</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDrivers.map((driver) => (
                <TableRow key={driver.id}>
                  <TableCell className="font-medium">{driver.id}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{driver.name}</div>
                      {driver.isAllocated && driver.allocatedRide && (
                        <div className="text-xs text-muted-foreground">
                          <MapPin className="inline w-3 h-3 mr-1" />
                          {driver.allocatedRide.pickup} → {driver.allocatedRide.dropoff}
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{driver.phone}</TableCell>
                  <TableCell>{driver.licenseNumber}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <CalendarDays className="w-4 h-4 mr-1 text-muted-foreground" />
                      {driver.licenseExpiry}
                    </div>
                  </TableCell>
                  <TableCell>{driver.badgeNumber}</TableCell>
                  <TableCell>{getStatusBadge(driver.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                      {driver.rating}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Car className="w-4 h-4 mr-1 text-muted-foreground" />
                      {driver.totalTrips}
                    </div>
                  </TableCell>
                  <TableCell>{driver.city}</TableCell>
                  <TableCell>{driver.vendorName}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleViewDetail(driver)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem onClick={() => handleViewDetail(driver)}>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                <UserMinus className="w-4 h-4 mr-2" />
                                Deactivate
                              </DropdownMenuItem>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Deactivate Driver</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Please provide a reason for deactivating {driver.name}.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <Textarea
                                placeholder="Enter reason for deactivation..."
                                value={deactivateReason}
                                onChange={(e) => setDeactivateReason(e.target.value)}
                              />
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction 
                                  onClick={() => handleDeactivate(driver.id, deactivateReason)}
                                  disabled={!deactivateReason.trim()}
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

      {/* Driver Detail Dialog */}
      {selectedDriver && (
        <DriverDetailView
          driver={selectedDriver}
          open={showDriverDetail}
          onOpenChange={setShowDriverDetail}
        />
      )}

      {/* Add Driver Dialog */}
      <AddDriverDialog
        open={showAddDriver}
        onOpenChange={setShowAddDriver}
      />
    </div>
  );
};