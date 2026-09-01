import React from 'react';
import { Link } from 'react-router-dom';
import {
  User,
  GraduationCap,
  Layers,
  Cpu,
  Database,
  Server,
  Code2,
  CheckCircle2,
  FileText,
  Mail,
  Phone,
  ArrowRight,
  ShieldCheck,
  Zap,
  Terminal
} from 'lucide-react';

const coreCompetencies = [
  {
    title: 'Frontend Engineering',
    desc: 'Crafting responsive single page applications using React.js, modern JSX, Tailwind CSS, and standard JavaScript ES6+.',
    icon: Layers,
    color: 'from-blue-600 to-indigo-600'
  },
  {
    title: 'Backend Architecture',
    desc: 'Building robust Node.js & Express.js servers with clean MVC architecture, error handling middleware, and async flows.',
    icon: Server,
    color: 'from-indigo-600 to-violet-600'
  },
  {
    title: 'Database & Data Modeling',
    desc: 'Designing NoSQL document schemas in MongoDB using Mongoose ODM, creating indexes, validations, and aggregation pipelines.',
    icon: Database,
    color: 'from-emerald-600 to-teal-600'
  },
  {
    title: 'REST API Development',
    desc: 'Developing standardized RESTful APIs with structured HTTP status codes, pagination, query filtering, and Postman testing.',
    icon: Terminal,
    color: 'from-amber-600 to-orange-600'
  },
  {
    title: 'Responsive Web Development',
    desc: 'Ensuring seamless user experiences across mobile, tablet, and desktop viewports with zero horizontal scrolling.',
    icon: Zap,
    color: 'from-purple-600 to-pink-600'
  },
  {
    title: 'Problem Solving & Logic',
    desc: 'Translating business logic and UI requirements into clean, modular, maintainable, and well-documented source code.',
    icon: ShieldCheck,
    color: 'from-blue-600 to-cyan-600'
  }
];

const stats = [
  { label: 'Academic Degree', value: 'BCA Completed', highlight: 'Computer Applications' },
  { label: 'Specialization', value: 'Full Stack Development', highlight: 'Frontend & Backend' },
  { label: 'Technology Stack', value: 'Modern Web Tech', highlight: 'MERN Stack' },
  { label: 'User Experience', value: 'Responsive Web Apps', highlight: 'Mobile-First Design' }
];

const About = () => {
  return (
    <div id="about-page-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="space-y-3 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider border border-blue-200 dark:border-blue-500/20">
          <User className="w-3.5 h-3.5" />
          <span>Professional Background</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          About Deepak Rathore
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Full Stack Developer with completed BCA degree, focused on building dependable, performant web applications with modern technologies.
        </p>
      </div>

      {/* Main Profile & Summary Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive Profile Identity Card */}
        <div className="lg:col-span-5 rounded-3xl bg-white dark:bg-[#0F0F12] border border-zinc-200 dark:border-zinc-800/80 p-6 sm:p-8 shadow-xl space-y-6">
          {/* Avatar / Developer Monogram Box */}
          <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 p-1 shadow-2xl shadow-blue-600/30">
            <div className="w-full h-full rounded-[22px] bg-zinc-900 dark:bg-[#0A0A0B] flex flex-col items-center justify-center text-center p-4">
              <Code2 className="w-12 h-12 text-blue-400 mb-1" />
              <span className="font-extrabold text-lg text-white tracking-tight">DR</span>
              <span className="text-[10px] uppercase tracking-wider text-blue-400 font-semibold">
                Full Stack
              </span>
            </div>
          </div>

          {/* Profile Name & Title */}
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white">
              Deepak Rathore
            </h2>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">Full Stack Developer</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Bachelor of Computer Applications (BCA)</p>
          </div>

          {/* Contact Details List */}
          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-[#0A0A0B] border border-zinc-200 dark:border-zinc-800 space-y-3 text-xs">
            <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
              <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span className="break-all font-mono">deepakrathore9027020946@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
              <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span className="font-mono">+91 7017168400 / +91 9258446582</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
              <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>BCA Completed</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <Link
              to="/resume"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-800 dark:text-white text-xs font-semibold border border-zinc-200 dark:border-zinc-800 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/30 transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Me</span>
            </Link>
          </div>
        </div>

        {/* Right: Technical Biography & Development Philosophy */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-3xl bg-white dark:bg-[#0F0F12] border border-zinc-200 dark:border-zinc-800/80 p-6 sm:p-8 space-y-5 shadow-xs">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Engineering Journey & Focus
            </h3>
            
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Hello! I am <strong className="text-zinc-900 dark:text-white">Deepak Rathore</strong>, a dedicated <strong className="text-blue-600 dark:text-blue-400">Full Stack Developer</strong> with a completed <strong className="text-zinc-900 dark:text-white">Bachelor of Computer Applications (BCA)</strong> degree. My software development passion centers on designing cohesive web architectures that seamlessly marry modern client interfaces with secure, reliable backend APIs.
            </p>

            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              During my academic coursework and intensive practical project engineering, I have focused on mastering the <strong className="text-zinc-900 dark:text-white">MERN stack</strong> (MongoDB, Express.js, React.js, Node.js). I emphasize writing clean, modular, and maintainable JSX components, implementing robust input validation, architecting RESTful endpoints, and modeling efficient NoSQL database schemas.
            </p>

            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              I place great emphasis on foundational software engineering concepts: data structures, responsive UI design without layout overflow, HTTP request/response lifecycles, and practical problem-solving.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0F0F12] border border-zinc-200 dark:border-zinc-800/80 shadow-xs"
              >
                <p className="text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400">
                  {s.label}
                </p>
                <h4 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white mt-1">
                  {s.value}
                </h4>
                <p className="text-xs text-blue-600 dark:text-blue-400 mt-0.5 font-medium">{s.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Competencies Grid */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Core Development Competencies
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Key areas of practical software development expertise and hands-on skill.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreCompetencies.map((comp, idx) => {
            const Icon = comp.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#0F0F12] border border-zinc-200 dark:border-zinc-800/80 hover:border-blue-500/40 transition-all space-y-3 shadow-xs"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${comp.color} flex items-center justify-center text-white shadow-md`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  {comp.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {comp.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
