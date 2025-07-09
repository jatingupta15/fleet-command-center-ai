import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Bell, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Users,
  Settings,
  X,
  Eye
} from 'lucide-react';

export const NotificationPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'SOS',
      title: 'Emergency SOS Alert',
      message: 'Driver Rajesh Kumar has triggered SOS alert at Electronic City',
      time: '2 minutes ago',
      priority: 'high',
      read: false,
      icon: AlertTriangle,
      color: 'text-red-600',
      bg: 'bg-red-50'
    },
    {
      id: 2,
      type: 'Billing',
      title: 'Billing Due Alert',
      message: 'Infosys Ltd billing due in 2 days - Amount: ₹3,45,000',
      time: '1 hour ago',
      priority: 'medium',
      read: false,
      icon: Clock,
      color: 'text-orange-600',
      bg: 'bg-orange-50'
    },
    {
      id: 3,
      type: 'Driver',
      title: 'Driver Alert',
      message: 'Driver Amit Sharma has exceeded speed limit on route R-123',
      time: '3 hours ago',
      priority: 'medium',
      read: true,
      icon: Users,
      color: 'text-yellow-600',
      bg: 'bg-yellow-50'
    },
    {
      id: 4,
      type: 'System',
      title: 'Route Completed',
      message: 'Route R-456 completed successfully by driver Priya Singh',
      time: '5 hours ago',
      priority: 'low',
      read: true,
      icon: CheckCircle,
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    {
      id: 5,
      type: 'Maintenance',
      title: 'Vehicle Maintenance Due',
      message: 'Vehicle KA-01-AB-1234 is due for maintenance in 3 days',
      time: '1 day ago',
      priority: 'medium',
      read: false,
      icon: Settings,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    }
  ]);

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, read: true })));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-3xl font-bold text-gray-900">Notifications</h2>
          {unreadCount > 0 && (
            <Badge variant="destructive" className="px-2 py-1">
              {unreadCount} unread
            </Badge>
          )}
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={markAllAsRead}>
            <CheckCircle className="mr-2 h-4 w-4" />
            Mark All as Read
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Settings className="mr-2 h-4 w-4" />
            Notification Settings
          </Button>
        </div>
      </div>

      {/* Notification Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Notifications</p>
                <p className="text-2xl font-bold text-gray-900">{notifications.length}</p>
              </div>
              <Bell className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Unread</p>
                <p className="text-2xl font-bold text-red-600">{unreadCount}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">High Priority</p>
                <p className="text-2xl font-bold text-orange-600">
                  {notifications.filter(n => n.priority === 'high').length}
                </p>
              </div>
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">SOS Alerts</p>
                <p className="text-2xl font-bold text-red-600">
                  {notifications.filter(n => n.type === 'SOS').length}
                </p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Notifications List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notifications.map((notification) => {
              const Icon = notification.icon;
              return (
                <div
                  key={notification.id}
                  className={`p-4 border rounded-lg transition-all hover:shadow-md ${
                    !notification.read ? 'bg-blue-50 border-blue-200' : 'bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg ${notification.bg}`}>
                        <Icon className={`h-5 w-5 ${notification.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium text-gray-900">{notification.title}</h4>
                          <Badge 
                            variant={notification.priority === 'high' ? 'destructive' : 
                                   notification.priority === 'medium' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {notification.priority}
                          </Badge>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                        <p className="text-xs text-gray-500">{notification.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {!notification.read && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => markAsRead(notification.id)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteNotification(notification.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};