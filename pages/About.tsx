
import React from 'react';

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
    <div className="py-20 animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-32">
      {/* Header & Bio Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="md:col-span-7 space-y-12">
          <header className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-serif text-stone-900 leading-[0.9] tracking-tight">
              Designing systems for <span className="italic text-amber-600">human speed.</span>
            </h1>
          </header>
          
          <div className="space-y-8 text-xl md:text-2xl text-stone-600 font-light leading-relaxed">
            <p>
              I’ve always been fascinated by how people navigate complex systems. Before I was a Product Designer, I studied Economics: a field dedicated to understanding incentives, trade-offs, and systemic logic. Today, I apply that same analytical lens to digital products.
            </p>
            
            <p>
              I transitioned from being an economic analyst to a product designer because I realized how perfectly my research and knowledge-synthesis skills transferred to the world of UX. I loved the idea of taking rigorous data and turning it into something someone could actually touch, use, and benefit from in their daily life.
            </p>

            <p>
              Currently, I’m a Senior Product Designer at <span className="text-stone-900 font-medium">Workstream</span>, where I lead design for high-stakes financial tools and operations. I specialize in taking 'messy' industries (like payroll and compliance) and distilling them into intuitive mobile and web experiences that actually work for the people who use them.
            </p>

            <p>
              Outside of the 9-to-5, I spend a lot of time "vibecoding" mini-games and small web experiments. I’m also a recent tea enthusiast, a persistent foodie, and serial language learner.
            </p>
          </div>
        </div>

        <div className="md:col-span-5 space-y-6 sticky top-32">
          {/* Box 1: Contact Info */}
          <div className="bg-white border border-stone-200 p-8 rounded-[2.5rem] shadow-sm space-y-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-stone-50 blur-3xl -mr-12 -mt-12" />
            
            <div className="space-y-3 relative z-10">
              <a 
                href="mailto:hello@nickabasolo.design" 
                className="flex items-center justify-between w-full bg-stone-900 text-white px-6 py-4 rounded-2xl font-medium hover:bg-amber-600 transition-all group/btn"
              >
                <span>Email</span>
                <span className="text-stone-400 group-hover/btn:text-white transition-colors text-sm">hello@nickabasolo.design</span>
              </a>
              <a 
                href="https://linkedin.com/in/nickabasolo" 
                target="_blank"
                className="flex items-center justify-between w-full border border-stone-200 text-stone-900 px-6 py-4 rounded-2xl font-medium hover:border-amber-600 hover:text-amber-600 transition-all"
              >
                <span>LinkedIn</span>
                <span className="opacity-40 text-sm">/nickabasolo</span>
              </a>
              <div className="flex items-center justify-between w-full border border-stone-200 text-stone-900 px-6 py-4 rounded-2xl font-medium bg-stone-50/30">
                <span>Phone</span>
                <span className="opacity-40 tabular-nums text-sm">+1 (604) ••• ••••</span>
              </div>
            </div>
          </div>

          {/* Box 2: At a Glance */}
          <div className="bg-amber-50/40 text-stone-900 p-8 md:p-10 rounded-[2.5rem] shadow-sm space-y-10 border border-amber-100">
            <div className="grid grid-cols-2 gap-y-10 gap-x-6">
              <div className="col-span-2 space-y-1.5">
                <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Current Position</div>
                <div className="text-stone-900 font-medium text-lg leading-snug">
                  Senior Product Designer at Workstream
                </div>
              </div>

              <div className="col-span-2 space-y-1">
                <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Experience</div>
                <div className="text-stone-900 text-2xl font-serif">6 Years</div>
              </div>

              <div className="col-span-2 space-y-3 pt-2">
                <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Work Authorization</div>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center gap-3 bg-white/60 border border-amber-200/50 p-3 rounded-xl">
                    <span className="text-xl">🇺🇸</span>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-stone-800 tracking-tight">United States</div>
                      <div className="text-[9px] text-stone-500 uppercase tracking-tighter font-medium">Dual Citizen / Full Authorization</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/60 border border-amber-200/50 p-3 rounded-xl">
                    <span className="text-xl">🇨🇦</span>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-stone-800 tracking-tight">Canada</div>
                      <div className="text-[9px] text-stone-500 uppercase tracking-tighter font-medium">Dual Citizen / Full Authorization</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-2 space-y-1 pt-2">
                <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Current Location</div>
                <div className="flex items-center justify-between">
                  <div className="text-stone-900 font-medium">Vancouver, BC</div>
                  <div className="px-3 py-1 rounded-full bg-amber-100/50 text-[10px] font-bold text-amber-700 border border-amber-200 uppercase tracking-wider">
                    Open to relocation
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="flex items-center justify-center gap-3 w-full bg-stone-900 text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-amber-600 transition-all shadow-lg shadow-stone-900/10 group/resume"
              >
                <svg className="w-3.5 h-3.5 group-hover/resume:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                </svg>
                Download Full Resume
              </a>
            </div>
          </div>
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

      {/* Photo Gallery Section */}
      <section className="space-y-12">
        <div className="flex items-center gap-6">
           <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 whitespace-nowrap">Behind the Screen</h2>
           <div className="flex-1 h-px bg-stone-200" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {photos.map((photo, i) => (
            <div 
              key={i} 
              className={`aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-stone-100 border border-stone-200 group relative ${
                i % 2 !== 0 ? 'md:translate-y-8' : ''
              }`}
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
    </div>
  );
};

export default About;
