import React, { useState } from 'react';
import { getAssetPath } from '../utils/paths';

// Icons
const MailIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const CopyIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const EyeIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const ExternalIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

// Contact List Item with Copy
interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
  copyText?: string;
  external?: boolean;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, text, href, copyText, external }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (copyText) {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const content = (
    <div className="flex items-center gap-3 flex-1 min-w-0">
      <span className="text-stone-400 flex-shrink-0">{icon}</span>
      <span className="text-sm text-stone-700 truncate">{text}</span>
    </div>
  );

  return (
    <div className="flex items-center gap-2 py-2 group">
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          className="flex items-center gap-3 flex-1 min-w-0 hover:text-amber-600 transition-colors"
        >
          <span className="text-stone-400 group-hover:text-amber-600 transition-colors flex-shrink-0">{icon}</span>
          <span className="text-sm text-stone-700 group-hover:text-amber-600 transition-colors truncate">{text}</span>
          {external && <ExternalIcon className="w-3 h-3 opacity-30 flex-shrink-0" />}
        </a>
      ) : (
        content
      )}
      {copyText && (
        <button
          onClick={handleCopy}
          className={`px-3 py-1.5 rounded-lg border transition-all flex-shrink-0 flex items-center gap-1.5 text-xs ${copied
            ? 'bg-green-50 border-green-300 text-green-600'
            : 'border-stone-200 text-stone-400 hover:border-amber-600 hover:text-amber-600'
            }`}
          title={copied ? "Copied!" : "Copy"}
        >
          {copied ? <CheckIcon className="w-3.5 h-3.5" /> : <CopyIcon className="w-3.5 h-3.5" />}
        </button>
      )}
    </div>
  );
};

// Phone with reveal
const PhoneItem: React.FC = () => {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const areaCode = "415";
  const firstPart = "368";
  const secondPart = "9017";
  const fullNumber = `+1${areaCode}${firstPart}${secondPart}`;
  const displayNumber = `(${areaCode}) ${firstPart}-${secondPart}`;

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(fullNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 py-2 group">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <span className="text-stone-400 flex-shrink-0"><PhoneIcon /></span>
        {revealed ? (
          <a
            href={`tel:${fullNumber}`}
            className="text-sm text-amber-600 hover:underline tabular-nums"
          >
            {displayNumber}
          </a>
        ) : (
          <button
            onClick={() => setRevealed(true)}
            className="text-sm text-stone-400 hover:text-amber-600 transition-colors flex items-center gap-2 tabular-nums"
          >
            ({areaCode}) •••-••••
            <EyeIcon className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
      <button
        onClick={handleCopy}
        className={`px-3 py-1.5 rounded-lg border transition-all flex-shrink-0 flex items-center gap-1.5 text-xs ${copied
          ? 'bg-green-50 border-green-300 text-green-600'
          : 'border-stone-200 text-stone-400 hover:border-amber-600 hover:text-amber-600'
          }`}
        title={copied ? "Copied!" : "Copy"}
      >
        {copied ? <CheckIcon className="w-3.5 h-3.5" /> : <CopyIcon className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
};

const About: React.FC = () => {
  const photos = [
    { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800', alt: 'Portrait' },
    { url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800', alt: 'Workspace' },
    { url: 'https://images.unsplash.com/photo-1454165833767-6226d17160d7?auto=format&fit=crop&q=80&w=800', alt: 'Strategy session' },
    { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800', alt: 'Collaboration' },
  ];

  const skillCategories = [
    {
      title: "Design Craft",
      description: "Focused on high-fidelity execution and scalable systems.",
      skills: ["Systems Design", "Interaction Design", "Prototyping", "Figma", "Adobe CC"]
    },
    {
      title: "Strategy & Insight",
      description: "Applying economic logic to product decision making.",
      skills: ["Behavioral Design", "Systems Thinking", "Qualitative Research", "Information Architecture", "Product Strategy"]
    },
    {
      title: "AI & Development",
      description: "Leveraging modern LLMs and agentic tools for building.",
      skills: ["Cursor", "Gemini", "AI Studio", "Antigravity", "Github"]
    }
  ];

  return (
    <div className="py-20 animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-24">
      {/* Photo Gallery Section */}
      <section>
        <div className="grid grid-cols-4 gap-3 md:gap-6">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`aspect-[3/4] max-h-[40vh] rounded-2xl md:rounded-[2rem] overflow-hidden bg-stone-100 border border-stone-200 group relative ${i % 2 !== 0 ? 'md:translate-y-6' : ''}`}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Info Section - 1/3 + 2/3 Layout */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Info - 1/3 width */}
        <div className="bg-white border border-stone-200 p-6 rounded-[2rem] shadow-sm">
          <div className="divide-y divide-stone-100">
            <ContactItem
              icon={<MailIcon />}
              text="nicholasabasolo@gmail.com"
              href="mailto:nicholasabasolo@gmail.com"
              copyText="nicholasabasolo@gmail.com"
            />
            <PhoneItem />
            <ContactItem
              icon={<LinkedInIcon />}
              text="/nickabasolo"
              href="https://linkedin.com/in/nickabasolo"
              external
            />
          </div>

          <a
            href={getAssetPath('resume.pdf')}
            target="_blank"
            className="flex items-center justify-center gap-2 w-full bg-stone-900 text-white py-3.5 rounded-xl font-bold uppercase tracking-widest text-[9px] hover:bg-amber-600 transition-all shadow-lg shadow-stone-900/10 group/resume mt-5"
          >
            <svg className="w-3 h-3 group-hover/resume:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
            </svg>
            Resume
          </a>
        </div>

        {/* At a Glance - 2/3 width */}
        <div className="md:col-span-2 bg-amber-50/40 text-stone-900 p-6 md:p-8 rounded-[2rem] shadow-sm border border-amber-100">
          <div className="grid grid-cols-2 gap-x-6 gap-y-5">
            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Current Position</div>
              <div className="text-sm text-stone-900 font-medium leading-snug">
                Senior Product Designer at Workstream
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Experience</div>
              <div className="text-sm text-stone-900 font-medium">6 Years</div>
            </div>

            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Location</div>
              <div className="text-sm text-stone-900 font-medium">Vancouver, BC</div>
              <div className="inline-block px-2 py-0.5 rounded-full bg-amber-100/50 text-[9px] font-bold text-amber-700 border border-amber-200 uppercase tracking-wider mt-1">
                Open to relocation
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Work Authorization</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-base">🇺🇸</span>
                  <span className="text-sm font-medium text-stone-900">US Citizen</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base">🇨🇦</span>
                  <span className="text-sm font-medium text-stone-900">Canadian Citizen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="max-w-4xl">
        <div className="flex items-center gap-6 mb-10">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 whitespace-nowrap">About Me</h2>
          <div className="flex-1 h-px bg-stone-200" />
        </div>
        <div className="space-y-6 text-lg md:text-xl text-stone-600 font-light leading-relaxed">
          <p>
            I've always been fascinated by how people navigate complex systems. Before I was a Product Designer, I studied Economics: a field dedicated to understanding incentives, trade-offs, and systemic logic. Today, I apply that same analytical lens to digital products.
          </p>

          <p>
            Currently, I'm a Senior Product Designer at Workstream, where I design experiences for restaurant workers and their managers. I specialize in tackling complex workflows like payroll and compliance, and distilling them into intuitive mobile and web experiences that actually work for the people who use them.
          </p>

          <p>
            Outside of the 9-to-5, I spend a lot of time "vibecoding" mini-games and small web experiments. I'm also a recent tea enthusiast, a persistent foodie, and serial language learner.
          </p>
        </div>
      </section>

      {/* Expertise & Skills Section */}
      <section className="space-y-16">
        <div className="flex items-center gap-6">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 whitespace-nowrap">Expertise & Stack</h2>
          <div className="flex-1 h-px bg-stone-200" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {skillCategories.map((cat, i) => (
            <div key={i} className="space-y-8 group">
              <div className="space-y-3">
                <h3 className="text-3xl font-serif text-stone-900">{cat.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed max-w-xs">{cat.description}</p>
              </div>
              <ul className="space-y-4">
                {cat.skills.map((skill, j) => (
                  <li key={j} className="flex items-center gap-3 group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500/30 group-hover/item:bg-amber-500 transition-colors" />
                    <span className="text-sm font-medium text-stone-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
