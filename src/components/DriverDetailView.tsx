import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Textarea } from '@/components/ui/textarea';
import { 
  User, 
  Phone, 
  MapPin, 
  Calendar, 
  Shield, 
  Car, 
  Star,
  Edit,
  UserMinus,
  CreditCard,
  FileText,
  Activity
} from 'lucide-react';

interface DriverDetailViewProps {
  driver: any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DriverDetailView: React.FC<DriverDetailViewProps> = ({ 
  driver, 
  open, 
  onOpenChange 
}) => {
  const [deactivateReason, setDeactivateReason] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleDeactivate = (reason: string) => {
    console.log(`Deactivating driver ${driver.id} with reason: ${reason}`);
    setDeactivateReason('');
    onOpenChange(false);
  };

  const getVerificationStatus = (status: string) => {
    switch (status.toLowerCase()) {
      case 'verified':
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">{status}</Badge>;
      case 'pending':
      case 'in progress':
        return <Badge className="bg-yellow-100 text-yellow-800">{status}</Badge>;
      case 'expired':
      case 'failed':
        return <Badge className="bg-red-100 text-red-800">{status}</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>;
    }
  };

  if (!driver) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Driver Profile - {driver.name}</span>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                onClick={() => setIsEditing(!isEditing)}
              >
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">
                    <UserMinus className="w-4 h-4 mr-2" />
                    Deactivate
                  </Button>
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
                      onClick={() => handleDeactivate(deactivateReason)}
                      disabled={!deactivateReason.trim()}
                    >
                      Deactivate
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <span className="text-sm font-medium text-muted-foreground">Driver ID:</span>
                <p className="font-medium">{driver.id}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Full Name:</span>
                <p className="font-medium">{driver.name}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Date of Birth:</span>
                <p>{driver.dateOfBirth}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Gender:</span>
                <p>{driver.gender}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Phone Number:</span>
                <p>{driver.phone}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Address:</span>
                <p>{driver.address}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">City:</span>
                <p>{driver.city}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Vendor:</span>
                <p>{driver.vendorName}</p>
              </div>
            </CardContent>
          </Card>

          {/* Documents & Verification */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Documents & Verification
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <span className="text-sm font-medium text-muted-foreground">License Number:</span>
                <p className="font-medium">{driver.licenseNumber}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">License Expiry:</span>
                <p>{driver.licenseExpiry}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Badge Number:</span>
                <p className="font-medium">{driver.badgeNumber}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Badge Expiry:</span>
                <p>{driver.badgeExpiry}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Gov ID Type:</span>
                <p>{driver.govIdType}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Gov ID Number:</span>
                <p>{driver.govIdNumber}</p>
              </div>
            </CardContent>
          </Card>

          {/* Background Checks */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Background Verification
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-muted-foreground">Background Check:</span>
                {getVerificationStatus(driver.backgroundCheckStatus)}
              </div>
              <div>
                <span className="text-sm text-muted-foreground">BGV Expiry:</span>
                <p>{driver.bgvExpiryDate}</p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-muted-foreground">Police Verification:</span>
                {getVerificationStatus(driver.policeVerificationStatus)}
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Police Verification Expiry:</span>
                <p>{driver.policeVerificationExpiry}</p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-muted-foreground">Medical Verification:</span>
                {getVerificationStatus(driver.medicalVerificationStatus)}
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Medical Verification Expiry:</span>
                <p>{driver.medicalVerificationExpiry}</p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-muted-foreground">Training Verification:</span>
                {getVerificationStatus(driver.trainingVerificationStatus)}
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Training Verification Expiry:</span>
                <p>{driver.trainingVerificationExpiry}</p>
              </div>
            </CardContent>
          </Card>

          {/* Performance & Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Performance & Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-muted-foreground">Current Status:</span>
                <Badge 
                  className={
                    driver.status === 'Active' ? 'bg-green-100 text-green-800' :
                    driver.status === 'Allocated' ? 'bg-blue-100 text-blue-800' :
                    driver.status === 'In Training' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }
                >
                  {driver.status}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-muted-foreground">Rating:</span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                  <span className="font-medium">{driver.rating}</span>
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Total Trips:</span>
                <p className="font-medium">{driver.totalTrips.toLocaleString()}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Induction Date:</span>
                <p>{driver.inductionDate}</p>
              </div>
              {driver.isAllocated && driver.allocatedRide && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Current Allocation</h4>
                  <div className="text-sm space-y-1">
                    <p><span className="font-medium">Ride ID:</span> {driver.allocatedRide.rideId}</p>
                    <p><span className="font-medium">Passenger:</span> {driver.allocatedRide.passengerName}</p>
                    <p><span className="font-medium">Route:</span> {driver.allocatedRide.pickup} → {driver.allocatedRide.dropoff}</p>
                    <p><span className="font-medium">Time:</span> {driver.allocatedRide.scheduledTime}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Comments Section */}
        {driver.comments && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Comments & Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{driver.comments}</p>
            </CardContent>
          </Card>
        )}

        <DialogFooter className="mt-6">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};