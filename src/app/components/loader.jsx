'use client';

import { useEffect } from 'react';

export default function Loader() {
  useEffect(() => {
    const loader = document.getElementById('global-loader');
    if (!loader) return;

    const hideLoader = () => {
      loader.classList.add('loader-hidden');
    };

    // Simulate loading time or wait for window load
    const handleLoad = () => {
      setTimeout(hideLoader, 2000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      // Fallback timeout
      const timeoutId = setTimeout(handleLoad, 3000);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  return null; // No UI, just logic
}
