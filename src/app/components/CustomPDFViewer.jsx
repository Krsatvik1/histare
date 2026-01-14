'use client';

import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { X } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function CustomPDFViewer({ url, title, onClose }) {
    const [numPages, setNumPages] = useState(null);
    const [containerWidth, setContainerWidth] = useState(null);
    const [loading, setLoading] = useState(true);
    const containerRef = React.useRef(null);

    // Handle resize to auto-scale PDF
    useEffect(() => {
        if (!containerRef.current) return;

        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.contentRect) {
                    // Subtract padding/margins if needed, here we use full width minus some buffer
                    setContainerWidth(entry.contentRect.width); // 48px for padding (24px each side)
                }
            }
        });

        resizeObserver.observe(containerRef.current);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setLoading(false);
    }

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col bg-[rgb(243,240,237)] text-black">
            {/* Floating Close Button */}
            <button
                onClick={onClose}
                className="fixed top-6 right-8 z-[10000] p-3 bg-black/10 hover:bg-black/20 backdrop-blur-sm rounded-full text-black transition-all shadow-lg border border-black/5"
                title="Close"
            >
                <X size={24} />
            </button>

            {/* PDF Content - Scrollable Container */}
            <div
                ref={containerRef}
                className="flex-1 overflow-y-auto overflow-x-hidden flex justify-center p-2 md:p-12 bg-[rgb(243,240,237)] scroll-smooth"
            >
                <Document
                    file={url}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={
                        <div className="flex items-center justify-center h-full w-full absolute inset-0">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                        </div>
                    }
                    error={
                        <div className="flex items-center justify-center h-full text-red-400">
                            Failed to load PDF. Please try downloading it instead.
                        </div>
                    }
                    className="flex flex-col gap-8 items-center w-full max-w-5xl"
                >
                    {numPages && Array.from(new Array(numPages), (el, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            width={containerWidth ? Math.min(containerWidth, 1000) : undefined} // Cap max width
                            renderTextLayer={true}
                            renderAnnotationLayer={true}
                            className="shadow-2xl !bg-white"
                            loading={
                                <div className="h-[800px] w-full bg-white/5 animate-pulse rounded-lg mb-8"></div>
                            }
                        />
                    ))}
                </Document>
            </div>
        </div>
    );
}
