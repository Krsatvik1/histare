'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

const isVideo = (src) => {
    if (!src) return false;
    const ext = src.split('.').pop().toLowerCase();
    return ext === 'mp4' || ext === 'webm';
};

export default function MobileStoryView({ items, sectionLogoSrc, nextSectionId, onItemClick, onViewAll }) {
    // Flatten items to handle grouped images as individual slides
    const flatItems = React.useMemo(() => {
        const flat = [];
        items.forEach(item => {
            if (item.isGroup && item.images) {
                item.images.forEach((img, idx) => {
                    flat.push({
                        ...item,
                        img: img, // Override main img with specific group image
                        isGroupChild: true,
                        groupIndex: idx,
                        totalGroup: item.images.length,
                        id: `${item.id}-${idx}` // Unique ID
                    });
                });
            } else {
                flat.push(item);
            }
        });
        return flat;
    }, [items]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(0);
    const [direction, setDirection] = useState(0);
    const touchStart = useRef(null);
    const touchEnd = useRef(null);
    const progressInterval = useRef(null);
    const DURATION = 5000; // 5 seconds per slide
    const UPDATE_INTERVAL = 20; // Update every 20ms

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    // Timer logic
    useEffect(() => {
        if (isPaused) return;

        const startTime = Date.now() - (progress / 100) * DURATION;

        progressInterval.current = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / DURATION) * 100, 100);

            setProgress(newProgress);

            if (newProgress >= 100) {
                goToNext();
            }
        }, UPDATE_INTERVAL);

        return () => clearInterval(progressInterval.current);
    }, [currentIndex, isPaused]);

    const goToNext = () => {
        setDirection(1);
        setCurrentIndex(prev => (prev + 1) % flatItems.length);
        setProgress(0); // Reset immediately to prevent race condition
    };

    const goToPrev = () => {
        setDirection(-1);
        setCurrentIndex(prev => (prev - 1 + flatItems.length) % flatItems.length);
        setProgress(0); // Reset immediately
    };

    // Touch Handlers
    const onTouchStart = (e) => {
        touchEnd.current = null;
        touchStart.current = {
            x: e.targetTouches[0].clientX,
            y: e.targetTouches[0].clientY
        };
        setIsPaused(true); // Pause on touch/hold
    };

    const onTouchMove = (e) => {
        touchEnd.current = {
            x: e.targetTouches[0].clientX,
            y: e.targetTouches[0].clientY
        };
    };

    const onTouchEnd = () => {
        setIsPaused(false);
        if (!touchStart.current || !touchEnd.current) return;

        const xDiff = touchStart.current.x - touchEnd.current.x;
        const minSwipeDistance = 50;

        // Horizontal Swipe
        if (Math.abs(xDiff) > minSwipeDistance) {
            if (xDiff > 0) {
                goToNext(); // Swipe Left -> Next
            } else {
                goToPrev(); // Swipe Right -> Prev
            }
        }
    };

    const currentItem = flatItems[currentIndex];
    const isCurrentVideo = isVideo(currentItem?.img);

    return (
        <div
            className="flex flex-col h-dvh w-full bg-[#F3F0ED] relative overflow-hidden p-4"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {/* Header & Progress */}
            <div className="w-full flex flex-col gap-4 mb-4 shrink-0">
                {/* Logo */}
                <div className="flex justify-center items-center h-[60px]">
                    {sectionLogoSrc && (
                        <Image
                            src={sectionLogoSrc}
                            alt="Section Logo"
                            width={200}
                            height={60}
                            className="object-contain h-full"
                        />
                    )}
                </div>

                {/* View All Works CTA */}
                {onViewAll && (
                    <div className="flex justify-center">
                        <button
                            onClick={(e) => { e.stopPropagation(); onViewAll(); }}
                            className="border border-[#3c597B] text-[#3c597B] rounded-[25px] px-5 py-1.5 text-[12px] uppercase tracking-wide"
                            style={{ fontFamily: 'Optima' }}
                        >
                            View All Works
                        </button>
                    </div>
                )}

                {/* Progress Bars */}
                <div className="flex gap-1 h-1 w-full">
                    {flatItems.map((_, idx) => (
                        <div key={idx} className="flex-1 bg-gray-300 rounded-full overflow-hidden h-full">
                            <div
                                className="h-full bg-black transition-all duration-linear ease-linear"
                                style={{
                                    width: idx < currentIndex ? '100%' : idx === currentIndex ? `${progress}%` : '0%',
                                    transitionDuration: idx === currentIndex ? '20ms' : '0ms'
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content Wrapper for Animation */}
            <div className="flex-1 relative w-full overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="absolute inset-0 flex flex-col w-full h-full"
                    >
                        {/* Image Card */}
                        <div className="w-full flex justify-center items-center bg-gray-100/50 rounded-xl overflow-hidden mb-4 relative shrink-0" style={{ height: '50dvh' }}>
                            {isCurrentVideo ? (
                                <video
                                    src={currentItem.img}
                                    className="w-full h-full object-contain"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            ) : (
                                <Image
                                    src={currentItem.img}
                                    alt={currentItem.title || "Artwork"}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            )}
                        </div>

                        {/* Details Section */}
                        <div className="flex-1 flex flex-col justify-between" style={{ fontFamily: 'Optima' }}>
                            <div className="text-black text-center">
                                {currentItem.title && currentItem.title.toLowerCase() !== 'untitled' && (
                                    <div className="text-lg font-semibold mb-1">{currentItem.title}</div>
                                )}
                                {(currentItem.medium || currentItem.material) && (
                                    <div className="text-sm text-gray-600 mb-1 line-clamp-2">
                                        Material: {currentItem.medium || currentItem.material}
                                    </div>
                                )}
                                {currentItem.size && (
                                    <div className="text-sm text-gray-500">Size: {currentItem.size}</div>
                                )}
                                {currentItem.isGroupChild && (
                                    <p className="text-xs text-gray-400 mt-1">Image {currentItem.groupIndex + 1} of {currentItem.totalGroup}</p>
                                )}
                            </div>

                            {/* Action Button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (onItemClick) onItemClick(currentItem);
                                }}
                                className="w-full bg-gray-200 text-black py-4 rounded-lg font-semibold text-lg mt-4 hover:bg-gray-300 transition-colors shrink-0"
                            >
                                {currentItem.author || "View Details"}
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
