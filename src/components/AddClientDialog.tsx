import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface AddClientDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AddClientDialog = ({ open, onOpenChange }: AddClientDialogProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    clientName: '',
    totalEmployees: '',
    officeLocation: '',
    supportManagerName: '',
    supportManagerEmail: '',
    supportManagerPhone: '',
    billingCycle: '',
    billingAddress: '',
    emergencyContact: '',
    accountManager: '',
    paymentTerms: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Adding new client:', formData);
    toast({
      title: "Client Added",
      description: `${formData.clientName} has been successfully added as a new client.`,
    });
    onOpenChange(false);
    setFormData({
      clientName: '',
      totalEmployees: '',
      officeLocation: '',
      supportManagerName: '',
      supportManagerEmail: '',
      supportManagerPhone: '',
      billingCycle: '',
      billingAddress: '',
      emergencyContact: '',
      accountManager: '',
      paymentTerms: ''
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Client</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="clientName">Client Name *</Label>
              <Input
                id="clientName"
                value={formData.clientName}
                onChange={(e) => handleInputChange('clientName', e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="totalEmployees">Total Employees *</Label>
              <Input
                id="totalEmployees"
                type="number"
                value={formData.totalEmployees}
                onChange={(e) => handleInputChange('totalEmployees', e.target.value)}
                required
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="officeLocation">Office Location *</Label>
              <Input
                id="officeLocation"
                value={formData.officeLocation}
                onChange={(e) => handleInputChange('officeLocation', e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="supportManagerName">Support Manager Name *</Label>
              <Input
                id="supportManagerName"
                value={formData.supportManagerName}
                onChange={(e) => handleInputChange('supportManagerName', e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="supportManagerEmail">Support Manager Email *</Label>
              <Input
                id="supportManagerEmail"
                type="email"
                value={formData.supportManagerEmail}
                onChange={(e) => handleInputChange('supportManagerEmail', e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="supportManagerPhone">Support Manager Phone *</Label>
              <Input
                id="supportManagerPhone"
                value={formData.supportManagerPhone}
                onChange={(e) => handleInputChange('supportManagerPhone', e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="billingCycle">Billing Cycle *</Label>
              <Select value={formData.billingCycle} onValueChange={(value) => handleInputChange('billingCycle', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select billing cycle" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Monthly">Monthly</SelectItem>
                  <SelectItem value="Quarterly">Quarterly</SelectItem>
                  <SelectItem value="Yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="billingAddress">Billing Address *</Label>
              <Textarea
                id="billingAddress"
                value={formData.billingAddress}
                onChange={(e) => handleInputChange('billingAddress', e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="emergencyContact">Emergency Contact</Label>
              <Input
                id="emergencyContact"
                value={formData.emergencyContact}
                onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="accountManager">Account Manager</Label>
              <Input
                id="accountManager"
                value={formData.accountManager}
                onChange={(e) => handleInputChange('accountManager', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="paymentTerms">Payment Terms</Label>
              <Select value={formData.paymentTerms} onValueChange={(value) => handleInputChange('paymentTerms', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select payment terms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15 Days">15 Days</SelectItem>
                  <SelectItem value="30 Days">30 Days</SelectItem>
                  <SelectItem value="45 Days">45 Days</SelectItem>
                  <SelectItem value="60 Days">60 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Add Client</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};