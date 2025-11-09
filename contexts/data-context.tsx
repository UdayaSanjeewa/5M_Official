'use client';

import React, { createContext, useContext, useState } from 'react';
import { Client, Project, Invoice } from '@/lib/types';
import { mockClients, mockProjects, mockInvoices } from '@/lib/mock-data';

interface DataContextType {
  clients: Client[];
  projects: Project[];
  invoices: Invoice[];
  addClient: (client: Omit<Client, 'id'>) => void;
  updateClient: (id: string, client: Partial<Client>) => void;
  deleteClient: (id: string) => void;
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  addInvoice: (invoice: Omit<Invoice, 'id' | 'invoiceNo'>) => void;
  updateInvoice: (id: string, invoice: Partial<Invoice>) => void;
  deleteInvoice: (id: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [clients, setClients] = useState<Client[]>(mockClients);
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [invoices, setInvoices] = useState<Invoice[]>(mockInvoices);

  const addClient = (client: Omit<Client, 'id'>) => {
    const newClient = { ...client, id: Date.now().toString() };
    setClients([...clients, newClient]);
  };

  const updateClient = (id: string, client: Partial<Client>) => {
    setClients(clients.map(c => c.id === id ? { ...c, ...client } : c));
  };

  const deleteClient = (id: string) => {
    setClients(clients.filter(c => c.id !== id));
  };

  const addProject = (project: Omit<Project, 'id'>) => {
    const newProject = { ...project, id: Date.now().toString() };
    setProjects([...projects, newProject]);
  };

  const updateProject = (id: string, project: Partial<Project>) => {
    setProjects(projects.map(p => p.id === id ? { ...p, ...project } : p));
  };

  const deleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const addInvoice = (invoice: Omit<Invoice, 'id' | 'invoiceNo'>) => {
    const nextNum = invoices.length + 1;
    const invoiceNo = `INV-${nextNum.toString().padStart(3, '0')}`;
    const newInvoice = { ...invoice, id: Date.now().toString(), invoiceNo };
    setInvoices([...invoices, newInvoice]);
  };

  const updateInvoice = (id: string, invoice: Partial<Invoice>) => {
    setInvoices(invoices.map(i => i.id === id ? { ...i, ...invoice } : i));
  };

  const deleteInvoice = (id: string) => {
    setInvoices(invoices.filter(i => i.id !== id));
  };

  return (
    <DataContext.Provider
      value={{
        clients,
        projects,
        invoices,
        addClient,
        updateClient,
        deleteClient,
        addProject,
        updateProject,
        deleteProject,
        addInvoice,
        updateInvoice,
        deleteInvoice,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
