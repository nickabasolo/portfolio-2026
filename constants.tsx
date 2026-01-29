
import { CaseStudy, SideProject } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'time-clock',
    title: 'Time Clock: A Multi-modal Ecosystem',
    subtitle: 'Designing a reliable way for hourly workers to clock in that prevents payroll errors and saves managers 10+ hours of manual paperwork every week.',
    role: 'Senior Product Designer',
    duration: '4 Months',
    company: 'Workstream',
    image: 'casestudy01-hero.gif',
    tags: ['Labor Compliance', 'Mobile UX', 'Behavioral Design'],
    overview: 'The worker clock-in is the most critical touchpoint in the labor lifecycle. I redesigned this flow to move compliance resolution from the manager’s Sunday night to the worker’s daily exit.',
    problem: 'Managers were losing 5+ hours a week to admin overhead: manually auditing and correcting flagged timecards that their workers were punching in to the system.',
    solution: 'On top of improving the manager’s administrative experience, I pivoted the solution by moving the resolution upstream, exposing real-time compliance logic to workers and replacing manual manager audits with worker-led edit suggestions.',
    impact: [
      '70% Reduction in flagged timecards',
      '4.5 Hours/Week Reclaimed',
      'Increased Pay Transparency'
    ],
    summary: {
      problem: "Managers were losing 5+ hours a week to admin overhead: manually auditing and correcting flagged timecards that their workers were punching in to the system.",
      solution: "On top of improving the manager’s administrative experience, I pivoted the solution by moving the resolution upstream, exposing real-time compliance logic to workers and replacing manual manager audits with worker-led edit suggestions.",
      outcome: "70% reduction in manual timecard edits and 4.5 hours reclaimed per manager, per week."
    }
  },
  {
    id: 'performance-reviews',
    title: 'Performance Reviews: A Multi-user Flow',
    subtitle: 'Building a guided review process that helps teams give consistent, unbiased feedback and tracks employee growth without the administrative friction.',
    role: 'Senior Product Designer',
    duration: 'Ongoing',
    company: 'Workstream',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    tags: ['Performance Management', 'Multi-user Flows', 'B2B'],
    overview: '',
    problem: '',
    solution: '',
    impact: [],
    summary: {
      problem: "Traditional reviews in high-turnover industries are often skipped or handled poorly due to administrative complexity.",
      solution: "A guided, low-friction flow that simplifies feedback loops for both managers and workers.",
      outcome: "In development."
    }
  },
  {
    id: 'manager-dashboard',
    title: 'Manager Dashboard: Operational Visibility',
    subtitle: 'Consolidating fragmented labor data into a single view so managers can spot staffing issues and fix operational delays before they impact the bottom line.',
    role: 'Senior Product Designer',
    duration: 'In Progress',
    company: 'Workstream',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    tags: ['Data Visualization', 'Dashboard Design', 'Enterprise'],
    overview: '',
    problem: '',
    solution: '',
    impact: [],
    summary: {
      problem: "Fragmented labor data across multiple tools makes it impossible for managers to see operational health in real-time.",
      solution: "A unified cockpit that surface exceptions and critical staffing gaps automatically.",
      outcome: "In development."
    }
  }
];

export const SIDE_PROJECTS: SideProject[] = [
  {
    id: 'guardian-data-viz',
    title: 'The Crunch: Data Storytelling',
    subtitle: 'Featured in The Guardian: Visualizing the intersections of climate, conflict, and Canadian politics.',
    description: 'A data visualization project exploring global crises, from marine heatwaves to geopolitical shifts. Featured in The Guardian’s "The Crunch" series.',
    link: 'https://www.theguardian.com/news/2025/jun/13/the-crunch-how-ukraine-drones-hit-russia-marine-heatwaves-and-the-collapse-of-canadas-third-parties',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    category: 'Data Visualization',
    role: 'Data Designer',
    duration: '2 Weeks',
    company: 'The Guardian (Featured)',
    tags: ['Data Viz', 'Climate', 'Editorial'],
    summary: {
      problem: "Communicating three disconnected global crises (Ukraine drones, heatwaves, Canadian politics) in a single, cohesive weekly digest.",
      solution: "A modular, scrollytelling interface that emphasizes comparative scales across disparate datasets.",
      outcome: "Featured as a primary editorial piece in The Guardian's data series."
    }
  },
  {
    id: 'poetry-game',
    title: 'Single Syllable',
    subtitle: 'A linguistic experiment in simple speech. Explain the complex using only one-beat words.',
    description: 'A browser-based word game inspired by Poetry for Neanderthals. Explain complex topics using only one-syllable words.',
    image: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&q=80&w=800',
    category: 'Game Design',
    role: 'Independent Developer',
    duration: '1 Month',
    company: 'Personal Project',
    tags: ['Game Design', 'Linguistics', 'Web App'],
    summary: {
      problem: "Traditional word games often rely on expansive vocabularies, making them inaccessible to non-native speakers or young learners.",
      solution: "A system that uses a syllable-counting engine to provide real-time feedback and 'haptic' rejection of long words.",
      outcome: "A viral personal project used as a teaching aid for ESL students."
    }
  }
];
