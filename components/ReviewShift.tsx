import React, { useState, useEffect, useRef } from 'react';
import './ReviewShift.css';

const ReviewShift: React.FC = () => {
    const [replayKey, setReplayKey] = useState(0);
    const paidTimeRef = useRef<HTMLSpanElement>(null);
    const estEarningsRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        // Animation Logic
        const animateTime = (element: HTMLSpanElement) => {
            const targetStr = element.getAttribute('data-target'); // "07:32:03"
            if (!targetStr) return;

            const [h, m, s] = targetStr.split(':').map(Number);
            const totalSeconds = h * 3600 + m * 60 + s;

            const duration = 2000; // 2 seconds
            let startTime: number | null = null;

            const update = (currentTime: number) => {
                if (!startTime) startTime = currentTime;
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Ease out quart: 1 - (1-t)^4
                const ease = 1 - Math.pow(1 - progress, 4);

                const currentTotal = totalSeconds * ease;
                const formatted = formatTime(Math.floor(currentTotal));

                element.textContent = formatted;

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    element.textContent = targetStr;
                }
            };

            requestAnimationFrame(update);
        };

        const animateValue = (element: HTMLSpanElement) => {
            const targetStr = element.getAttribute('data-target'); // "107.09"
            if (!targetStr) return;

            const targetValue = parseFloat(targetStr);

            const duration = 2000;
            let startTime: number | null = null;

            const update = (currentTime: number) => {
                if (!startTime) startTime = currentTime;
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                const ease = 1 - Math.pow(1 - progress, 4);

                const currentVal = targetValue * ease;
                element.textContent = '$' + currentVal.toFixed(2);

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    element.textContent = '$' + targetValue.toFixed(2);
                }
            };

            requestAnimationFrame(update);
        };

        const formatTime = (totalSeconds: number) => {
            const h = Math.floor(totalSeconds / 3600);
            const m = Math.floor((totalSeconds % 3600) / 60);
            const s = totalSeconds % 60;

            const pad = (num: number) => num.toString().padStart(2, '0');
            return `${pad(h)}:${pad(m)}:${pad(s)}`;
        };

        // Trigger animations after mount (and slight delay for CSS entrance)
        const timer = setTimeout(() => {
            if (paidTimeRef.current) animateTime(paidTimeRef.current);
            if (estEarningsRef.current) animateValue(estEarningsRef.current);
        }, 600);

        return () => clearTimeout(timer);
    }, [replayKey]);

    return (
        <div className="review-shift-wrapper relative">
            <button
                onClick={() => setReplayKey(k => k + 1)}
                className="absolute -top-6 -right-6 z-50 flex items-center gap-3 bg-white hover:bg-stone-50 text-stone-900 px-10 py-4 rounded-full transition-colors text-xs font-semibold tracking-wide uppercase shadow-lg border border-stone-200"
            >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 4v6h-6" />
                    <path d="M1 20v-6h6" />
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                </svg>
                Replay Animation
            </button>
            <div className="app-container" key={replayKey}>
                {/* Status Bar */}
                <div className="status-bar">
                    <span className="status-time">19:12</span>
                    <div className="status-icons">
                        {/* Cell Signal */}
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
                            <path d="M1 10H3V12H1V10ZM5 7H7V12H5V7ZM9 4H11V12H9V4ZM13 1H15V12H13V1Z" />
                        </svg>
                        {/* Wifi */}
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.00008 1.99998C10.5985 1.99998 12.9818 2.92388 14.8285 4.46873L16.1147 2.93098C13.9165 1.0924 11.0931 -0.00012207 8.00008 -0.00012207C4.90703 -0.00012207 2.08369 1.0924 -0.114502 2.93098L1.17173 4.46873C3.01837 2.92388 5.40171 1.99998 8.00008 1.99998ZM8.00008 5.99998C9.5222 5.99998 10.9209 6.5262 12.0195 7.41113L13.3057 5.87328C11.8793 4.67919 10.0357 3.99988 8.00008 3.99988C5.96443 3.99988 4.12089 4.67919 2.6945 5.87328L3.98068 7.41113C5.07923 6.5262 6.47796 5.99998 8.00008 5.99998ZM8.00008 9.99999C8.44199 9.99999 8.86877 10.0811 9.26354 10.2285L8.00008 11.7391L6.73663 10.2285C7.13139 10.0811 7.55818 9.99999 8.00008 9.99999Z" />
                        </svg>
                        {/* Battery */}
                        <svg width="22" height="12" viewBox="0 0 24 12" fill="currentColor">
                            <rect x="1" y="1" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                            <rect x="3" y="3" width="14" height="6" rx="1" fill="currentColor" />
                            <path d="M22 4V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

                {/* Header */}
                <header className="top-nav">
                    <button className="icon-btn back-btn" aria-label="Go back">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <h1>Review shift</h1>
                    <button className="icon-btn menu-btn" aria-label="Menu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="19" cy="12" r="1" />
                            <circle cx="5" cy="12" r="1" />
                        </svg>
                    </button>
                </header>

                <main className="content">
                    <section className="intro-section">
                        <h2>Review your shift</h2>
                        <p className="subtitle">Nice work today! Now let’s review your shift so your pay is accurate.</p>

                        <div className="stats-row">
                            <div className="stat-item">
                                <span className="stat-label">Paid time</span>
                                <span className="stat-value" ref={paidTimeRef} data-target="07:32:03">00:00:00</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Estimated earnings</span>
                                <span className="stat-value" ref={estEarningsRef} data-target="107.09">$0.00</span>
                            </div>
                        </div>
                    </section>

                    <section className="timeline-card">
                        <div className="card-header">
                            <h3>Timeline</h3>
                            <span className="timeline-total">8h 05m total</span>
                        </div>

                        <div className="timeline-events">
                            {/* Start Shift */}
                            <div className="timeline-item">
                                <div className="timeline-marker success">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <div className="timeline-content">
                                    <div className="event-title">Start shift</div>
                                    <div className="event-time">9:16am</div>
                                </div>
                            </div>

                            {/* Quick Break */}
                            <div className="timeline-item">
                                <div className="timeline-marker success">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <div className="timeline-content">
                                    <div className="event-title">Quick break</div>
                                    <div className="event-time">1:43 PM - 2:16 PM • 11 mins unpaid</div>
                                </div>
                            </div>

                            {/* Lunch Break (Missed) */}
                            <div className="timeline-item error-item">
                                <div className="timeline-marker error">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </div>
                                <div className="timeline-content">
                                    <div className="event-title">Lunch break</div>
                                    <div className="event-time">Missed break • Scheduled for 10min</div>

                                    <div className="error-alert">
                                        <svg className="alert-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="12" y1="8" x2="12" y2="12"></line>
                                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                        </svg>
                                        <span>You didn’t log this break. <button className="link-btn">Request edit</button></span>
                                    </div>
                                </div>
                            </div>

                            {/* End Shift */}
                            <div className="timeline-item last-item">
                                <div className="timeline-marker success">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <div className="timeline-content">
                                    <div className="event-title">End shift</div>
                                    <div className="event-time">3:17 PM</div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <button className="primary-btn">Confirm</button>
                </main>


            </div>
        </div>
    );
};

export default ReviewShift;
