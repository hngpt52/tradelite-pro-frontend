"use client";

import { AuthProvider } from '@/lib/auth-context';
import { usePageViewTracking } from '@/lib/analytics';

export function Providers({ children }: { children: React.ReactNode }) {
  // Track page views
  usePageViewTracking();
  
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}
