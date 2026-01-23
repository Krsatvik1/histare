import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const programs = [
    {
        id: 'collectors',
        name: "Collector's Affaire",
        image: '/images/art/Rect.webp',
        href: '/collectors',
        bgColor: '#2B3730'
    },
    {
        id: 'erbe',
        name: 'The Erbe Project',
        image: '/images/landing/ERBE.webp',
        href: '/erbe',
        bgColor: '#6B2134'
    },
    {
        id: 'vitrine',
        name: 'The Vitrine',
        image: '/images/landing/VITRINE.webp',
        href: '/vitrine',
        bgColor: '#0E2B4C'
    },
    {
        id: 'now',
        name: 'Now and Beyond',
        image: '/images/landing/NOW.webp',
        href: '/now',
        bgColor: '#FFFFFF'
    }
];

export default function MorePrograms({ currentProgram }) {
    const otherPrograms = programs.filter(p => p.id !== currentProgram);

    // Get the background color for the current page based on the current program
    const currentProgramData = programs.find(p => p.id === currentProgram);
    const sectionBgColor = currentProgramData ? currentProgramData.bgColor : '#2B3730';

    // Determine text color: dark for 'now' (white bg), white for others
    const textColor = currentProgram === 'now' ? 'text-[#2B3730]' : 'text-white';

    return (
        <section
            className="snap-start min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-20 py-16"
            style={{ backgroundColor: sectionBgColor }}
        >
            <h2
                className={`text-4xl md:text-5xl ${textColor} text-center mb-12`}
                style={{ fontFamily: 'Playfair Display' }}
            >
                More from RangaVistara
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
                {otherPrograms.map((program) => (
                    <Link
                        key={program.id}
                        href={program.href}
                        className="group"
                    >
                        <div
                            className="rounded-xl overflow-hidden aspect-square flex items-center justify-center p-8 transition-transform hover:scale-105 shadow-lg"
                            style={{ backgroundColor: program.bgColor }}
                        >
                            <Image
                                src={program.image}
                                alt={program.name}
                                width={300}
                                height={300}
                                className="object-contain w-full h-full"
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
