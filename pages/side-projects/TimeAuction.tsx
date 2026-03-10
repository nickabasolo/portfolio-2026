import React from 'react';
import { TextContent } from '../../components/CaseStudyPrimitives';
import CaseStudyLayout from '../../components/CaseStudyLayout';
import { useScrollToTop } from '../../hooks/useScrollToTop';

export const summary = {
  id: 'time-auction',
  kind: 'side-project' as const,
  title: 'Time Auction: A multiplayer party game',
  subtitle: 'A multiplayer party game inspired by Netflix\'s Devil\'s Plan.',
  description: 'A real-time, multiplayer party game where players bid their time in real-time auctions, inspired by Netflix\'s The Devil\'s Plan. Created in Cursor AI with Node.js and Socket.IO.',
  image: 'assets/side-projects/time-auction-hero.png',
  category: 'Game Design',
  role: 'Vibe Coder',
  duration: 'In Progress',
  company: 'Personal Project',
  tags: ['Game Design', 'AI-Assisted', 'Web App'],
};

const TimeAuction: React.FC = () => {
  useScrollToTop();
  return (
    <CaseStudyLayout image={summary.image} isSideProject>
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <TextContent>
        <p>Content coming soon.</p>
      </TextContent>
      </div>
    </CaseStudyLayout>
  );
};

export default TimeAuction;
