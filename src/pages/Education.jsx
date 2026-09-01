import React from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Code2,
  Database,
  Cpu,
  Layers,
  FileCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const subjects = [
  { name: 'Web Technologies & Development', focus: 'HTML5, CSS3, JavaScript, Client-Server Architecture' },
  { name: 'Database Management Systems (DBMS)', focus: 'SQL, Relational Modeling, Normalization, ACID Properties' },
  { name: 'Object-Oriented Programming (OOP)', focus: 'Classes, Inheritance, Polymorphism, Encapsulation with Java/C++' },
  { name: 'Data Structures & Algorithms', focus: 'Arrays, Stacks, Queues, Linked Lists, Sorting & Searching' },
  { name: 'Software Engineering & Methodologies', focus: 'SDLC, Agile principles, Software Testing & Modular Design' },
  { name: 'Computer Networks & Operating Systems', focus: 'TCP/IP, HTTP/HTTPS Protocols, Process Management & Memory' }
];

const Education = () => {
  return (
    <div id="education-page-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider border border-blue-200 dark:border-blue-500/20">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academic Background</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Education & Qualifications
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Strong formal grounding in Computer Applications, software engineering fundamentals, database systems, and full stack web technologies.
        </p>
      </div>

      {/* Main Education Degree Feature Card */}
      <div className="rounded-3xl bg-white dark:bg-[#0F0F12] border border-zinc-200 dark:border-zinc-800/80 p-8 sm:p-12 shadow-2xl space-y-8 relative overflow-hidden">
        {/* Background Subtle Gradient */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-zinc-100 dark:border-zinc-800/80 pb-8">
          <div className="flex items-start sm:items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-xl shadow-blue-600/30 shrink-0">
              <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                  Status: Completed
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">Undergraduate Degree</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                Bachelor of Computer Applications (BCA)
              </h2>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                Degree in Computer Applications & Software Systems
              </p>
            </div>
          </div>

          <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 shrink-0">
            <span className="px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-xs font-mono font-semibold">
              BCA Graduate
            </span>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verified Degree
            </span>
          </div>
        </div>

        {/* Coursework & Learned Technical Domains */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-lg">
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3>Key Core Subjects & Academic Coursework</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {subjects.map((sub, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#0A0A0B] border border-zinc-200 dark:border-zinc-800/80 space-y-2 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400"></span>
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-white">
                    {sub.name}
                  </h4>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {sub.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Highlights & Foundations */}
        <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FileCheck className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0" />
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
              The BCA curriculum provided the foundation for full-stack software development, database query optimization, and structured algorithmic problem solving.
            </p>
          </div>
          <Link
            to="/skills"
            className="shrink-0 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/20 transition-all cursor-pointer"
          >
            Explore Technical Skills
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Education;
