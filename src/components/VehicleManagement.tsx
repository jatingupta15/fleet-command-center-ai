
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Settings, 
  Activity,
  Clock,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

export const VehicleManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

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
      vehicleType: 'Petrol',
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
      vehicleType: 'Diesel',
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
      vehicleType: 'CNG',
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
      vehicleType: 'Petrol',
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
    return matchesSearch && matchesStatus;
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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Vehicle Management</h2>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Settings className="mr-2 h-4 w-4" />
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
      <div className="flex items-center space-x-4">
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
      </div>

      {/* Vehicle List */}
      <div className="grid grid-cols-1 gap-4">
        {filteredVehicles.map((vehicle) => (
          <Card key={vehicle.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Settings className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{vehicle.etsVehicleId}</h3>
                    <p className="text-sm text-gray-600">{vehicle.registrationNumber}</p>
                    <p className="text-sm text-gray-600">{vehicle.vehicleType} • {vehicle.vehicleOwnership}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(vehicle.status)}`}>
                    {getStatusIcon(vehicle.status)}
                    <span>{vehicle.status}</span>
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${vehicle.ehs === 'Compliant' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    EHS: {vehicle.ehs}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
                <div>
                  <p className="font-medium text-gray-600">Manufacturing Date</p>
                  <p className="text-gray-900">{vehicle.manufacturingDate}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-600">Induction Date</p>
                  <p className="text-gray-900">{vehicle.inductionDate}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-600">Registration Date</p>
                  <p className="text-gray-900">{vehicle.registrationDate}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-600">Insurance Expiry</p>
                  <p className="text-gray-900">{vehicle.insuranceExpiryDate}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-600">Road Tax Expiry</p>
                  <p className="text-gray-900">{vehicle.roadTaxExpiryDate}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-600">Pollution Certificate</p>
                  <p className="text-gray-900">{vehicle.pollutionCertificateExpiryDate}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-600">Commercial Permit</p>
                  <p className="text-gray-900">{vehicle.commercialPermitExpiryDate}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-600">Fitness Expiry</p>
                  <p className="text-gray-900">{vehicle.fitnessExpiryDate}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-600">Service Expiry</p>
                  <p className="text-gray-900">{vehicle.vehicleServiceExpiryDate}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-600">Permit Type</p>
                  <p className="text-gray-900">{vehicle.permitType}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
