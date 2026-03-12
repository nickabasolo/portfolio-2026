import React, { useState } from 'react';
import { getAssetPath } from '../utils/paths';
import { MailIcon, LinkedInIcon, PhoneIcon, CopyIcon, CheckIcon, EyeIcon, ExternalIcon } from '../components/Icons';

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
      skills: ["Cursor", "Gemini & AI Studio", "React and React Native prototyping", "Github"]
    }
  ];

  return (
    <div className="flex flex-col items-center bg-brand-bg">
      <div className="w-full px-6 md:px-16 lg:px-[180px] py-12 md:py-20 space-y-16 md:space-y-24">
      {/* Photo Gallery Section - Hidden for now
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
      */}

      {/* Contact & Info Section */}
      <section className="space-y-8 max-w-4xl">
        <div className="flex items-center gap-6">
          <h2 className="text-md text-stone-400">Contact & Info</h2>
          <div className="flex-1 h-px bg-stone-200" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="space-y-4 divide-y divide-stone-200">
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
              href={getAssetPath('assets/about/Resume - Nick Abasolo (2026).pdf')}
              target="_blank"
              className="flex items-center justify-center gap-2 w-full bg-stone-900 text-white py-3 rounded-lg font-bold uppercase tracking-widest text-[9px] hover:bg-amber-600 transition-colors group/resume"
            >
              <svg className="w-3 h-3 group-hover/resume:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
              </svg>
              Resume
            </a>
          </div>

          {/* At a Glance */}
          <div className="md:col-span-2 space-y-6">
            <div className="grid grid-cols-2 gap-6">
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
              </div>

              <div className="space-y-1">
                <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Work Authorization</div>
                <div className="flex items-center gap-2">
                  <span className="text-base">🇺🇸 🇨🇦</span>
                  <span className="text-sm font-medium text-stone-900">US & Canadian Citizen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="space-y-8 max-w-4xl">
        <div className="flex items-center gap-6">
          <h2 className="text-md text-stone-400">About Me</h2>
          <div className="flex-1 h-px bg-stone-200" />
        </div>
        <div className="space-y-6 text-base text-stone-700 font-light leading-relaxed">
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
      <section className="space-y-12 max-w-4xl">
        <div className="flex items-center gap-6">
          <h2 className="text-md text-stone-400">Expertise & Stack</h2>
          <div className="flex-1 h-px bg-stone-200" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((cat, i) => (
            <div key={i} className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-serif text-stone-900">{cat.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{cat.description}</p>
              </div>
              <ul className="space-y-3">
                {cat.skills.map((skill, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-amber-600 flex-shrink-0" />
                    <span className="text-sm text-stone-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
};

export default About;
