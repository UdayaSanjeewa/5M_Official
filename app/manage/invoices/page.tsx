'use client';

import { useState } from 'react';
import { useData } from '@/contexts/data-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Plus, Pencil, Trash2, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import { Invoice } from '@/lib/types';

export default function InvoicesPage() {
  const { clients, projects, invoices, addInvoice, updateInvoice, deleteInvoice } = useData();
  const [open, setOpen] = useState(false);
  const [editingInvoice, setEditingInvoice] = useState<Invoice | null>(null);
  const [formData, setFormData] = useState({
    clientId: '',
    projectId: '',
    amount: '',
    date: '',
    paymentStatus: 'Pending' as Invoice['paymentStatus'],
    type: 'Income' as Invoice['type'],
    notes: '',
  });

  const resetForm = () => {
    setFormData({
      clientId: '',
      projectId: '',
      amount: '',
      date: '',
      paymentStatus: 'Pending',
      type: 'Income',
      notes: '',
    });
    setEditingInvoice(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const invoiceData = {
      ...formData,
      amount: parseFloat(formData.amount),
    };

    if (editingInvoice) {
      updateInvoice(editingInvoice.id, invoiceData);
      toast.success('Invoice updated successfully');
    } else {
      addInvoice(invoiceData);
      toast.success('Invoice created successfully');
    }
    setOpen(false);
    resetForm();
  };

  const handleEdit = (invoice: Invoice) => {
    setEditingInvoice(invoice);
    setFormData({
      clientId: invoice.clientId,
      projectId: invoice.projectId,
      amount: invoice.amount.toString(),
      date: invoice.date,
      paymentStatus: invoice.paymentStatus,
      type: invoice.type,
      notes: invoice.notes,
    });
    setOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this invoice?')) {
      deleteInvoice(id);
      toast.success('Invoice deleted successfully');
    }
  };

  const clientProjects = formData.clientId
    ? projects.filter(p => p.clientId === formData.clientId)
    : [];

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-100">Invoices</h1>
          <p className="text-gray-400 mt-1">Manage income and expenses</p>
        </div>
        <Dialog open={open} onOpenChange={(val) => { setOpen(val); if (!val) resetForm(); }}>
          <DialogTrigger asChild>
            <Button className="bg-gray-100 text-gray-900 hover:bg-gray-200">
              <Plus className="h-4 w-4 mr-2" />
              Add Invoice
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl border-gray-700 bg-gray-800 text-gray-100">
            <DialogHeader>
              <DialogTitle>{editingInvoice ? 'Edit Invoice' : 'Create New Invoice'}</DialogTitle>
              <DialogDescription className="text-gray-400">
                {editingInvoice ? 'Update invoice details' : 'Add a new invoice'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Type *</Label>
                  <Select value={formData.type} onValueChange={(val) => setFormData({ ...formData, type: val as Invoice['type'] })}>
                    <SelectTrigger className="border-gray-600 bg-gray-700/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="border-gray-700 bg-gray-800">
                      <SelectItem value="Income">Income</SelectItem>
                      <SelectItem value="Expense">Expense</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount ($) *</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    required
                    className="border-gray-600 bg-gray-700/50"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="clientId">Client *</Label>
                  <Select
                    value={formData.clientId}
                    onValueChange={(val) => setFormData({ ...formData, clientId: val, projectId: '' })}
                    required
                  >
                    <SelectTrigger className="border-gray-600 bg-gray-700/50">
                      <SelectValue placeholder="Select client" />
                    </SelectTrigger>
                    <SelectContent className="border-gray-700 bg-gray-800">
                      {clients.map((client) => (
                        <SelectItem key={client.id} value={client.id}>{client.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectId">Project *</Label>
                  <Select
                    value={formData.projectId}
                    onValueChange={(val) => setFormData({ ...formData, projectId: val })}
                    required
                    disabled={!formData.clientId}
                  >
                    <SelectTrigger className="border-gray-600 bg-gray-700/50">
                      <SelectValue placeholder="Select project" />
                    </SelectTrigger>
                    <SelectContent className="border-gray-700 bg-gray-800">
                      {clientProjects.map((project) => (
                        <SelectItem key={project.id} value={project.id}>{project.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                    className="border-gray-600 bg-gray-700/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="paymentStatus">Payment Status *</Label>
                  <Select value={formData.paymentStatus} onValueChange={(val) => setFormData({ ...formData, paymentStatus: val as Invoice['paymentStatus'] })}>
                    <SelectTrigger className="border-gray-600 bg-gray-700/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="border-gray-700 bg-gray-800">
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Paid">Paid</SelectItem>
                    </SelectContent>
                  </Select>
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
                  {editingInvoice ? 'Update' : 'Create'} Invoice
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {invoices.map((invoice) => {
          const client = clients.find(c => c.id === invoice.clientId);
          const project = projects.find(p => p.id === invoice.projectId);

          return (
            <Card key={invoice.id} className="border-gray-700 bg-gray-800/50">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className={`rounded-lg p-3 ${invoice.type === 'Income' ? 'bg-green-400/10' : 'bg-red-400/10'}`}>
                      {invoice.type === 'Income' ? (
                        <TrendingUp className="h-6 w-6 text-green-400" />
                      ) : (
                        <TrendingDown className="h-6 w-6 text-red-400" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold text-gray-100">{invoice.invoiceNo}</h3>
                        <Badge className={invoice.paymentStatus === 'Paid' ? 'bg-green-400/10 text-green-400 border-green-400/20' : 'bg-red-400/10 text-red-400 border-red-400/20'}>
                          {invoice.paymentStatus}
                        </Badge>
                        <Badge className={invoice.type === 'Income' ? 'bg-blue-400/10 text-blue-400 border-blue-400/20' : 'bg-orange-400/10 text-orange-400 border-orange-400/20'}>
                          {invoice.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">
                        {client?.name} • {project?.name}
                      </p>
                      {invoice.notes && (
                        <p className="text-sm text-gray-500 mt-1">{invoice.notes}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-100">${invoice.amount.toLocaleString()}</p>
                      <p className="text-sm text-gray-400">{new Date(invoice.date).toLocaleDateString()}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(invoice)}
                        className="border-gray-600 text-gray-300 hover:bg-gray-700"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(invoice.id)}
                        className="border-gray-600 text-red-400 hover:bg-red-950"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
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
