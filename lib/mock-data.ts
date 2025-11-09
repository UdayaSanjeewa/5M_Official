import { Client, Project, Invoice } from './types';

export const mockClients: Client[] = [
  {
    id: '1',
    name: 'TechCorp Solutions',
    contactPerson: 'John Smith',
    email: 'john@techcorp.com',
    phone: '+1-555-0123',
    website: 'https://techcorp.com',
    joinedDate: '2024-01-15',
    notes: 'Key client, multiple projects in pipeline'
  },
  {
    id: '2',
    name: 'Digital Ventures Ltd',
    contactPerson: 'Sarah Johnson',
    email: 'sarah@digitalventures.com',
    phone: '+1-555-0456',
    website: 'https://digitalventures.com',
    joinedDate: '2024-03-20',
    notes: 'E-commerce focused client'
  },
  {
    id: '3',
    name: 'Innovation Labs',
    contactPerson: 'Michael Chen',
    email: 'michael@innovationlabs.io',
    phone: '+1-555-0789',
    website: 'https://innovationlabs.io',
    joinedDate: '2024-02-10',
    notes: 'Startup client, fast-paced environment'
  }
];

export const mockProjects: Project[] = [
  {
    id: '1',
    clientId: '1',
    name: 'E-Commerce Platform Redesign',
    category: 'Web Development',
    status: 'In Progress',
    value: 45000,
    paymentStatus: 'Partial',
    startDate: '2024-01-20',
    endDate: '2024-06-30',
    repoUrl: 'https://github.com/techcorp/ecommerce',
    notes: 'Modern React-based platform with payment integration'
  },
  {
    id: '2',
    clientId: '1',
    name: 'Mobile App Development',
    category: 'Mobile Development',
    status: 'Planning',
    value: 60000,
    paymentStatus: 'Pending',
    startDate: '2024-05-01',
    endDate: '2024-10-31',
    repoUrl: '',
    notes: 'iOS and Android native apps'
  },
  {
    id: '3',
    clientId: '2',
    name: 'Digital Marketing Platform',
    category: 'Web Development',
    status: 'Completed',
    value: 35000,
    paymentStatus: 'Paid',
    startDate: '2024-03-25',
    endDate: '2024-05-15',
    repoUrl: 'https://github.com/digitalventures/marketing',
    notes: 'Analytics dashboard with real-time reporting'
  },
  {
    id: '4',
    clientId: '3',
    name: 'AI Chatbot Integration',
    category: 'AI/ML',
    status: 'Delivered',
    value: 28000,
    paymentStatus: 'Paid',
    startDate: '2024-02-15',
    endDate: '2024-04-10',
    repoUrl: 'https://github.com/innovationlabs/chatbot',
    notes: 'GPT-based customer support bot'
  }
];

export const mockInvoices: Invoice[] = [
  {
    id: '1',
    invoiceNo: 'INV-001',
    clientId: '1',
    projectId: '1',
    amount: 22500,
    date: '2024-02-01',
    paymentStatus: 'Paid',
    type: 'Income',
    notes: 'First milestone payment - 50% upfront'
  },
  {
    id: '2',
    invoiceNo: 'INV-002',
    clientId: '2',
    projectId: '3',
    amount: 17500,
    date: '2024-03-30',
    paymentStatus: 'Paid',
    type: 'Income',
    notes: '50% upfront payment'
  },
  {
    id: '3',
    invoiceNo: 'INV-003',
    clientId: '2',
    projectId: '3',
    amount: 17500,
    date: '2024-05-20',
    paymentStatus: 'Paid',
    type: 'Income',
    notes: 'Final payment upon delivery'
  },
  {
    id: '4',
    invoiceNo: 'INV-004',
    clientId: '3',
    projectId: '4',
    amount: 28000,
    date: '2024-04-15',
    paymentStatus: 'Paid',
    type: 'Income',
    notes: 'Full payment upon project completion'
  },
  {
    id: '5',
    invoiceNo: 'INV-005',
    clientId: '1',
    projectId: '1',
    amount: 22500,
    date: '2024-06-30',
    paymentStatus: 'Pending',
    type: 'Income',
    notes: 'Final milestone payment - due on completion'
  },
  {
    id: '6',
    invoiceNo: 'INV-006',
    clientId: '1',
    projectId: '2',
    amount: 30000,
    date: '2024-05-05',
    paymentStatus: 'Pending',
    type: 'Income',
    notes: 'Initial payment for mobile app project'
  }
];

export const DUMMY_ADMIN = {
  email: 'admin@5msolutions.com',
  password: 'admin123'
};
