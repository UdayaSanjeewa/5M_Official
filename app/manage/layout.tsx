'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { AuthProvider, useAuth } from '@/contexts/auth-context';
import { DataProvider } from '@/contexts/data-context';
import { Sidebar } from '@/components/manage/sidebar';
import { Toaster } from '@/components/ui/sonner';

function ManageLayoutContent({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isAuthenticated && pathname !== '/manage/auth/login') {
      router.push('/manage/auth/login');
    }
  }, [isAuthenticated, pathname, router]);

  if (pathname === '/manage/auth/login') {
    return <>{children}</>;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-900">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
      <Toaster />
    </div>
  );
}

export default function ManageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <DataProvider>
        <ManageLayoutContent>{children}</ManageLayoutContent>
      </DataProvider>
    </AuthProvider>
  );
}
