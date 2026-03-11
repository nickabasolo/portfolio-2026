
import React from 'react';
import { getAssetPath } from '../utils/paths';
import { DownloadIcon, MailIcon, LinkedInIcon, GithubIcon } from '../components/Icons';

const Resume: React.FC = () => {
    const resumeUrl = getAssetPath('assets/about/Resume - Nick Abasolo (2026).pdf');

    return (
        <div className="flex flex-col items-center" style={{ backgroundColor: '#FAF9F6' }}>
            <div className="w-full px-6 md:px-16 lg:px-[180px] py-12 md:py-20 space-y-16 md:space-y-20">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 max-w-4xl">
                <div>
                    <h1 className="text-2xl font-serif text-stone-900 mb-1">Nick Abasolo</h1>
                    <p className="text-base text-stone-600 font-light">Senior Product Designer</p>
                </div>
                <a
                    href={resumeUrl}
                    target="_blank"
                    className="flex items-center gap-2 bg-stone-900 text-white px-5 py-2.5 rounded-lg font-bold uppercase tracking-widest text-[9px] hover:bg-amber-600 transition-colors group"
                >
                    <DownloadIcon className="w-4 h-4" />
                    <span>Download</span>
                </a>
            </div>

            <div className="space-y-16 max-w-4xl">
                {/* Personal Statement */}
                <section className="space-y-4">
                    <p className="text-base text-stone-700 leading-relaxed font-light">
                        I'm a product designer with 6 years of experience turning complex SaaS products into understandable human experiences, in collaboration with cross-functional, agile teams.
                    </p>
                    <p className="text-sm text-stone-500">
                        Dual citizen authorized to work in the US and in Canada.
                    </p>
                </section>

                {/* Experience Section */}
                <section className="space-y-12">
                    <div className="flex items-center gap-6">
                        <h2 className="text-md text-stone-400">Experience</h2>
                        <div className="h-px bg-stone-200 flex-1" />
                    </div>

                    <div className="space-y-16">
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
                <section className="space-y-8">
                    <div className="flex items-center gap-6">
                        <h2 className="text-md text-stone-400">Education</h2>
                        <div className="h-px bg-stone-200 flex-1" />
                    </div>

                    <div className="space-y-4">
                        <div>
                            <h3 className="font-serif text-stone-900 mb-1">Diploma, UX Design</h3>
                            <p className="text-sm text-stone-600">BrainStation</p>
                        </div>
                        <div>
                            <h3 className="font-serif text-stone-900 mb-1">B.A., Political Economics</h3>
                            <p className="text-sm text-stone-600">Simon Fraser University</p>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="space-y-8">
                    <div className="flex items-center gap-6">
                        <h2 className="text-md text-stone-400">Skills</h2>
                        <div className="h-px bg-stone-200 flex-1" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        <div>
                            <h3 className="font-serif text-stone-900 mb-3 text-base">Research & Strategy</h3>
                            <div className="flex flex-wrap gap-2">
                                {["User interviews", "Usability testing", "User stories", "Competitive analysis", "Persona building", "Heuristic evaluation"].map(skill => (
                                    <span key={skill} className="px-2.5 py-1 bg-stone-100 text-stone-600 rounded text-xs font-medium">{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-serif text-stone-900 mb-3 text-base">Design Craft</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Information architecture", "Sketching & wireframing", "User flow mapping", "Prototyping", "Design systems"].map(skill => (
                                    <span key={skill} className="px-2.5 py-1 bg-stone-100 text-stone-600 rounded text-xs font-medium">{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-serif text-stone-900 mb-3 text-base">Software</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Figma", "Webflow", "JIRA", "Adobe CC"].map(skill => (
                                    <span key={skill} className="px-2.5 py-1 bg-stone-100 text-stone-600 rounded text-xs font-medium">{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-serif text-stone-900 mb-3 text-base">AI & Development</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Github", "Cursor", "Gemini", "React prototyping (Vite)"].map(skill => (
                                    <span key={skill} className="px-2.5 py-1 bg-stone-100 text-stone-700 rounded text-xs font-medium">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Footer */}
                <section className="pt-8 border-t border-stone-200">
                    <div className="flex flex-wrap gap-6 text-xs text-stone-600">
                        <a href="mailto:nicholasabasolo@gmail.com" className="flex items-center gap-2 hover:text-amber-600 transition-colors">
                            <MailIcon className="w-4 h-4" /> nicholasabasolo@gmail.com
                        </a>
                        <a href="https://linkedin.com/in/nickabasolo" target="_blank" className="flex items-center gap-2 hover:text-amber-600 transition-colors">
                            <LinkedInIcon className="w-4 h-4" /> /nickabasolo
                        </a>
                        <a href="https://github.com/nickabasolo" target="_blank" className="flex items-center gap-2 hover:text-amber-600 transition-colors">
                            <GithubIcon className="w-4 h-4" /> /nickabasolo
                        </a>
                    </div>
                </section>
            </div>
            </div>
        </div>
    );
};

export default Resume;
