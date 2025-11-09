# 5M Solutions Management Portal

## Access Information

### Portal URL
- **Home Page**: `/` - Company landing page
- **Management Portal**: `/manage`

### Login Credentials
- **Email**: `admin@5msolutions.com`
- **Password**: `admin123`

## Portal Features

### Dashboard (`/manage`)
- Total clients overview
- Active projects count
- Pending invoices tracking
- Total income visualization
- Project status distribution chart
- Monthly income trend chart
- Recent projects and invoices lists

### Clients Module (`/manage/clients`)
- Add, edit, and delete clients
- Track client contact information
- View related projects and invoices per client
- Total revenue per client

### Projects Module (`/manage/projects`)
- Complete project management
- Status tracking (Planning, In Progress, Completed, Delivered)
- Payment status (Pending, Partial, Paid)
- Repository URL tracking
- Project timeline management

### Invoices Module (`/manage/invoices`)
- Auto-generated invoice numbers (INV-001, INV-002, etc.)
- Income and expense tracking
- Payment status management
- Client and project association

### Settings (`/manage/settings`)
- Basic configuration placeholder
- Company information display

## Technical Stack
- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Data Storage**: In-memory (mock data with Context API)

## Data Management
All data is stored in browser memory using React Context. The portal includes:
- 3 sample clients
- 4 sample projects
- 6 sample invoices

Data persists only during the browser session and resets on page refresh.

## Color Scheme
- Dark mode interface with gray-900 background
- Professional color coding for statuses
- Accessible contrast ratios throughout
