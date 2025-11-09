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
import { Plus, Pencil, Trash2, ExternalLink, DollarSign } from 'lucide-react';
import { Project } from '@/lib/types';

export default function ProjectsPage() {
  const { clients, projects, addProject, updateProject, deleteProject } = useData();
  const [open, setOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    clientId: '',
    name: '',
    category: '',
    status: 'Planning' as Project['status'],
    value: '',
    paymentStatus: 'Pending' as Project['paymentStatus'],
    startDate: '',
    endDate: '',
    repoUrl: '',
    notes: '',
  });

  const resetForm = () => {
    setFormData({
      clientId: '',
      name: '',
      category: '',
      status: 'Planning',
      value: '',
      paymentStatus: 'Pending',
      startDate: '',
      endDate: '',
      repoUrl: '',
      notes: '',
    });
    setEditingProject(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const projectData = {
      ...formData,
      value: parseFloat(formData.value),
    };

    if (editingProject) {
      updateProject(editingProject.id, projectData);
      toast.success('Project updated successfully');
    } else {
      addProject(projectData);
      toast.success('Project added successfully');
    }
    setOpen(false);
    resetForm();
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      clientId: project.clientId,
      name: project.name,
      category: project.category,
      status: project.status,
      value: project.value.toString(),
      paymentStatus: project.paymentStatus,
      startDate: project.startDate,
      endDate: project.endDate,
      repoUrl: project.repoUrl,
      notes: project.notes,
    });
    setOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      deleteProject(id);
      toast.success('Project deleted successfully');
    }
  };

  const getStatusColor = (status: Project['status']) => {
    const colors = {
      Planning: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
      'In Progress': 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20',
      Completed: 'bg-green-400/10 text-green-400 border-green-400/20',
      Delivered: 'bg-purple-400/10 text-purple-400 border-purple-400/20',
    };
    return colors[status];
  };

  const getPaymentColor = (status: Project['paymentStatus']) => {
    const colors = {
      Pending: 'bg-red-400/10 text-red-400 border-red-400/20',
      Partial: 'bg-orange-400/10 text-orange-400 border-orange-400/20',
      Paid: 'bg-green-400/10 text-green-400 border-green-400/20',
    };
    return colors[status];
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-100">Projects</h1>
          <p className="text-gray-400 mt-1">Track and manage your projects</p>
        </div>
        <Dialog open={open} onOpenChange={(val) => { setOpen(val); if (!val) resetForm(); }}>
          <DialogTrigger asChild>
            <Button className="bg-gray-100 text-gray-900 hover:bg-gray-200">
              <Plus className="h-4 w-4 mr-2" />
              Add Project
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl border-gray-700 bg-gray-800 text-gray-100 max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingProject ? 'Edit Project' : 'Add New Project'}</DialogTitle>
              <DialogDescription className="text-gray-400">
                {editingProject ? 'Update project details' : 'Create a new project'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="clientId">Client *</Label>
                  <Select value={formData.clientId} onValueChange={(val) => setFormData({ ...formData, clientId: val })} required>
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
                  <Label htmlFor="name">Project Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-gray-600 bg-gray-700/50"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                    className="border-gray-600 bg-gray-700/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="value">Project Value ($) *</Label>
                  <Input
                    id="value"
                    type="number"
                    value={formData.value}
                    onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                    required
                    className="border-gray-600 bg-gray-700/50"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="status">Status *</Label>
                  <Select value={formData.status} onValueChange={(val) => setFormData({ ...formData, status: val as Project['status'] })}>
                    <SelectTrigger className="border-gray-600 bg-gray-700/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="border-gray-700 bg-gray-800">
                      <SelectItem value="Planning">Planning</SelectItem>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                      <SelectItem value="Delivered">Delivered</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="paymentStatus">Payment Status *</Label>
                  <Select value={formData.paymentStatus} onValueChange={(val) => setFormData({ ...formData, paymentStatus: val as Project['paymentStatus'] })}>
                    <SelectTrigger className="border-gray-600 bg-gray-700/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="border-gray-700 bg-gray-800">
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Partial">Partial</SelectItem>
                      <SelectItem value="Paid">Paid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date *</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    required
                    className="border-gray-600 bg-gray-700/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endDate">End Date *</Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    required
                    className="border-gray-600 bg-gray-700/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="repoUrl">Repository URL</Label>
                <Input
                  id="repoUrl"
                  value={formData.repoUrl}
                  onChange={(e) => setFormData({ ...formData, repoUrl: e.target.value })}
                  className="border-gray-600 bg-gray-700/50"
                />
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
                  {editingProject ? 'Update' : 'Add'} Project
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => {
          const client = clients.find(c => c.id === project.clientId);

          return (
            <Card key={project.id} className="border-gray-700 bg-gray-800/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-gray-100">{project.name}</CardTitle>
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                      <Badge className={getPaymentColor(project.paymentStatus)}>
                        {project.paymentStatus}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-400 mt-1">
                      {client?.name} • {project.category}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(project)}
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(project.id)}
                      className="border-gray-600 text-red-400 hover:bg-red-950"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-gray-400">Project Value</p>
                      <p className="text-lg font-semibold text-gray-100 flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        {project.value.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Start Date</p>
                      <p className="text-sm text-gray-100">{new Date(project.startDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">End Date</p>
                      <p className="text-sm text-gray-100">{new Date(project.endDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Repository</p>
                      {project.repoUrl ? (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-400 hover:underline flex items-center gap-1"
                        >
                          View <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        <p className="text-sm text-gray-500">Not set</p>
                      )}
                    </div>
                  </div>

                  {project.notes && (
                    <div className="pt-4 border-t border-gray-700">
                      <p className="text-sm text-gray-400">{project.notes}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
