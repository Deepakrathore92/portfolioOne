import React from 'react';
import {
  Briefcase,
  Layers,
  Server,
  Database,
  Code2,
  CheckCircle2,
  Cpu,
  FileCheck,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const experienceTimeline = [
  {
    period: 'Hands-on Full Stack Architecture',
    role: 'Full Stack Development – Practical Project Experience',
    type: 'Core Focus Area',
    focus: 'MERN Stack (MongoDB, Express, React, Node.js)',
    description:
      'Dedicated engineering practice creating complete full-stack web applications. Architecting decoupled systems where client-side Single Page Applications communicate smoothly with Express REST backends and MongoDB document stores.',
    keyPoints: [
      'Engineered comprehensive CRUD web systems with optimistic UI updates and real-time state synchronization.',
      'Designed Mongoose schemas with strict field-level validations, unique indexes, and pre-save lifecycle hooks.',
      'Implemented centralized Express error handling middleware ensuring consistent JSON error responses across all routes.'
    ],
    techTags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST API']
  },
  {
    period: 'Client-Side Engineering & UI Systems',
    role: 'Frontend Development & Responsive Interface Design',
    type: 'Frontend Specialization',
    focus: 'React 18, Tailwind CSS, Responsive Design, React Router DOM',
    description:
      'Designing intuitive, accessible, and fast web user interfaces. Translating mockups into modular JSX components with strict mobile-first responsive mathematics to eliminate layout overflow.',
    keyPoints: [
      'Developed reusable component libraries with clean prop contracts and custom validation hooks.',
      'Built multi-step form validation engines incorporating real-time regex matching, password strength indicators, and accessibility ARIA cues.',
      'Configured React Router DOM for client-side navigation with scroll restoration and smooth layout transitions.'
    ],
    techTags: ['React JSX', 'JavaScript ES6+', 'Tailwind CSS', 'CSS Grid/Flexbox', 'HTML5/ARIA']
  },
  {
    period: 'Server-Side Logic & API Engineering',
    role: 'Backend API Engineering & Data Pipeline Handling',
    type: 'Backend Specialization',
    focus: 'Node.js, Express Routing, RESTful Standards, Multer File Uploads',
    description:
      'Constructing secure, performant server logic and REST APIs. Implementing route parameter validation, pagination, query filtering, file upload security, and CORS policies.',
    keyPoints: [
      'Built file upload pipelines using Multer with strict MIME-type validation and file size restrictions.',
      'Structured standardized RESTful routes with consistent HTTP status codes (200, 201, 400, 404, 500).',
      'Created test collections in Postman to thoroughly verify request payloads, edge cases, and query filters.'
    ],
    techTags: ['Node.js', 'Express.js', 'Multer', 'Postman', 'CORS', 'JSON APIs']
  },
  {
    period: 'Core Concepts & Security Integration',
    role: 'Authentication Concepts & Software Fundamentals',
    type: 'Security & Principles',
    focus: 'JWT Principles, Password Hashing, Input Sanitization, Git Workflows',
    description:
      'Studying and implementing web application security fundamentals and best practices across the full development stack.',
    keyPoints: [
      'Understood and implemented token-based authentication workflows and secure header transmission.',
      'Applied input sanitization and regex validation on both client and server to prevent injection vulnerabilities.',
      'Maintained disciplined Git version control with clean commit histories, feature branches, and GitHub repositories.'
    ],
    techTags: ['Git / GitHub', 'Input Sanitization', 'State Management', 'Software Principles']
  }
];

const Experience = () => {
  return (
    <div id="experience-page-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider border border-blue-200 dark:border-blue-500/20">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Practical Development</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Full Stack Development Experience
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Detailed overview of hands-on practical software development experience with React.js, JavaScript, Node.js, Express.js, MongoDB, and RESTful architectures.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800/80 ml-4 sm:ml-32 space-y-12 pb-6">
        {experienceTimeline.map((item, idx) => (
          <div key={idx} className="relative pl-6 sm:pl-10 group">
            {/* Timeline Node Icon Indicator */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white dark:bg-[#0A0A0B] border-2 border-blue-500 flex items-center justify-center text-blue-500 shadow-md shadow-blue-500/30 group-hover:scale-110 transition-transform">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            </div>

            {/* Left Side Label (Desktop) */}
            <div className="hidden sm:block absolute -left-36 top-2 text-right w-28">
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 block">{item.type}</span>
            </div>

            {/* Timeline Content Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0F0F12] border border-zinc-200 dark:border-zinc-800/80 shadow-xl space-y-4 hover:border-blue-500/40 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-100 dark:border-zinc-800/80 pb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                    {item.role}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                    {item.focus}
                  </p>
                </div>
                <span className="self-start sm:self-auto px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-xs font-mono">
                  {item.period}
                </span>
              </div>

              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {item.description}
              </p>

              {/* Key Highlights Bullet Points */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs uppercase font-bold tracking-wider text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                  Key Achievements & Implementation Details
                </h4>
                <ul className="space-y-2">
                  {item.keyPoints.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2"
                    >
                      <span className="text-blue-500 dark:text-blue-400 font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2 pt-3">
                {item.techTags.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-[#0A0A0B] text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800/80 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Practical Experience Guarantee Card */}
      <div className="p-8 rounded-3xl bg-white dark:bg-[#0F0F12] border border-zinc-200 dark:border-zinc-800/80 text-center space-y-4 shadow-xs">
        <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
          Ready for Immediate Contribution
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
          Through continuous hands-on project building, I am proficient in developing, debugging, and maintaining modern MERN stack web applications with high reliability.
        </p>
        <div className="pt-2">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/30 transition-all cursor-pointer"
          >
            <span>Review Project Implementations</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experience;
