'use client';

import { useRef, useState, useEffect } from 'react';
import Header from './header';
import Welcome from './page/Welcome';
import Talkai from './page/Talkai';

interface Section {
  id: number;
  title: string;
  bgColor: string;
  content: React.ReactNode;
}

export default function FullPageHorizontalScroll() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);

  const sections: Section[] = [
    {
      id: 1,
      title: 'Welcome',
      bgColor: 'bg-gradient-to-br from-blue-500 to-purple-600',
      content: (
        <div>
          <Welcome />
        </div>
      ),
    },
    {
      id: 2,
      title: 'talkAI',
      bgColor: 'bg-gradient-to-br from-green-500 to-teal-600',
      content: (
        <div className="text-center">
          <Talkai />
        </div>
      ),
    },
    {
      id: 3,
      title: 'Services',
      bgColor: 'bg-gradient-to-br from-orange-500 to-red-600',
      content: (
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Services</h1>
          <p className="text-2xl">บริการของเรา</p>
        </div>
      ),
    },
    {
      id: 4,
      title: 'Contact',
      bgColor: 'bg-gradient-to-br from-pink-500 to-rose-600',
      content: (
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Contact</h1>
          <p className="text-2xl">ติดต่อเรา</p>
        </div>
      ),
    },
    {
      id: 5,
      title: 'บล็อก',
      bgColor: 'bg-gradient-to-br from-yellow-500 to-amber-600',
      content: (
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Blog</h1>
          <p className="text-2xl">บล็อก</p>
        </div>
      ),
    },
  ];

  const navigateToSection = (sectionIndex: number) => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = window.innerWidth * sectionIndex;

    scrollContainerRef.current.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });

    setCurrentSection(sectionIndex);
  };

  const scrollToSection = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const newSection =
      direction === 'right'
        ? Math.min(currentSection + 1, sections.length - 1)
        : Math.max(currentSection - 1, 0);

    navigateToSection(newSection);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        scrollToSection('left');
      } else if (e.key === 'ArrowRight') {
        scrollToSection('right');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection]);

  // Mouse wheel horizontal scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // ป้องกัน default vertical scroll
      e.preventDefault();
      
      // แปลง vertical wheel เป็น horizontal scroll
      const delta = e.deltaY || e.deltaX;
      
      container.scrollBy({
        left: delta,
        behavior: 'smooth', // เลื่อนแบบ smooth
      });
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fixed Header */}
      <Header onNavigate={navigateToSection} />
      
      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex h-screen overflow-x-scroll overflow-y-hidden snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {sections.map((section) => (
          <div
            key={section.id}
            className={`flex-shrink-0 w-screen h-screen snap-start flex items-center justify-center ${section.bgColor} text-white`}
          >
            {section.content}
          </div>
        ))}
      </div>
{/*     
      {currentSection > 0 && (
        <button
          onClick={() => scrollToSection('left')}
          className="fixed left-8 top-1/2 -translate-y-1/2 z-50 bg-white/20 dark:bg-zinc-800/50 backdrop-blur-md hover:bg-white/30 dark:hover:bg-zinc-800/70 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
          aria-label="Previous Section"
        >
          <svg
            className="w-8 h-8 text-white drop-shadow-lg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {currentSection < sections.length - 1 && (
        <button
          onClick={() => scrollToSection('right')}
          className="fixed right-8 top-1/2 -translate-y-1/2 z-50 bg-white/20 dark:bg-zinc-800/50 backdrop-blur-md hover:bg-white/30 dark:hover:bg-zinc-800/70 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
          aria-label="Next Section"
        >
          <svg
            className="w-8 h-8 text-white drop-shadow-lg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )} 

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-3">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => {
              const scrollAmount = window.innerWidth * index;
              scrollContainerRef.current?.scrollTo({
                left: scrollAmount,
                behavior: 'smooth',
              });
              setCurrentSection(index);
            }}
            className={`transition-all duration-300 rounded-full ${
              currentSection === index
                ? 'w-12 h-3 bg-white'
                : 'w-3 h-3 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to ${section.title}`}
          />
        ))}
      </div>
*/}
      {/* Hide Scrollbar CSS */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
