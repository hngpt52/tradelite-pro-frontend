"use client";

// Define event types
export type EventType = 'page_view' | 'simulation_run' | 'login' | 'register' | 'feedback_view';

// Add PostHog type to Window interface
declare global {
  interface Window {
    posthog?: {
      capture: (eventName: string, properties?: Record<string, unknown>) => void;
    };
  }
}

// PostHog event tracking
export const trackEvent = (eventName: EventType, properties?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.posthog) {
    window.posthog.capture(eventName, properties);
  }
};

// Hook for tracking page views
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export const usePageViewTracking = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      trackEvent('page_view', { path: pathname });
    }
  }, [pathname]);
};
