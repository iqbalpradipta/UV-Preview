import { useEffect } from 'react';

export default function PrelineScript() {
  useEffect(() => {
    const loadPreline = async () => {
      await import('preline/preline');
      if (typeof window !== 'undefined') {
        window.HSStaticMethods.autoInit();
      }
    };
    loadPreline();
  }, []);

  return null;
}