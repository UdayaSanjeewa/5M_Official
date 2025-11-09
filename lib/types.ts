export interface Client {
  id: string;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  website: string;
  joinedDate: string;
  notes: string;
}

export interface Project {
  id: string;
  clientId: string;
  name: string;
  category: string;
  status: 'Planning' | 'In Progress' | 'Completed' | 'Delivered';
  value: number;
  paymentStatus: 'Pending' | 'Partial' | 'Paid';
  startDate: string;
  endDate: string;
  repoUrl: string;
  notes: string;
}

export interface Invoice {
  id: string;
  invoiceNo: string;
  clientId: string;
  projectId: string;
  amount: number;
  date: string;
  paymentStatus: 'Pending' | 'Paid';
  type: 'Income' | 'Expense';
  notes: string;
}
