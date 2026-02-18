import React, { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
    beforeSrc: string;
    afterSrc: string;
    alt: string;
    className?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
    beforeSrc,
    afterSrc,
    alt,
    className = '',
}) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const [containerRect, setContainerRect] = useState<DOMRect | null>(null);

    const handleMove = (clientX: number) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
            const percentage = (x / rect.width) * 100;
            setSliderPosition(percentage);
        }
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleTouchStart = () => setIsDragging(true);

    const handleMouseUp = () => setIsDragging(false);
    const handleTouchEnd = () => setIsDragging(false);

    useEffect(() => {
        const handleUp = () => setIsDragging(false);

        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging) {
                handleMove(e.clientX);
            }
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (isDragging) {
                handleMove(e.touches[0].clientX);
            }
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleUp);
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('touchend', handleUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleUp);
        };
    }, [isDragging]);

    return (
        <div
            ref={containerRef}
            className={`relative w-full select-none cursor-col-resize group rounded-xl shadow-2xl overflow-hidden ${className}`}
            onMouseDown={(e) => handleMove(e.clientX)}
            onTouchStart={(e) => handleMove(e.touches[0].clientX)}
        >
            <div className="relative w-full">
                {/* After Image (Background - Right Side) */}
                <img
                    src={afterSrc}
                    alt={`${alt} - After`}
                    className="w-full h-auto block pointer-events-none"
                />

                {/* Before Image (Foreground - Left Side - Clipped) */}
                <div
                    className="absolute top-0 left-0 h-full w-full pointer-events-none"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <img
                        src={beforeSrc}
                        alt={`${alt} - Before`}
                        className="absolute top-0 left-0 w-full h-full object-cover max-w-none"
                    />
                </div>

                {/* Slider Handle */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                    style={{ left: `${sliderPosition}%` }}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stone-800">
                            <path d="M18 8L22 12L18 16" />
                            <path d="M6 8L2 12L6 16" />
                        </svg>
                    </div>
                </div>

                {/* Labels */}
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded pointer-events-none z-20">
                    Before
                </div>
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded pointer-events-none z-20">
                    After
                </div>
            </div>
        </div>
    );
};

export default BeforeAfterSlider;
