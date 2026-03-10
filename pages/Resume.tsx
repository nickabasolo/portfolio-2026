
import React from 'react';
import { getAssetPath } from '../utils/paths';
import { DownloadIcon, MailIcon, LinkedInIcon, GithubIcon } from '../components/Icons';

const Resume: React.FC = () => {
    const resumeUrl = getAssetPath('assets/about/Resume - Nick Abasolo (2026).pdf');

    return (
        <div className="py-20 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
                <div>
                    <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-2">Nick Abasolo</h1>
                    <p className="text-xl text-stone-500 font-light">Product Designer</p>
                </div>
                <a
                    href={resumeUrl}
                    target="_blank"
                    className="flex items-center gap-2 bg-stone-900 text-white px-6 py-3 rounded-full font-medium hover:bg-amber-600 transition-all shadow-lg shadow-stone-900/10 group"
                >
                    <DownloadIcon className="w-5 h-5" />
                    <span>Download PDF</span>
                </a>
            </div>

            <div className="space-y-16">
                {/* Personal Statement */}
                <section className="bg-amber-50/50 p-8 rounded-3xl border border-amber-100">
                    <p className="text-lg text-stone-700 leading-relaxed font-light mb-4">
                        I'm a product designer with 6 years of experience turning complex SaaS products into understandable human experiences, in collaboration with cross-functional, agile teams.
                    </p>
                    <p className="text-sm text-stone-500 font-medium">
                        Dual citizen authorized to work in the US and in Canada.
                    </p>
                </section>

                {/* Experience Section */}
                <section>
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-stone-400">Experience</h2>
                        <div className="h-px bg-stone-200 flex-1" />
                    </div>

                    <div className="space-y-12">
                        {/* Workstream */}
                        <div className="group">
                            <div className="mb-6">
                                <h3 className="text-xl font-serif text-stone-900 mb-1">Workstream</h3>
                                <p className="text-sm text-stone-500">HR, payroll and compliance SaaS for the hourly workforce</p>
                            </div>

                            <div className="relative space-y-2">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                                    <h4 className="text-lg font-medium text-stone-900">Senior Product Designer</h4>
                                    <span className="text-sm font-bold text-amber-600">Jan 2023 - Present</span>
                                </div>
                                <ul className="space-y-3 text-stone-600 leading-relaxed max-w-3xl list-disc list-outside ml-4 marker:text-amber-400 pt-2">
                                    <li>Reduced payroll errors by 58% by designing a worker-led correction flow while navigating regulatory requirements.</li>
                                    <li>Designed a cross-platform clock-in experience (mobile, tablet, web) in compliance with complex labor laws.</li>
                                    <li>Architected a real-time labor cost analysis dashboard, reducing customer labor spend by an average of 7%.</li>
                                    <li>Led research for a new user persona, driving expansion into a greenfield product line generating $1.5M ARR.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Dialpad */}
                        <div className="group">
                            <div className="mb-6">
                                <h3 className="text-xl font-serif text-stone-900 mb-1">Dialpad</h3>
                                <p className="text-sm text-stone-500">AI SaaS for enterprise communications and telephony</p>
                            </div>

                            <div className="space-y-8 relative">
                                {/* Position 1 */}
                                <div>
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                                        <h4 className="text-lg font-medium text-stone-900">Product Designer</h4>
                                        <span className="text-sm font-bold text-stone-400">Aug 2020 - Dec 2022</span>
                                    </div>
                                    <ul className="space-y-3 text-stone-600 leading-relaxed max-w-3xl list-disc list-outside ml-4 marker:text-stone-300 pt-2">
                                        <li>Unified disparate telephony, messaging and video calling products into a single mobile experience.</li>
                                        <li>Raised App Store rating from 3.2★ to 3.9★ in 6 months.</li>
                                    </ul>
                                </div>

                                {/* Position 2 */}
                                <div>
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                                        <h4 className="text-lg font-medium text-stone-900">Associate Product Designer</h4>
                                        <span className="text-sm font-bold text-stone-400">Jun 2019 - July 2020</span>
                                    </div>
                                    <ul className="space-y-3 text-stone-600 leading-relaxed max-w-3xl list-disc list-outside ml-4 marker:text-stone-300 pt-2">
                                        <li>Designed end-to-end mobile video calling with AI transcription and action items.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* SFU Health */}
                        <div className="group opacity-80 hover:opacity-100 transition-opacity">
                            <div className="mb-6">
                                <h3 className="text-xl font-serif text-stone-900 mb-1">SFU Health and Counseling</h3>
                                <p className="text-sm text-stone-500">Clinic for medical services and training</p>
                            </div>

                            <div className="relative space-y-2">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                                    <h4 className="text-lg font-medium text-stone-900">UX Designer</h4>
                                    <span className="text-sm font-bold text-stone-400">Mar 2019 - Jun 2019</span>
                                </div>
                                <ul className="space-y-2 text-stone-600 leading-relaxed max-w-3xl list-disc list-outside ml-4 marker:text-stone-300 pt-2">
                                    <li>Developed a mental health training portal for faculty to improve accessibility to health resources.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Education Section */}
                <section>
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-stone-400">Education</h2>
                        <div className="h-px bg-stone-200 flex-1" />
                    </div>

                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                            <div>
                                <h3 className="text-lg font-serif text-stone-900">Diploma, UX Design</h3>
                                <p className="text-stone-500">BrainStation</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                            <div>
                                <h3 className="text-lg font-serif text-stone-900">B.A., Political Economics</h3>
                                <p className="text-stone-500">Simon Fraser University</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section>
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-stone-400">Skills</h2>
                        <div className="h-px bg-stone-200 flex-1" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        <div>
                            <h3 className="font-serif text-stone-900 mb-4 text-lg">Research & Strategy</h3>
                            <div className="flex flex-wrap gap-2">
                                {["User interviews", "Usability testing", "User stories", "Competitive analysis", "Persona building", "Heuristic evaluation"].map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-stone-100 text-stone-600 rounded-lg text-sm">{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-serif text-stone-900 mb-4 text-lg">Design Craft</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Information architecture", "Sketching & wireframing", "User flow mapping", "Prototyping", "Design systems"].map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-stone-100 text-stone-600 rounded-lg text-sm">{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-serif text-stone-900 mb-4 text-lg">Software</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Figma", "Webflow", "JIRA", "Adobe CC"].map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-stone-100 text-stone-600 rounded-lg text-sm">{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-serif text-stone-900 mb-4 text-lg">AI & Development</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Github", "Cursor", "Gemini", "React prototyping (Vite)"].map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-100 rounded-lg text-sm">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Footer */}
                <section className="pt-10 border-t border-stone-100">
                    <div className="flex flex-wrap gap-6 text-sm text-stone-500">
                        <a href="mailto:nicholasabasolo@gmail.com" className="flex items-center gap-2 hover:text-amber-600 transition-colors">
                            <MailIcon /> nicholasabasolo@gmail.com
                        </a>
                        <a href="https://linkedin.com/in/nickabasolo" target="_blank" className="flex items-center gap-2 hover:text-amber-600 transition-colors">
                            <LinkedInIcon /> /nickabasolo
                        </a>
                        <a href="https://github.com/nickabasolo" target="_blank" className="flex items-center gap-2 hover:text-amber-600 transition-colors">
                            <GithubIcon /> /nickabasolo
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Resume;
