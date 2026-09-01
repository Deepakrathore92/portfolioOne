import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Terminal,
  FolderGit2,
  FileText,
  Send,
  Sparkles,
  Database,
  Server,
  Layers,
  CheckCircle2,
  ArrowRight,
  Play,
  RotateCcw
} from 'lucide-react';

const terminalSnippets = [
  {
    cmd: 'deepak.getProfile()',
    output: `{
  name: "Deepak Rathore",
  role: "Full Stack Developer",
  education: "BCA (Bachelor of Computer Applications)",
  primaryStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
  status: "Available for Full Stack Opportunities"
}`
  },
  {
    cmd: 'npm run test:architecture',
    output: `✔ Frontend: React 18 + Tailwind CSS (PASSED)
✔ Backend: Express.js REST API (HEALTHY)
✔ Database: MongoDB ODM Schemas (CONNECTED)
✔ Responsive Check: 320px to 4K (100% FLUID)
All full-stack systems verified.`
  },
  {
    cmd: 'cat contact.info',
    output: `Email : deepakrathore9027020946@gmail.com
Mobile: +91 7017168400, +91 9258446582
Focus : Building scalable MERN applications`
  }
];

const Hero = () => {
  const [activeSnippetIdx, setActiveSnippetIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Terminal animated typing simulator
  useEffect(() => {
    let currentIdx = 0;
    const currentText = terminalSnippets[activeSnippetIdx].output;
    setIsTyping(true);
    setDisplayedText('');

    const interval = setInterval(() => {
      if (currentIdx <= currentText.length) {
        setDisplayedText(currentText.slice(0, currentIdx));
        currentIdx++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [activeSnippetIdx]);

  return (
    <section
      id="hero-section"
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-10 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Background Decorative Tech Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#a1a1aa_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-25 dark:opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Personal Introduction & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0F0F12] border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Full Stack Opportunities</span>
              <span className="text-zinc-300 dark:text-zinc-600">•</span>
              <span className="text-blue-600 dark:text-blue-400">BCA Completed</span>
            </div>

            {/* Main Greeting & Headings */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400">
                  Deepak Rathore
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-700 dark:text-zinc-300">
                Full Stack Developer
              </h2>
            </div>

            {/* Professional Introduction */}
            <p className="text-sm sm:text-base lg:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I build modern, responsive and scalable web applications using modern frontend and backend technologies.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                to="/projects"
                id="hero-view-projects-btn"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white text-sm font-semibold shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-102 active:scale-98 cursor-pointer"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Projects</span>
              </Link>

              <Link
                to="/resume"
                id="hero-download-resume-btn"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-white hover:bg-zinc-100 dark:bg-[#0F0F12] dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 text-sm font-semibold shadow-xs transition-all duration-300 hover:scale-102 active:scale-98 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Download Resume</span>
              </Link>

              <Link
                to="/contact"
                id="hero-contact-me-btn"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 dark:bg-[#0F0F12]/80 dark:hover:bg-zinc-800 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30 text-sm font-semibold transition-all duration-300 hover:scale-102 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Floating Quick Technology Indicators */}
            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs">
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                Core Stack:
              </span>
              {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-white dark:bg-[#0F0F12] text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 font-mono text-[11px] shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal & Developer Illustration Window */}
          <div className="lg:col-span-5 relative">
            {/* Terminal Window Container */}
            <div
              id="hero-developer-terminal"
              className="rounded-3xl bg-[#0F0F12] border border-zinc-800 shadow-2xl overflow-hidden backdrop-blur-xl"
            >
              {/* Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#141418] border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="text-xs font-mono text-zinc-400 ml-2">deepak@terminal:~</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>zsh</span>
                </div>
              </div>

              {/* Interactive Command Tabs */}
              <div className="flex items-center gap-1 px-3 py-2 bg-[#0A0A0B] border-b border-zinc-800/80 overflow-x-auto">
                {terminalSnippets.map((snippet, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSnippetIdx(idx)}
                    className={`px-2.5 py-1 rounded text-xs font-mono whitespace-nowrap transition-colors cursor-pointer ${
                      activeSnippetIdx === idx
                        ? 'bg-zinc-800 text-blue-400 font-semibold'
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    $ {snippet.cmd.split('(')[0].split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Terminal Screen Area */}
              <div className="p-5 font-mono text-xs sm:text-sm text-zinc-300 min-h-[240px] sm:min-h-[260px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-blue-400 mb-2 flex-wrap">
                    <span className="text-emerald-400 font-bold">➜</span>
                    <span className="text-blue-400 font-bold">portfolio</span>
                    <span className="text-zinc-500">git:(main)</span>
                    <span className="text-zinc-100 break-all">$ {terminalSnippets[activeSnippetIdx].cmd}</span>
                  </div>

                  <pre className="text-zinc-300 font-mono text-xs leading-relaxed whitespace-pre-wrap overflow-x-auto max-h-[160px]">
                    {displayedText}
                    {isTyping && <span className="inline-block w-2 h-4 bg-blue-400 ml-1 animate-pulse"></span>}
                  </pre>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    API Active on port 3000
                  </span>
                  <span>Node v22 • Mongoose ODM</span>
                </div>
              </div>
            </div>

            {/* Floating Visual Tech Badges */}
            <div className="hidden sm:flex items-center gap-2 absolute -bottom-5 -left-5 p-3 rounded-2xl bg-white dark:bg-[#0F0F12]/95 border border-zinc-200 dark:border-zinc-800 shadow-xl backdrop-blur-md animate-float">
              <div className="w-8 h-8 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-900 dark:text-white">React.js</p>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Single Page Apps</p>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 absolute -top-5 -right-5 p-3 rounded-2xl bg-white dark:bg-[#0F0F12]/95 border border-zinc-200 dark:border-zinc-800 shadow-xl backdrop-blur-md animate-float-delayed">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-900 dark:text-white">MongoDB</p>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400">NoSQL & Mongoose</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
