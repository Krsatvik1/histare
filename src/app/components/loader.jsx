'use client';

import { useEffect, useState } from 'react';

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time or wait for window load
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            // Fallback timeout in case load event doesn't fire or already fired
            const timeoutId = setTimeout(handleLoad, 3000);
            return () => {
                window.removeEventListener('load', handleLoad);
                clearTimeout(timeoutId);
            };
        }
    }, []);

    return (
        <>
            <style jsx global>{`
        #global-loader {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #F3F0ED;
          transition: opacity 1.5s ease-in-out;
          opacity: 1;
          pointer-events: all;
        }
        #global-loader.loader-hidden {
          opacity: 0;
          pointer-events: none;
        }
        .loader-inner {
          width: 1rem;
          height: 1rem;
          background-color: #3c597B;
          transform: rotate(45deg);
          transition: transform 0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045);
        }
        #global-loader.loader-hidden .loader-inner {
          transform: rotate(45deg) scale(0);
        }
        .loader-outer {
          position: absolute;
          width: 2rem;
          height: 2rem;
          border: 1px solid #3c597B;
          transform: rotate(45deg);
          animation: loader-pulse 2s infinite ease-in-out;
        }
        #global-loader.loader-hidden .loader-outer {
          animation: none;
          transform: rotate(45deg) scale(80);
          border-width: 1px;
          opacity: 0;
          transition: transform 1.2s ease-in-out, opacity 1.2s ease-in-out;
        }
        @keyframes loader-pulse {
          0% { transform: rotate(45deg) scale(1); opacity: 1; }
          50% { transform: rotate(45deg) scale(1.4); opacity: 0.5; }
          100% { transform: rotate(45deg) scale(1); opacity: 1; }
        }
      `}</style>
            <div id="global-loader" className={!isLoading ? 'loader-hidden' : ''}>
                <div className="relative flex items-center justify-center">
                    <div className="loader-inner"></div>
                    <div className="loader-outer"></div>
                </div>
            </div>
        </>
    );
}
