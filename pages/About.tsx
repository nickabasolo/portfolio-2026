import React, { useState } from 'react';
import { MailIcon, LinkedInIcon, GithubIcon, PhoneIcon, CopyIcon, CheckIcon, EyeIcon, ExternalIcon } from '../components/Icons';

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

// Phone with reveal/hide
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
          <button
            onClick={() => setRevealed(false)}
            className="text-sm text-amber-600 hover:underline tabular-nums text-left"
          >
            {displayNumber}
          </button>
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
  return (
    <div className="flex flex-col items-center bg-brand-bg">
      <div className="w-full px-6 md:px-16 lg:px-[180px] py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 max-w-4xl">

          {/* Sticky Sidebar */}
          <aside className="md:w-72 flex-shrink-0">
            <div className="md:sticky md:top-24 space-y-0">
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
                <ContactItem
                  icon={<GithubIcon />}
                  text="/nickabasolo"
                  href="https://github.com/nickabasolo"
                  external
                />

                <div className="py-2 space-y-1">
                  <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Experience</div>
                  <div className="text-sm text-stone-900 font-medium">6 Years</div>
                </div>
                <div className="py-2 space-y-1">
                  <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Location</div>
                  <div className="text-sm text-stone-900 font-medium">Toronto, ON</div>
                  <div className="text-xs text-stone-400">Open to relocation</div>
                </div>
                <div className="py-2 space-y-1">
                  <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Citizenship</div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">🇺🇸</span>
                    <span className="text-sm font-medium text-stone-900">United States</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">🇨🇦</span>
                    <span className="text-sm font-medium text-stone-900">Canada</span>
                  </div>
                </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-12">
            {/* Bio */}
            <section className="space-y-6 text-base text-stone-700 font-light leading-relaxed">
              <p>
                I'm a Senior Product Designer focused on the operational layer of software — the compliance systems, workflows, and everyday tools that sit between a business's rules and the people carrying them out.
              </p>
              <p>
                For the past three years, I've been at Workstream building a 0 → 1 mobile platform for the hourly workforce. When I joined, the product was an HR tool built for managers on desktop.
              </p>
              <p>
                Workers became my mandate. Together with a UX researcher, I helped establish the hourly worker as a distinct persona with distinct needs, and built the case for a product surface designed around them. What started as an ambiguous 0-to-1 brief eventually became a compliance engine covering five US states, a labour cost visualisation tool, a shared-device tablet experience, and a time clock that reduced payroll error reviews by 31%.
              </p>
            </section>

            {/* Background */}
            <section className="space-y-4">
              <h2 className="text-md text-stone-400">My background</h2>
              <p className="text-base text-stone-700 font-light leading-relaxed">
                My training is in economics and government policy. Economics is the study of human decision-making, which was always what drew me to UX. I loved the field, but I wanted to be building things instead of writing papers, so I transitioned into product design about six years ago.
              </p>
            </section>

            {/* Where I'm headed */}
            <section className="space-y-4">
              <h2 className="text-md text-stone-400">Where I'm headed</h2>
              <div className="space-y-4 text-base text-stone-700 font-light leading-relaxed">
                <p>
                  It's a super interesting time to be in software now: I really want to explore how we'll use AI both in our process as well as in our products, genuinely changing how decisions get made and how people do their jobs. I'm looking for a team where that kind of thinking about AI is central.
                </p>
                <p>
                  I've been building small AI-integrated tools on the side (check out my side projects for more), partly to learn more about it but mostly because it's just really fun to be creating things again. (That's why outside of work I'm learning wheel-throwing pottery, which is somehow more difficult and messier than asking an AI agent to align a div.)
                </p>
              </div>
            </section>

          </main>

        </div>
      </div>
    </div>
  );
};

export default About;
