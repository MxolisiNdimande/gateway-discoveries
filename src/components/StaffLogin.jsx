import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Shield, Users, Binoculars } from 'lucide-react';
import { toast } from 'sonner';

export function StaffLogin({ onLogin, onCancel }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('admin');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const role = activeTab === 'admin' ? 'admin' : 'kruger-staff';
      toast.success(`Welcome ${role === 'admin' ? 'Administrator' : 'Kruger Staff'}`);
      onLogin(role);
    } else {
      toast.error('Please enter your credentials');
    }
  };

  const handleDemoLogin = (role) => {
    if (role === 'admin') {
      setEmail('admin@gatewaydiscoveries.com');
      setPassword('admin123');
    } else {
      setEmail('ranger@kruger.co.za');
      setPassword('kruger123');
    }
    setTimeout(() => {
      toast.success(`Welcome ${role === 'admin' ? 'Administrator' : 'Kruger Staff'}`);
      onLogin(role);
    }, 300);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 mb-4">
            <Shield className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl mb-2">Staff Access Portal</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Gateway Discoveries - Mpumalanga</p>
        </div>

        <Card>
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-lg sm:text-xl">Select Access Level</CardTitle>
            <CardDescription className="text-sm">
              Choose your role and sign in
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-4 sm:mb-6 h-auto">
                <TabsTrigger value="admin" className="text-xs sm:text-sm py-2">
                  <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">System </span>Admin
                </TabsTrigger>
                <TabsTrigger value="kruger" className="text-xs sm:text-sm py-2">
                  <Binoculars className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  Kruger Staff
                </TabsTrigger>
              </TabsList>

              <TabsContent value="admin">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="admin-email" className="text-sm">Email Address</Label>
                      <Badge variant="outline" className="text-xs">Administrator</Badge>
                    </div>
                    <Input
                      id="admin-email"
                      type="email"
                      placeholder="admin@gatewaydiscoveries.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-password" className="text-sm">Password</Label>
                    <Input
                      id="admin-password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Button type="submit" className="w-full text-sm sm:text-base">
                      Sign In as Administrator
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full text-sm sm:text-base"
                      onClick={() => handleDemoLogin('admin')}
                    >
                      Use Demo Admin Account
                    </Button>
                  </div>
                  <p className="text-xs text-center text-muted-foreground">
                    Full system access • Content management • Analytics
                  </p>
                </form>
              </TabsContent>

              <TabsContent value="kruger">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="kruger-email" className="text-sm">Email Address</Label>
                      <Badge variant="secondary" className="text-xs">Kruger Staff</Badge>
                    </div>
                    <Input
                      id="kruger-email"
                      type="email"
                      placeholder="ranger@kruger.co.za"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="kruger-password" className="text-sm">Password</Label>
                    <Input
                      id="kruger-password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Button type="submit" className="w-full text-sm sm:text-base">
                      Sign In as Kruger Staff
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full text-sm sm:text-base"
                      onClick={() => handleDemoLogin('kruger-staff')}
                    >
                      Use Demo Kruger Account
                    </Button>
                  </div>
                  <p className="text-xs text-center text-muted-foreground">
                    Animal tracking • Sighting reports • Park management
                  </p>
                </form>
              </TabsContent>
            </Tabs>

            <div className="relative my-4 sm:my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or</span>
              </div>
            </div>

            <Button variant="ghost" className="w-full text-sm" onClick={onCancel}>
              Return to Public Portal
            </Button>
          </CardContent>
        </Card>

        <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs text-center text-muted-foreground">
          <div className="bg-white/50 rounded-lg p-3">
            <p className="mb-1">Admin Demo:</p>
            <p className="font-mono text-xs">admin@gatewaydiscoveries.com</p>
            <p className="font-mono text-xs">admin123</p>
          </div>
          <div className="bg-white/50 rounded-lg p-3">
            <p className="mb-1">Kruger Demo:</p>
            <p className="font-mono text-xs">ranger@kruger.co.za</p>
            <p className="font-mono text-xs">kruger123</p>
          </div>
        </div>
      </div>
    </div>
  );
}