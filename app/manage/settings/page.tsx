'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Users, DollarSign, Settings as SettingsIcon } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-100">Settings</h1>
        <p className="text-gray-400 mt-1">Manage your portal preferences</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-gray-700 bg-gray-800/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-400/10 p-2">
                <Building2 className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <CardTitle className="text-gray-100">Company Information</CardTitle>
                <CardDescription className="text-gray-400">
                  Update your company details
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex justify-between">
                <span className="text-gray-400">Company Name:</span>
                <span>5M Solutions (Pvt) Ltd.</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Admin Email:</span>
                <span>admin@5msolutions.com</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-700 bg-gray-800/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-green-400/10 p-2">
                <Users className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <CardTitle className="text-gray-100">User Management</CardTitle>
                <CardDescription className="text-gray-400">
                  Control user access
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-400">
              Currently using demo mode with single admin user.
            </p>
          </CardContent>
        </Card>

        <Card className="border-gray-700 bg-gray-800/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-yellow-400/10 p-2">
                <DollarSign className="h-5 w-5 text-yellow-400" />
              </div>
              <div>
                <CardTitle className="text-gray-100">Billing & Payments</CardTitle>
                <CardDescription className="text-gray-400">
                  Configure payment settings
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-400">
              Payment gateway integration settings will appear here.
            </p>
          </CardContent>
        </Card>

        <Card className="border-gray-700 bg-gray-800/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-purple-400/10 p-2">
                <SettingsIcon className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <CardTitle className="text-gray-100">General Settings</CardTitle>
                <CardDescription className="text-gray-400">
                  Portal preferences
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex justify-between">
                <span className="text-gray-400">Theme:</span>
                <span>Dark Mode</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Currency:</span>
                <span>USD ($)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
