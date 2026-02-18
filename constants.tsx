
import { CaseStudy, SideProject } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'time-clock',
    title: 'Time Clock: From Audit to Autonomy',
    subtitle: 'Designing a reliable way for hourly workers to clock in that prevents payroll errors and saves managers 1.5+ hours of manual paperwork every week.',
    role: 'Senior Product Designer',
    duration: '4 Months',
    company: 'Workstream',
    image: 'assets/case-studies/time-clock-hero.png',
    tags: ['Labor Compliance', 'Mobile UX', 'Behavioral Design'],
    overview: 'The worker clock-in is the most critical touchpoint in the labor lifecycle. I redesigned this flow to move compliance resolution from the manager’s Sunday night to the worker’s daily exit.',
    problem: 'Managers were losing 5+ hours a week to admin overhead: manually auditing and correcting flagged timecards that their workers were punching in to the system.',
    solution: 'I pivoted the strategy from a "better manager dashboard" to a "better worker tool." By introducing worker-side editing and a gamified clock-out experience, I encouraged workers to suggestd their own corrections before they ever reached the manager.',
    impact: [
      '58% Reduction in flagged timecards',
      '1.5 Hours/Week Reclaimed',
      'Increased Pay Transparency'
    ],
    summary: {
      problem: "Managers were losing 5+ hours a week to admin overhead: manually auditing and correcting flagged timecards that their workers were punching in to the system. They wanted a better timesheet experience.",
      solution: "On top of improving the manager's experience, I expanded strategy to include the worker's tools as well. Enabling workers to suggest their own corrections prevented them from ever reaching the manager.",
      outcome: "58% reduction in manual timecard edits and 1.5 hours reclaimed per manager, per week."
    }
  },
  {
    id: 'performance-reviews',
    title: 'Performance Reviews: A Multi-user Flow',
    subtitle: 'Building a guided review process that helps teams give consistent, unbiased feedback and tracks employee growth without the administrative friction.',
    role: 'Senior Product Designer',
    duration: 'Ongoing',
    company: 'Workstream',
    image: 'assets/case-studies/performance-reviews-hero.png',
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
    image: 'assets/case-studies/manager-dashboard-hero.png',
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
    title: 'Visualizing Canada\'s 2025 election data',
    subtitle: 'Testing the hypothesis that the 2025 Canadian election defined a shift away from minor third parties.',
    description: 'A data visualization project using Python to analyze and visualize the 2025 Canadian election data.',
    link: 'https://www.theguardian.com/news/2025/jun/13/the-crunch-how-ukraine-drones-hit-russia-marine-heatwaves-and-the-collapse-of-canadas-third-parties',
    image: 'assets/side-projects/guardian-data-viz-hero.png',
    category: 'Data Visualization',
    role: 'Data Designer',
    duration: '2 Weeks',
    company: 'The Guardian (Featured)',
    tags: ['Data Viz', 'Climate', 'Editorial'],
    summary: {
      problem: "Canada’s parliament has had a long history of many different political parties – until recently, when its two major parties dominated the 2025 election.",
      solution: "A ternary plot tracking the vote share of all 343 electoral districts from 2021 to 2025, visualizing the movement of millions of voters.",
      outcome: "In 92% of ridings (317 of 343), the political periphery collapsed, narrowing the Canadian competitive field."
    }
  },
  {
    id: 'time-auction',
    title: 'Time Auction',
    subtitle: 'A multiplayer party game inspired by Netflix\'s Devil\'s Plan.',
    description: 'A real-time, multiplayer party game where players bid their time in real-time auctions, inspired by Netflix\'s The Devil\'s Plan. Created in Cursor AI with Node.js and Socket.IO.',
    image: 'assets/side-projects/time-auction-hero.png',
    category: 'Game Design',
    role: 'Vibe Coder',
    duration: 'In Progress',
    company: 'Personal Project',
    tags: ['Game Design', 'AI-Assisted', 'Web App'],
    summary: {
      problem: "Party games often require expensive equipment or complex setup, limiting spontaneous play.",
      solution: "A browser-based multiplayer game where players use their phones to bid time in tense real-time auctions.",
      outcome: "In development."
    }
  }
];
