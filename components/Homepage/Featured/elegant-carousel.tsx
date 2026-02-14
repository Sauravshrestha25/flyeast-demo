'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface SlideData {
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  imageUrl: string;
}

const slides: SlideData[] = [
  {
    title: 'Everest Base Camp',
    subtitle: 'High Altitude Expedition',
    description:
      'Follow the legendary Khumbu trail beneath towering Himalayan giants. Suspension bridges, Sherpa villages, and the final ascent toward the foot of the world’s highest peak.',
    accent: '#8FA3B0',
    imageUrl:
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&h=1200&fit=crop&q=80',
  },
  {
    title: 'Annapurna Circuit',
    subtitle: 'Classic Himalayan Traverse',
    description:
      'From lush subtropical valleys to the windswept Thorong La Pass — a journey through shifting landscapes, ancient monasteries, and timeless mountain culture.',
    accent: '#9C8B6E',
    imageUrl:
      'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=900&h=1200&fit=crop&q=80',
  },
  {
    title: 'Everest Heli Flyover',
    subtitle: 'Luxury Aerial Experience',
    description:
      'Rise above glaciers and icefalls in a private helicopter. Witness Everest, Lhotse, and Ama Dablam from the sky — a once-in-a-lifetime Himalayan panorama.',
    accent: '#6F8F9D',
    imageUrl:
     'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=900&h=1200&fit=crop&q=80',
  },
  {
    title: 'Upper Mustang',
    subtitle: 'Restricted Kingdom Expedition',
    description:
      'Enter the hidden desert of the Himalayas — red cliffs, ancient caves, and Tibetan-influenced monasteries in Nepal’s last forbidden kingdom.',
    accent: '#B07A4F',
    imageUrl:
      'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=900&h=1200&fit=crop&q=80',
  },
];


export default function ElegantCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const SLIDE_DURATION = 6000;
  const TRANSITION_DURATION = 800;

  const goToSlide = useCallback(
    (index: number, dir?: 'next' | 'prev') => {
      if (isTransitioning || index === currentIndex) return;
      setDirection(dir || (index > currentIndex ? 'next' : 'prev'));
      setIsTransitioning(true);
      setProgress(0);

      setTimeout(() => {
        setCurrentIndex(index);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, TRANSITION_DURATION / 2);
    },
    [isTransitioning, currentIndex]
  );

  const goNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex, 'next');
  }, [currentIndex, goToSlide]);

  const goPrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIndex, 'prev');
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    if (isPaused) return;

    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 100 / (SLIDE_DURATION / 50);
      });
    }, 50);

    intervalRef.current = setInterval(() => {
      goNext();
    }, SLIDE_DURATION);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [currentIndex, isPaused, goNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 60) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const currentSlide = slides[currentIndex];

  return (
  <div
    className="relative w-full min-h-screen bg-[#0B0F1A]  text-white overflow-hidden"
    onMouseEnter={() => setIsPaused(true)}
    onMouseLeave={() => setIsPaused(false)}
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}
  >
   
    {/* Background Accent */}
    <div
      className="absolute inset-0 transition-all duration-700"
      style={{
        background: `radial-gradient(ellipse at 70% 50%, ${currentSlide.accent}20 0%, transparent 70%)`,
      }}
    />
  <h3 className=' text-center text-white font-bold text-8xl tracking-wide pt-40'>Signature <span className='text-brand'>Himalayan Journeys</span> </h3>
    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      
      {/* LEFT SIDE */}
      <div className="flex items-center px-8 md:px-16 py-20">
        <div className="max-w-xl space-y-8">

          {/* Slide Counter */}
          <div className="flex items-center gap-4 text-[24px] tracking-widest text-white/60">
            <div className="w-12 h-0.5 bg-white/40" />
            <span>
              {String(currentIndex + 1).padStart(2, '0')} /{' '}
              {String(slides.length).padStart(2, '0')}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-7xl font-primary leading-tight transition-all duration-700">
            {currentSlide.title}
          </h2>

          {/* Subtitle */}
          <p
            className="uppercase  text-[20px] text-brand "
            // style={{ color: currentSlide.accent }}
          >
            {currentSlide.subtitle}
          </p>

          {/* Description */}
          <p className="text-white/70 text-lg leading-relaxed font-secondary">
            {currentSlide.description}
          </p>

          {/* Arrows */}
          <div className="flex gap-4 pt-6">
            <button
              onClick={goPrev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={goNext}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative flex items-center justify-center p-10">
        <div className="relative w-95 md:w-120 aspect-3/4 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700">
          <img
            src={currentSlide.imageUrl}
            alt={currentSlide.title}
            className="w-full h-full object-cover"
          />

          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${currentSlide.accent}30 0%, transparent 60%)`,
            }}
          />
        </div>
      </div>
    </div>

    {/* Progress Navigation */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl flex gap-6">
      {slides.map((slide, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className="flex-1 text-left group"
        >
          <div className="h-1 bg-white/20 relative overflow-hidden">
            <div
              className="h-full transition-all duration-100"
              style={{
                width:
                  index === currentIndex
                    ? `${progress}%`
                    : index < currentIndex
                    ? '100%'
                    : '0%',
                backgroundColor:
                  index === currentIndex
                    ? currentSlide.accent
                    : undefined,
              }}
            />
          </div>

          <span className="block mt-2 text-sm text-white/60 group-hover:text-white transition">
            {slide.title}
          </span>
        </button>
      ))}
    </div>
  </div>
);

}