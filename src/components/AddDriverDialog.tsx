import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface AddDriverDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AddDriverDialog: React.FC<AddDriverDialogProps> = ({ 
  open, 
  onOpenChange 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    licenseNumber: '',
    licenseExpiry: null as Date | null,
    badgeNumber: '',
    badgeExpiry: null as Date | null,
    dateOfBirth: null as Date | null,
    vendorName: '',
    city: '',
    govIdType: '',
    govIdNumber: '',
    gender: '',
    address: '',
    comments: '',
    inductionDate: null as Date | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Adding new driver:', formData);
    onOpenChange(false);
    // Reset form
    setFormData({
      name: '',
      phone: '',
      licenseNumber: '',
      licenseExpiry: null,
      badgeNumber: '',
      badgeExpiry: null,
      dateOfBirth: null,
      vendorName: '',
      city: '',
      govIdType: '',
      govIdNumber: '',
      gender: '',
      address: '',
      comments: '',
      inductionDate: null,
    });
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const DatePickerField = ({ label, value, onChange, placeholder }: {
    label: string;
    value: Date | null;
    onChange: (date: Date | null) => void;
    placeholder: string;
  }) => (
    <div>
      <Label>{label}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !value && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value ? format(value, "PPP") : <span>{placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value || undefined}
            onSelect={onChange}
            initialFocus
            className="p-3 pointer-events-auto"
          />
        </PopoverContent>
      </Popover>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Driver</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Mobile Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    required
                  />
                </div>

                <DatePickerField
                  label="Date of Birth *"
                  value={formData.dateOfBirth}
                  onChange={(date) => updateFormData('dateOfBirth', date)}
                  placeholder="Select date of birth"
                />

                <div>
                  <Label htmlFor="gender">Gender *</Label>
                  <Select value={formData.gender} onValueChange={(value) => updateFormData('gender', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => updateFormData('address', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => updateFormData('city', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="vendorName">Vendor Name *</Label>
                  <Select value={formData.vendorName} onValueChange={(value) => updateFormData('vendorName', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select vendor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Urban Mobility">Urban Mobility</SelectItem>
                      <SelectItem value="City Transport">City Transport</SelectItem>
                      <SelectItem value="Metro Cabs">Metro Cabs</SelectItem>
                      <SelectItem value="Quick Rides">Quick Rides</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Documents & Licenses */}
            <Card>
              <CardHeader>
                <CardTitle>Documents & Licenses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="licenseNumber">Driving License Number *</Label>
                  <Input
                    id="licenseNumber"
                    value={formData.licenseNumber}
                    onChange={(e) => updateFormData('licenseNumber', e.target.value)}
                    required
                  />
                </div>

                <DatePickerField
                  label="License Expiry Date *"
                  value={formData.licenseExpiry}
                  onChange={(date) => updateFormData('licenseExpiry', date)}
                  placeholder="Select license expiry date"
                />

                <div>
                  <Label htmlFor="badgeNumber">Badge Number *</Label>
                  <Input
                    id="badgeNumber"
                    value={formData.badgeNumber}
                    onChange={(e) => updateFormData('badgeNumber', e.target.value)}
                    required
                  />
                </div>

                <DatePickerField
                  label="Badge Expiry Date *"
                  value={formData.badgeExpiry}
                  onChange={(date) => updateFormData('badgeExpiry', date)}
                  placeholder="Select badge expiry date"
                />

                <div>
                  <Label htmlFor="govIdType">Government ID Type *</Label>
                  <Select value={formData.govIdType} onValueChange={(value) => updateFormData('govIdType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select ID type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Aadhaar">Aadhaar Card</SelectItem>
                      <SelectItem value="PAN">PAN Card</SelectItem>
                      <SelectItem value="Driving License">Driving License</SelectItem>
                      <SelectItem value="Voter ID">Voter ID Card</SelectItem>
                      <SelectItem value="Passport">Passport</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="govIdNumber">Government ID Number *</Label>
                  <Input
                    id="govIdNumber"
                    value={formData.govIdNumber}
                    onChange={(e) => updateFormData('govIdNumber', e.target.value)}
                    required
                  />
                </div>

                <DatePickerField
                  label="Induction Date *"
                  value={formData.inductionDate}
                  onChange={(date) => updateFormData('inductionDate', date)}
                  placeholder="Select induction date"
                />
              </CardContent>
            </Card>
          </div>

          {/* Comments */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="comments">Comments/Notes</Label>
                <Textarea
                  id="comments"
                  value={formData.comments}
                  onChange={(e) => updateFormData('comments', e.target.value)}
                  placeholder="Any additional notes about the driver..."
                />
              </div>
            </CardContent>
          </Card>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">
              Add Driver
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};