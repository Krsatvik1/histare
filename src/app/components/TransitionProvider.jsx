'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import TransitionContext from '../context/TransitionContext';

export default function TransitionProvider({ children }) {
    const router = useRouter();
    const pathname = usePathname();
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [transitionText, setTransitionText] = useState("");

    // Helper to render text with italicized "Our"
    // Matches the structure: <span className="italic font-normal">Our </span> <span className="not-italic font-normal">Framework</span>
    const renderTransitionText = (text) => {
        if (!text) return null;
        const parts = text.split(' ');
        return (
            <>
                {parts.map((part, index) => (
                    <span key={index} className={part === 'Our' ? 'italic font-normal' : 'not-italic font-normal'}>
                        {part}{index < parts.length - 1 ? ' ' : ''}
                    </span>
                ))}
            </>
        );
    };

    const navigate = (path, text) => {
        if (path === pathname) return; // Don't transition if already on the page
        setTransitionText(text);
        setIsTransitioning(true);

        // Wait for enter animation before pushing route
        setTimeout(() => {
            router.push(path);
        }, 1200); // Match animation duration
    };

    // Detect route change to hide overlay
    useEffect(() => {
        if (isTransitioning) {
            // Small delay to ensure new page is ready/mounted before revealing
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setTransitionText("");
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [pathname]);

    return (
        <TransitionContext.Provider value={{ navigate }}>
            {/* Transition Overlay */}
            <AnimatePresence>
                {isTransitioning && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-[9999] bg-[#F3F0ED] flex flex-col pointer-events-none pr-[10px]"
                    >
                        {/* 
                Replicating the exact structure of framework/page.jsx:
                <div className="snap-start min-h-screen w-full flex flex-col">
                  <Navbar /> (Height approx 80px-100px depending on screen)
                  <div className="flex-1 flex items-center justify-center px-6 md:px-20 ...">
             */}

                        {/* Fake Navbar Spacer removed as real Navbar is fixed and doesn't affect flow */}

                        {/* Main Content Area - Exact match to page.jsx */}
                        {/* Main Content Area */}
                        <div className="flex-1 flex items-center justify-center px-6 md:px-20">
                            {transitionText === "Envisioning Artistic Mastery Histare nurtures India's primitive and prospective expressions through cultural evolution." ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                                    className="relative z-20 flex flex-col items-center text-center"
                                >
                                    <h1
                                        className="md:text-9xl text-6xl font-serif text-[#3c5978] mb-4 max-w-5xl"
                                        style={{ fontFamily: 'Rofane' }}
                                    >
                                        Envisioning <br /> Artistic Mastery
                                    </h1>
                                    <p className="text-[16px] sm:text-[18px] md:text-[22px] text-[#333333] max-w-lg sm:max-w-2xl !p-0 w-full" style={{ fontFamily: 'Optima' }}>
                                        Histare nurtures India's primitive and prospective expressions
                                        <br className="hidden sm:inline" />
                                        through cultural evolution.
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.h2
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                                    className="text-4xl md:text-8xl text-[#3c597B] text-center"
                                    style={{ fontFamily: "Rofane", fontStyle: "italic" }}
                                >
                                    {renderTransitionText(transitionText)}
                                </motion.h2>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {children}
        </TransitionContext.Provider>
    );
}
