'use client';

import { useState } from 'react';
import { useData } from '@/contexts/data-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { toast } from 'sonner';
import { Plus, Pencil, Trash2, Mail, Phone, Globe } from 'lucide-react';
import { Client } from '@/lib/types';

export default function ClientsPage() {
  const { clients, projects, invoices, addClient, updateClient, deleteClient } = useData();
  const [open, setOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    joinedDate: '',
    notes: '',
  });

  const resetForm = () => {
    setFormData({
      name: '',
      contactPerson: '',
      email: '',
      phone: '',
      website: '',
      joinedDate: '',
      notes: '',
    });
    setEditingClient(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingClient) {
      updateClient(editingClient.id, formData);
      toast.success('Client updated successfully');
    } else {
      addClient(formData);
      toast.success('Client added successfully');
    }
    setOpen(false);
    resetForm();
  };

  const handleEdit = (client: Client) => {
    setEditingClient(client);
    setFormData({
      name: client.name,
      contactPerson: client.contactPerson,
      email: client.email,
      phone: client.phone,
      website: client.website,
      joinedDate: client.joinedDate,
      notes: client.notes,
    });
    setOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this client?')) {
      deleteClient(id);
      toast.success('Client deleted successfully');
    }
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-100">Clients</h1>
          <p className="text-gray-400 mt-1">Manage your client relationships</p>
        </div>
        <Dialog open={open} onOpenChange={(val) => { setOpen(val); if (!val) resetForm(); }}>
          <DialogTrigger asChild>
            <Button className="bg-gray-100 text-gray-900 hover:bg-gray-200">
              <Plus className="h-4 w-4 mr-2" />
              Add Client
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl border-gray-700 bg-gray-800 text-gray-100 max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingClient ? 'Edit Client' : 'Add New Client'}</DialogTitle>
              <DialogDescription className="text-gray-400">
                {editingClient ? 'Update client information' : 'Add a new client to your portfolio'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Company Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-gray-600 bg-gray-700/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactPerson">Contact Person *</Label>
                  <Input
                    id="contactPerson"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    required
                    className="border-gray-600 bg-gray-700/50"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-gray-600 bg-gray-700/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="border-gray-600 bg-gray-700/50"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="border-gray-600 bg-gray-700/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="joinedDate">Joined Date *</Label>
                  <Input
                    id="joinedDate"
                    type="date"
                    value={formData.joinedDate}
                    onChange={(e) => setFormData({ ...formData, joinedDate: e.target.value })}
                    required
                    className="border-gray-600 bg-gray-700/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                  className="border-gray-600 bg-gray-700/50"
                />
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <Button type="button" variant="outline" onClick={() => { setOpen(false); resetForm(); }} className="border-gray-600">
                  Cancel
                </Button>
                <Button type="submit" className="bg-gray-100 text-gray-900 hover:bg-gray-200">
                  {editingClient ? 'Update' : 'Add'} Client
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6">
        {clients.map((client) => {
          const clientProjects = projects.filter(p => p.clientId === client.id);
          const clientInvoices = invoices.filter(i => i.clientId === client.id);
          const totalRevenue = clientInvoices
            .filter(i => i.paymentStatus === 'Paid' && i.type === 'Income')
            .reduce((sum, i) => sum + i.amount, 0);

          return (
            <Card key={client.id} className="border-gray-700 bg-gray-800/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-gray-100">{client.name}</CardTitle>
                    <CardDescription className="text-gray-400 mt-1">
                      {client.contactPerson} • Joined {new Date(client.joinedDate).toLocaleDateString()}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(client)}
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(client.id)}
                      className="border-gray-600 text-red-400 hover:bg-red-950"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Mail className="h-4 w-4 text-gray-400" />
                      {client.email}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Phone className="h-4 w-4 text-gray-400" />
                      {client.phone}
                    </div>
                    {client.website && (
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Globe className="h-4 w-4 text-gray-400" />
                        <a href={client.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {client.website}
                        </a>
                      </div>
                    )}
                  </div>

                  {client.notes && (
                    <p className="text-sm text-gray-400">{client.notes}</p>
                  )}

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-700">
                    <div>
                      <p className="text-xs text-gray-400">Projects</p>
                      <p className="text-lg font-semibold text-gray-100">{clientProjects.length}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Invoices</p>
                      <p className="text-lg font-semibold text-gray-100">{clientInvoices.length}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Total Revenue</p>
                      <p className="text-lg font-semibold text-gray-100">${totalRevenue.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
