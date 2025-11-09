'use client';

import { useData } from '@/contexts/data-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Briefcase, FileText, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import { Bar, BarChart, Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

export default function DashboardPage() {
  const { clients, projects, invoices } = useData();

  const totalClients = clients.length;
  const activeProjects = projects.filter(p => p.status === 'In Progress' || p.status === 'Planning').length;
  const pendingInvoices = invoices.filter(i => i.paymentStatus === 'Pending').length;
  const totalIncome = invoices.filter(i => i.paymentStatus === 'Paid' && i.type === 'Income').reduce((sum, i) => sum + i.amount, 0);

  const projectStatusData = [
    { status: 'Planning', count: projects.filter(p => p.status === 'Planning').length },
    { status: 'In Progress', count: projects.filter(p => p.status === 'In Progress').length },
    { status: 'Completed', count: projects.filter(p => p.status === 'Completed').length },
    { status: 'Delivered', count: projects.filter(p => p.status === 'Delivered').length },
  ];

  const monthlyIncome = invoices
    .filter(i => i.type === 'Income' && i.paymentStatus === 'Paid')
    .reduce((acc, invoice) => {
      const month = new Date(invoice.date).toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
      const existing = acc.find(item => item.month === month);
      if (existing) {
        existing.amount += invoice.amount;
      } else {
        acc.push({ month, amount: invoice.amount });
      }
      return acc;
    }, [] as { month: string; amount: number }[])
    .sort((a, b) => a.month.localeCompare(b.month));

  const statusColors: Record<string, string> = {
    Planning: '#60a5fa',
    'In Progress': '#fbbf24',
    Completed: '#34d399',
    Delivered: '#a78bfa',
  };

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-100">Dashboard</h1>
        <p className="text-gray-400 mt-1">Overview of your business metrics</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-gray-700 bg-gray-800/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Clients</CardTitle>
            <Users className="h-5 w-5 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-100">{totalClients}</div>
            <p className="text-xs text-gray-400 mt-1">Active business relationships</p>
          </CardContent>
        </Card>

        <Card className="border-gray-700 bg-gray-800/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Active Projects</CardTitle>
            <Briefcase className="h-5 w-5 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-100">{activeProjects}</div>
            <p className="text-xs text-gray-400 mt-1">Currently in progress</p>
          </CardContent>
        </Card>

        <Card className="border-gray-700 bg-gray-800/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Pending Invoices</CardTitle>
            <FileText className="h-5 w-5 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-100">{pendingInvoices}</div>
            <p className="text-xs text-gray-400 mt-1">Awaiting payment</p>
          </CardContent>
        </Card>

        <Card className="border-gray-700 bg-gray-800/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Income</CardTitle>
            <DollarSign className="h-5 w-5 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-100">${totalIncome.toLocaleString()}</div>
            <p className="text-xs text-gray-400 mt-1">Received payments</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-gray-700 bg-gray-800/50">
          <CardHeader>
            <CardTitle className="text-gray-100">Project Status Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                count: {
                  label: 'Projects',
                  color: 'hsl(var(--chart-1))',
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={projectStatusData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="status" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border border-gray-700 bg-gray-800 p-2 shadow-sm">
                            <div className="grid grid-cols-2 gap-2">
                              <span className="text-xs text-gray-400">Status:</span>
                              <span className="text-xs font-bold text-gray-100">{payload[0].payload.status}</span>
                              <span className="text-xs text-gray-400">Count:</span>
                              <span className="text-xs font-bold text-gray-100">{payload[0].value}</span>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                    {projectStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={statusColors[entry.status]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="border-gray-700 bg-gray-800/50">
          <CardHeader>
            <CardTitle className="text-gray-100">Monthly Income Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                amount: {
                  label: 'Income',
                  color: 'hsl(var(--chart-2))',
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyIncome}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border border-gray-700 bg-gray-800 p-2 shadow-sm">
                            <div className="grid grid-cols-2 gap-2">
                              <span className="text-xs text-gray-400">Month:</span>
                              <span className="text-xs font-bold text-gray-100">{payload[0].payload.month}</span>
                              <span className="text-xs text-gray-400">Income:</span>
                              <span className="text-xs font-bold text-gray-100">${payload[0].value?.toLocaleString()}</span>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Line type="monotone" dataKey="amount" stroke="#34d399" strokeWidth={2} dot={{ fill: '#34d399', r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-gray-700 bg-gray-800/50">
          <CardHeader>
            <CardTitle className="text-gray-100">Recent Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projects.slice(0, 5).map((project) => {
                const client = clients.find(c => c.id === project.clientId);
                return (
                  <div key={project.id} className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-100">{project.name}</p>
                      <p className="text-xs text-gray-400">{client?.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-100">${project.value.toLocaleString()}</p>
                      <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                        project.status === 'In Progress' ? 'bg-yellow-400/10 text-yellow-400' :
                        project.status === 'Completed' ? 'bg-green-400/10 text-green-400' :
                        project.status === 'Delivered' ? 'bg-purple-400/10 text-purple-400' :
                        'bg-blue-400/10 text-blue-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-700 bg-gray-800/50">
          <CardHeader>
            <CardTitle className="text-gray-100">Recent Invoices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {invoices.slice(0, 5).map((invoice) => {
                const client = clients.find(c => c.id === invoice.clientId);
                return (
                  <div key={invoice.id} className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-100">{invoice.invoiceNo}</p>
                      <p className="text-xs text-gray-400">{client?.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-100">${invoice.amount.toLocaleString()}</p>
                      <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                        invoice.paymentStatus === 'Paid' ? 'bg-green-400/10 text-green-400' : 'bg-red-400/10 text-red-400'
                      }`}>
                        {invoice.paymentStatus}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
