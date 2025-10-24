import { useEffect } from 'react';

/**
 * Hook to track app visits and send notifications
 *
 * ⚠️ WARNING: This sends a notification for EVERY page load/refresh!
 *
 * Recommendations:
 * 1. Consider using analytics instead (Google Analytics, Plausible, etc.)
 * 2. Or implement rate limiting (e.g., once per session, once per hour)
 * 3. Or add a toggle in settings to enable/disable
 */

const useVisitTracker = (enabled = true) => {
  useEffect(() => {
    if (!enabled) return;

    const trackVisit = async () => {
      try {
        // Get visit info
        const visitData = {
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer || 'Direct',
          screenSize: `${window.screen.width}x${window.screen.height}`,
          language: navigator.language
        };

        // Send to serverless function
        const response = await fetch('/api/notify-visit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(visitData)
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Visit tracked:', data);
        }
      } catch (error) {
        // Fail silently - don't disrupt user experience
        console.error('Visit tracking error:', error);
      }
    };

    // Track visit on mount
    trackVisit();
  }, [enabled]);
};

export default useVisitTracker;
