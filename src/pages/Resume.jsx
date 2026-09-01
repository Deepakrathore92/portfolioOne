import React from 'react';
import {
  Download,
  Printer,
  Mail,
  Phone,
  GraduationCap,
  FolderGit2,
  Code2,
  Cpu,
  Layers,
  Database,
  Server,
  Terminal,
  CheckCircle2,
  ExternalLink,
  Github
} from 'lucide-react';

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="resume-page-container" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Top Action Bar (hidden in print mode) */}
      <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-white dark:bg-[#0F0F12] border border-zinc-200 dark:border-zinc-800/80 shadow-xl">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Curriculum Vitae / Resume
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-0.5">
            Printable & PDF-ready resume format for Deepak Rathore (Full Stack Developer).
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            id="print-resume-btn"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-600/30 transition-all hover:scale-102 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Printable Resume Sheet Container */}
      <div
        id="printable-resume-sheet"
        className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#0F0F12] border border-zinc-200 dark:border-zinc-800/80 shadow-2xl text-zinc-900 dark:text-zinc-100 space-y-8 transition-colors"
      >
        {/* Resume Header */}
        <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                DEEPAK RATHORE
              </h2>
              <p className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400 mt-1">
                Full Stack Developer | MERN Stack Specialist
              </p>
            </div>

            <div className="space-y-1 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-mono sm:text-right">
              <p className="flex items-center sm:justify-end gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <a href="mailto:deepakrathore9027020946@gmail.com" className="hover:underline">
                  deepakrathore9027020946@gmail.com
                </a>
              </p>
              <p className="flex items-center sm:justify-end gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>+91 7017168400, +91 9258446582</span>
              </p>
              <p className="flex items-center sm:justify-end gap-2">
                <Github className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>github.com/deepakrathore</span>
              </p>
            </div>
          </div>
        </div>

        {/* 1. Career Objective */}
        <section className="space-y-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-zinc-200 dark:border-zinc-800 pb-1">
            Career Objective
          </h3>
          <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Motivated and detail-oriented <strong className="text-zinc-900 dark:text-white">Full Stack Developer</strong> with a completed <strong className="text-zinc-900 dark:text-white">Bachelor of Computer Applications (BCA)</strong> degree. Passionate about engineering high-quality, responsive web applications utilizing React.js on the client and Node.js, Express.js, and MongoDB on the server. Seeking a challenging role to contribute solid problem-solving abilities, clean code standards, and full stack development expertise to impactful software projects.
          </p>
        </section>

        {/* 2. Education */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-zinc-200 dark:border-zinc-800 pb-1">
            Education
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                Bachelor of Computer Applications (BCA)
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                Core Coursework: Data Structures, Web Technologies, Database Systems (DBMS), OOP, Computer Networks
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 self-start sm:self-auto">
              Status: Completed
            </span>
          </div>
        </section>

        {/* 3. Technical Skills Matrix */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-zinc-200 dark:border-zinc-800 pb-1">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-[#0A0A0B] border border-zinc-200 dark:border-zinc-800/80">
              <strong className="text-zinc-900 dark:text-white block mb-1">Frontend Development:</strong>
              <span className="text-zinc-700 dark:text-zinc-300">
                HTML5, CSS3, JavaScript (ES6+), React.js, JSX, Tailwind CSS, Bootstrap, jQuery, Responsive UI
              </span>
            </div>

            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-[#0A0A0B] border border-zinc-200 dark:border-zinc-800/80">
              <strong className="text-zinc-900 dark:text-white block mb-1">Backend & API:</strong>
              <span className="text-zinc-700 dark:text-zinc-300">
                Node.js, Express.js, RESTful API Architecture, Routing, Custom Middleware, CORS
              </span>
            </div>

            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-[#0A0A0B] border border-zinc-200 dark:border-zinc-800/80">
              <strong className="text-zinc-900 dark:text-white block mb-1">Database & ODM:</strong>
              <span className="text-zinc-700 dark:text-zinc-300">
                MongoDB, Mongoose ODM, Schema Validation, Aggregation, MySQL
              </span>
            </div>

            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-[#0A0A0B] border border-zinc-200 dark:border-zinc-800/80">
              <strong className="text-zinc-900 dark:text-white block mb-1">Programming & Tools:</strong>
              <span className="text-zinc-700 dark:text-zinc-300">
                JavaScript, Java, Git, GitHub, VS Code, Postman, npm, Axios
              </span>
            </div>
          </div>
        </section>

        {/* 4. Practical Projects & Implementations */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-zinc-200 dark:border-zinc-800 pb-1">
            Practical Full Stack Project Implementations
          </h3>

          <div className="space-y-4">
            {/* Project 1 */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                  E-Commerce Web Application (Full Stack MERN)
                </h4>
                <span className="text-xs font-mono text-blue-600 dark:text-blue-400">React.js, Node.js, Express, MongoDB</span>
              </div>
              <ul className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 list-disc pl-4 space-y-0.5">
                <li>Built a complete shopping application with dynamic product filtering, cart management, and order placement.</li>
                <li>Created Express REST API endpoints with Mongoose models for products, categories, and customer orders.</li>
                <li>Implemented responsive mobile-first UI using Tailwind CSS with zero horizontal overflow.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                  Contact Management System
                </h4>
                <span className="text-xs font-mono text-blue-600 dark:text-blue-400">React.js, Express, Mongoose, REST API</span>
              </div>
              <ul className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 list-disc pl-4 space-y-0.5">
                <li>Engineered full CRUD operations for contacts with instant search, category tags, and email/phone validation.</li>
                <li>Configured MongoDB unique index constraints and server-side request sanitization.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                  Student Management System
                </h4>
                <span className="text-xs font-mono text-blue-600 dark:text-blue-400">React.js, Node.js, MongoDB Aggregation</span>
              </div>
              <ul className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 list-disc pl-4 space-y-0.5">
                <li>Created academic dashboard for student registration, course enrollments, GPA averages, and attendance tracking.</li>
                <li>Utilized MongoDB aggregation pipelines to process semester averages server-side.</li>
              </ul>
            </div>

            {/* Project 4 */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                  File Upload Management System & CRUD REST API
                </h4>
                <span className="text-xs font-mono text-blue-600 dark:text-blue-400">Node.js, Express.js, Multer, MongoDB, Postman</span>
              </div>
              <ul className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 list-disc pl-4 space-y-0.5">
                <li>Developed secure upload pipeline using Multer with strict MIME verification, metadata logging, and download streams.</li>
                <li>Designed standardized REST API with query pagination, centralized error middleware, and Postman documentation.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Development Competencies & Strengths */}
        <section className="space-y-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-zinc-200 dark:border-zinc-800 pb-1">
            Development Competencies
          </h3>
          <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            MERN Stack Development • Component State Architecture • Asynchronous JavaScript • RESTful Endpoint Design • Schema Modeling & Validation • Responsive Layout Math • Git Version Control • Clean Code Documentation
          </p>
        </section>
      </div>
    </div>
  );
};

export default Resume;
