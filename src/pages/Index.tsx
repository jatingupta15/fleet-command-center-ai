
import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { DashboardOverview } from '@/components/DashboardOverview';
import { ClientManagement } from '@/components/ClientManagement';
import { DriverManagement } from '@/components/DriverManagement';
import { VehicleManagement } from '@/components/VehicleManagement';
import { LiveTracking } from '@/components/LiveTracking';
import { SOSManagement } from '@/components/SOSManagement';
import { RideRequestManagement } from '@/components/RideRequestManagement';
import { Analytics } from '@/components/Analytics';
import { AdminSettings } from '@/components/AdminSettings';
import { Header } from '@/components/Header';

const Index = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const [sosAlerts, setSosAlerts] = useState(2); // Mock SOS alert count

  const renderActiveView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'clients':
        return <ClientManagement />;
      case 'drivers':
        return <DriverManagement />;
      case 'vehicles':
        return <VehicleManagement />;
      case 'tracking':
        return <LiveTracking />;
      case 'sos':
        return <SOSManagement />;
      case 'rides':
        return <RideRequestManagement />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <AdminSettings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeView={activeView} setActiveView={setActiveView} sosAlerts={sosAlerts} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header sosAlerts={sosAlerts} />
        <main className="flex-1 overflow-y-auto p-6">
          {renderActiveView()}
        </main>
      </div>
    </div>
  );
};

export default Index;
